import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiPenTool, FiCloud } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiCode className="text-4xl" />,
      title: "Développement Web",
      description: "Création de sites web et applications modernes avec React, Next.js et Node.js pour une expérience utilisateur optimale.",
      features: ["Applications React/Next.js", "Backend Node.js", "Responsive Design"]
    },
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: "Applications Mobile",
      description: "Développement d'applications hybrides performantes pour iOS et Android avec React Native.",
      features: ["Applications cross-platform", "Performances natives", "Intégration API"]
    },
    {
      icon: <FiLayout className="text-4xl" />,
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur intuitives et esthétiques pour améliorer l'engagement.",
      features: ["Prototypage Figma", "Design System", "Tests utilisateurs"]
    },
    {
      icon: <FiDatabase className="text-4xl" />,
      title: "Solutions Backend",
      description: "Architecture et développement d'APIs robustes et sécurisées pour alimenter vos applications.",
      features: ["API REST/GraphQL", "Bases de données", "Microservices"]
    },
    {
      icon: <FiPenTool className="text-4xl" />,
      title: "Conception Graphique",
      description: "Création d'identités visuelles et supports print/web cohérents avec votre image de marque.",
      features: ["Logos & branding", "Maquettes", "Assets digitaux"]
    },
    {
      icon: <FiCloud className="text-4xl" />,
      title: "Deploiement & Cloud",
      description: "Mise en place d'infrastructures cloud scalables et sécurisées pour héberger vos applications.",
      features: ["AWS/GCP", "CI/CD", "Surveillance & maintenance"]
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#1a0428] to-[#2E073F] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#CFEB00] mb-4">
            Mes <span className="text-[#9456BD]">Services</span>
          </h2>
          <p className="text-xl text-[#9456BD] max-w-2xl mx-auto">
            Des solutions sur mesure pour concrétiser vos projets digitaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-8 hover:border-[#CFEB00] transition-all"
            >
              <div className="text-[#CFEB00] mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#CFEB00] mb-3">
                {service.title}
              </h3>
              <p className="text-[#9456BD] mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#CFEB00] mr-2">•</span>
                    <span className="text-[#9456BD]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-[#3a0f52]/30 border border-[#CFEB00]/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-[#CFEB00] mb-4">
            Processus de travail
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Consultation", desc: "Analyse des besoins" },
              { step: "2", title: "Conception", desc: "Maquettes & prototypage" },
              { step: "3", title: "Développement", desc: "Implémentation technique" },
              { step: "4", title: "Livraison", desc: "Déploiement & formation" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-[#2E073F] rounded-lg">
                <div className="w-10 h-10 bg-[#CFEB00] text-[#2E073F] rounded-full flex items-center justify-center font-bold mb-2 mx-auto">
                  {item.step}
                </div>
                <h4 className="font-bold text-[#CFEB00]">{item.title}</h4>
                <p className="text-sm text-[#9456BD]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}