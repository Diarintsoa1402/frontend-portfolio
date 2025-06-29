import ContactForm from '../components/contactForm';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp,  } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#1a0428] to-[#2E073F]">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#CFEB00]">
            Contactez-<span className="text-[#9456BD]">moi</span>
          </h1>
          <p className="text-xl text-[#9456BD] max-w-2xl mx-auto">
            Discutons de votre projet ou simplement échangeons autour d'un café virtuel !
          </p>
        </motion.div>

        {/* Contenu principal */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Formulaire */}
          <motion.div 
            className="bg-[#3a0f52]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#9456BD]/30 shadow-lg hover:shadow-[#CFEB00]/20 transition-all duration-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[#CFEB00]">Envoyez un message</h2>
            <ContactForm />
          </motion.div>
          
          {/* Informations de contact */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Carte Contact */}
            <motion.div 
              className="bg-[#3a0f52]/30 p-8 rounded-2xl border border-[#9456BD]/20 hover:border-[#CFEB00] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#CFEB00]">Mes coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#CFEB00] mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#CFEB00]">Email</h3>
                    <a href="mailto:contact@example.com" className="text-[#9456BD] hover:text-white transition-colors">
                      diarintsoa1402@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#CFEB00] mt-1">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#CFEB00]">Téléphone</h3>
                    <a href="tel:+1234567890" className="text-[#9456BD] hover:text-white transition-colors">
                      +261 34 46 570 77
                    </a>
                  </div>
                </div>
 <div className="flex items-start gap-4">
                  <div className="text-[#CFEB00] mt-1">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#CFEB00]">WhatsApp</h3>
                    <p className="text-[#9456BD]">+261 34 46 570 77</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#CFEB00] mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#CFEB00]">Localisation</h3>
                    <p className="text-[#9456BD]">Fianarantsoa, Imandry</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div 
              className="bg-[#3a0f52]/30 p-8 rounded-2xl border border-[#9456BD]/20 hover:border-[#CFEB00] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#CFEB00]">Réseaux sociaux</h2>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/diarintsoa-andrianandrianina-29336b328/  " className="text-[#9456BD] hover:text-[#CFEB00] transition-colors text-2xl" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Diarintsoa1402" className="text-[#9456BD] hover:text-[#CFEB00] transition-colors text-2xl" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/Diarintsoa.Andrianandrianina" className="text-[#9456BD] hover:text-[#CFEB00] transition-colors text-2xl" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/diarintsoa_07/" className="text-[#9456BD] hover:text-[#CFEB00] transition-colors text-2xl" aria-label="Instagram">
                  <FaInstagram />
                </a>

              
              </div>
            </motion.div>

            {/* Carte de visite virtuelle */}
            <motion.div 
              className="bg-gradient-to-r from-[#3a0f52] to-[#2E073F] p-8 rounded-2xl border border-[#CFEB00]/20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#CFEB00]">Disponibilité</h3>
              <p className="text-[#9456BD] mb-4">Lundi - Vendredi : 9h - 18h</p>
              <p className="text-sm text-[#9456BD]/80">Réponse garantie sous 24h</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}