import { useState } from 'react';
import { sendContactMessage } from '../services/contactService';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendContactMessage(form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {sent && (
        <div className="p-4 mb-4 bg-[#CFEB00]/20 text-[#CFEB00] border border-[#CFEB00] rounded-lg">
          Message envoyé avec succès !
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-[#9456BD]">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="w-full px-4 py-3 bg-[#2E073F] border border-[#9456BD]/30 rounded-lg focus:ring-2 focus:ring-[#CFEB00] focus:border-transparent text-white placeholder-[#9456BD]/70"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-[#9456BD]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          className="w-full px-4 py-3 bg-[#2E073F] border border-[#9456BD]/30 rounded-lg focus:ring-2 focus:ring-[#CFEB00] focus:border-transparent text-white placeholder-[#9456BD]/70"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-[#9456BD]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Dites-moi tout..."
          rows="5"
          className="w-full px-4 py-3 bg-[#2E073F] border border-[#9456BD]/30 rounded-lg focus:ring-2 focus:ring-[#CFEB00] focus:border-transparent text-white placeholder-[#9456BD]/70"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
          isLoading
            ? 'bg-[#9456BD] cursor-not-allowed'
            : 'bg-[#CFEB00] hover:bg-[#b8d400] text-[#2E073F] hover:shadow-lg hover:shadow-[#CFEB00]/30'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        ) : (
          'Envoyer le message'
        )}
      </button>
    </form>
  );
}