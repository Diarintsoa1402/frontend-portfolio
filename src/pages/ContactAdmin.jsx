import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getContacts, deleteContact } from '../services/contactService';

export default function ContactAdmin() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  const loadContacts = async () => {
    setIsLoading(true);
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Erreur de chargement:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const userConfirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce message ?');
    if (userConfirmed) {
      try {
        await deleteContact(id);
        await loadContacts();
      } catch (error) {
        console.error("Erreur de suppression:", error);
      }
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="min-h-screen py-12 px-6 bg-[#1a0428] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#CFEB00] mb-6">Messages reçus</h2>
          
          {isLoading ? (
            <div className="grid gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-[#3a0f52] rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <AnimatePresence>
              {contacts.length === 0 ? (
                <motion.p 
                  className="text-[#9456BD] text-center py-12 text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Aucun message pour l'instant
                </motion.p>
              ) : (
                <ul className="grid gap-6">
                  {contacts.map((msg) => (
                    <motion.li
                      key={msg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl overflow-hidden hover:border-[#CFEB00] transition-colors"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                              <h3 className="text-xl font-bold text-[#CFEB00]">{msg.name}</h3>
                              <a 
                                href={`mailto:${msg.email}`} 
                                className="text-[#9456BD] hover:text-[#CFEB00] transition-colors"
                              >
                                {msg.email}
                              </a>
                            </div>
                            <div className="relative">
                              {selectedId === msg.id ? (
                                <p className="text-[#9456BD] whitespace-pre-line">{msg.message}</p>
                              ) : (
                                <p className="text-[#9456BD] line-clamp-3">
                                  {msg.message}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => setSelectedId(selectedId === msg.id ? null : msg.id)}
                              className="px-3 py-1 border border-[#9456BD] text-[#9456BD] rounded-lg hover:bg-[#9456BD] hover:text-white transition-colors text-sm"
                            >
                              {selectedId === msg.id ? 'Réduire' : 'Lire plus'}
                            </button>
                            <button
                              onClick={() => handleDelete(msg.id)}
                              className="px-3 py-1 bg-red-600/90 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>
                        
                        {msg.createdAt && (
                          <p className="text-xs text-[#9456BD]/70 mt-3">
                            Reçu le {new Date(msg.createdAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}