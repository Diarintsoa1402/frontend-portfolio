import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Projectcard";
import { getProjects } from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        // Formater les tags (au cas où ce ne sont pas des tableaux)
        const formatted = data.map((project) => ({
          ...project,
          tags: Array.isArray(project.tags)
            ? project.tags
            : typeof project.tags === 'string'
            ? project.tags.split(',').map((tag) => tag.trim())
            : [],
        }));
        setProjects(formatted);
      } catch (error) {
        console.error("Erreur de chargement des projets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#1a0428] to-[#2E073F]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#CFEB00] mb-4">
            Mes <span className="text-[#9456BD]">Projets</span>
          </h2>
          <p className="text-xl text-[#9456BD] max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-[#3a0f52] rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="px-8 py-3 border-2 border-[#CFEB00] text-[#CFEB00] rounded-full font-semibold hover:bg-[#CFEB00] hover:text-[#2E073F] transition-all">
            Voir plus de projets
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
