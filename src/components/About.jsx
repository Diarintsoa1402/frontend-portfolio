import { motion } from 'framer-motion';
import HeroImg from '../assets/images/Hero.JPG'; // ⬅️ Import de l’image
import CV from '../assets/CV.pdf';
export default function About() {
    return (
      <section id="about" className="py-20 px-6 bg-[#2E073F] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Partie Photo */}
          <motion.div 
            className="order-1 md:order-none"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#9456BD] rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative h-96 w-full rounded-xl overflow-hidden border-4 border-[#CFEB00]/50">
                <img 
                  src={HeroImg}
                  alt="Diarintsoa Antinah à l'ENI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
  
          {/* Partie Texte */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#CFEB00]">
              À <span className="text-[#9456BD]">propos</span>
            </h2>
            <motion.div 
              className="space-y-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>
                Je suis un étudiant de l'Ecole Nationale d'Informatique, passionné par la créativité et la numérisation.
              </p>
              <p>
                J'ai l'expérience de travailler sur le développement web et le développement d'applications desktop.
              </p>
              <p>
                Mon objectif est de créer des solutions technologiques qui allient esthétisme et fonctionnalité.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
            <a 
                href={CV} // Utilisation du chemin correct vers le fichier PDF
                download
                className="px-6 py-3 bg-[#CFEB00] text-[#2E073F] rounded-full font-bold hover:bg-[#b8d400] transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Télécharger mon CV
              </a>
            </motion.div>
  
            {/* Grille de compétences */}
            <motion.div 
              className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {['React', 'Node.js', 'UI/UX', 'Python', 'Postgres', 'Figma', 'Docker', 'VS Code', 'Postman', 'Android Studio', 'Git','Captcaht','visio meeting'].map((skill) => (
                <motion.div 
                  key={skill} 
                  className="bg-[#3a0f52] border border-[#9456BD]/30 rounded-xl p-4 text-center hover:border-[#CFEB00] transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="font-medium text-[#CFEB00]">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
}