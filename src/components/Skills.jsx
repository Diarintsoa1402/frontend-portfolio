import { motion } from 'framer-motion';

export default function Skills() {
    const skills = [
      { name: "Frontend", technologies: ["React", "Next.js", "vuejs","Tailwind CSS", "JavaScript", "TypeScript,", "HTML", "CSS"] },
      { name: "Backend", technologies: ["Node.js", "Express", "Python","PHP", "Django", "Postgres","Angular"] },
      { name: "Design", technologies: ["Figma", "Adobe XD", "UI/UX", "Capcut", "Canva"] },
      { name: "Outils", technologies: ["Git", "Docker", "VS Code", "Postman", "Android Studio","virtualbox"] }
    ];

    return (
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-[#2E073F] to-[#1a0428]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#CFEB00] mb-4">
              Mes <span className="text-[#9456BD]">Compétences</span>
            </h2>
            <p className="text-xl text-[#9456BD] max-w-2xl mx-auto">
              Technologies et outils que j'utilise pour créer des solutions innovantes
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {skills.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-[#3a0f52]/50 backdrop-blur-sm border border-[#9456BD]/30 rounded-2xl p-6 hover:border-[#CFEB00] transition-all duration-300 hover:shadow-lg hover:shadow-[#CFEB00]/10"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-[#CFEB00] mb-4 text-center">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.li 
                      key={techIndex} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-[#CFEB00] rounded-full mr-3"></span>
                      <span className="text-[#9456BD]">{tech}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Barres de progression supplémentaires */}
          <motion.div 
            className="mt-16 bg-[#3a0f52]/30 border border-[#9456BD]/20 rounded-2xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-[#CFEB00] mb-6 text-center">
              Niveau de maîtrise
            </h3>
            <div className="space-y-6">
              {[
                { name: "Développement Web et mobile ", level: 90 },
                { name: "UI/UX Design", level: 85 },
                { name: "Gestion de Projet", level: 75 },
                { name: "DevOps", level: 65 }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-[#CFEB00]">{skill.name}</span>
                    <span className="text-[#9456BD]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#2E073F] rounded-full h-2.5">
                    <div 
                      className="bg-[#CFEB00] h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
}