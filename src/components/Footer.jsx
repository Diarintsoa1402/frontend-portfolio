import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#2E073F] border-t border-[#9456BD]/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section Disponibilité */}
          <div>
            <h3 className="text-xl font-bold text-[#CFEB00] mb-4">Disponibilité</h3>
            <div className="space-y-2 text-[#9456BD]">
              <p>Lundi - Vendredi, 9h - 18h</p>
              <p>Réponse garantie sous 24h</p>
            </div>
          </div>

          {/* Section Navigation */}
          <div>
            <h3 className="text-xl font-bold text-[#CFEB00] mb-4">Navigation</h3>
            <ul className="space-y-2 text-[#9456BD]">
              <li><a href="/" className="hover:text-[#CFEB00] transition-colors">Accueil</a></li>
              <li><a href="/projects" className="hover:text-[#CFEB00] transition-colors">Projets</a></li>
              <li><a href="/contact" className="hover:text-[#CFEB00] transition-colors">Contact</a></li>
              <li><a href="/services" className="hover:text-[#CFEB00] transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#CFEB00] mb-4">Contact</h3>
            <div className="space-y-2 text-[#9456BD]">
              <div className="flex items-center gap-2">
                <FiMail className="text-[#CFEB00]" />
                <a href="mailto:diarintsoa.dev@gmail.com" className="hover:text-[#CFEB00] transition-colors">
                  diarintsoa.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-[#CFEB00]" />
                <a href="tel:+261344657077" className="hover:text-[#CFEB00] transition-colors">
                  +261 34 46 570 77
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/Diarintsoa1402" className="text-[#9456BD] hover:text-[#CFEB00] text-2xl">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/diarintsoa-andrianandrianina-29336b328/" className="text-[#9456BD] hover:text-[#CFEB00] text-2xl">
                  <FiLinkedin />
                </a>
                  <a href="https://www.facebook.com/Diarintsoa.Andrianandrianina" className="text-[#9456BD] hover:text-[#CFEB00] transition-colors text-2xl" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/diarintsoa_07/" className="text-[#9456BD] hover:text-[#CFEB00] transition-colors text-2xl" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-[#9456BD]/20 text-center">
          <p className="text-[#9456BD]">
            © {new Date().getFullYear()} Diarintsoa Antinah. Tous droits réservés.
          </p>
          <p className="text-sm mt-2 text-[#9456BD]/70">
            Conçu avec passion et Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}