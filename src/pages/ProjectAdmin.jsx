import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../services/projectService';

export default function ProjectAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: [''],
    link: '',
    tags: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadProjects = async () => {
    setIsLoading(true);
    try {
      const data = await getProjects();
      const formatted = data.map((project) => ({
        ...project,
        tags: Array.isArray(project.tags)
          ? project.tags
          : typeof project.tags === 'string'
          ? project.tags.split(',').map((tag) => tag.trim())
          : [],
        image: Array.isArray(project.image)
          ? project.image
          : typeof project.image === 'string'
          ? project.image.split(',').map((img) => img.trim())
          : [],
      }));
      setProjects(formatted);
    } catch (error) {
      console.error("Erreur de chargement:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...form,
      tags: form.tags.split(',').map((tag) => tag.trim()),
    };

    try {
      if (editingId) {
        await updateProject(editingId, dataToSend);
      } else {
        await createProject(dataToSend);
      }
      setForm({
        title: '',
        description: '',
        image: [''],
        link: '',
        tags: '',
      });
      setEditingId(null);
      await loadProjects();
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      image: Array.isArray(project.image) ? project.image : [project.image],
      link: project.link || '',
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : '',
    });
    setEditingId(project.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Supprimer ce projet ?');
    if (confirmed) {
      try {
        await deleteProject(id);
        await loadProjects();
      } catch (error) {
        console.error("Erreur de suppression:", error);
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-[#1a0428] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#CFEB00]">
            {editingId ? 'Modifier un projet' : 'Ajouter un nouveau projet'}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#2E073F]/50 p-6 rounded-xl border border-[#9456BD]/30"
          >
            {['title', 'description', 'link', 'tags'].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-[#CFEB00] capitalize">{field}</label>
                {field === 'description' ? (
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 bg-[#3a0f52] border border-[#9456BD]/50 rounded-lg"
                    placeholder="Description du projet"
                  />
                ) : (
                  <input
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#3a0f52] border border-[#9456BD]/50 rounded-lg"
                    placeholder={
                      field === 'tags' ? 'Ex: React, Node, PostgreSQL' :
                      field === 'link' ? 'URL vers le projet' : ''
                    }
                  />
                )}
              </div>
            ))}

            {/* Champs dynamiques pour les images */}
            <div className="space-y-2">
              <label className="block text-[#CFEB00]">Images (URLs)</label>
              {form.image.map((img, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={img}
                    onChange={(e) => {
                      const newImages = [...form.image];
                      newImages[idx] = e.target.value;
                      setForm({ ...form, image: newImages });
                    }}
                    className="flex-1 p-2 bg-[#3a0f52] border border-[#9456BD]/50 rounded"
                    placeholder={`URL image #${idx + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newImages = form.image.filter((_, i) => i !== idx);
                      setForm({ ...form, image: newImages });
                    }}
                    className="px-2 text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setForm({ ...form, image: [...form.image, ''] })}
                className="text-sm text-[#CFEB00] hover:underline"
              >
                + Ajouter une image
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-[#CFEB00] text-[#2E073F] rounded-lg font-bold hover:bg-[#b8d400]"
              >
                {editingId ? 'Mettre à jour' : 'Ajouter le projet'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setForm({ title: '', description: '', image: [''], link: '', tags: '' });
                    setEditingId(null);
                  }}
                  className="px-6 py-3 border border-[#9456BD] text-[#9456BD] rounded-lg font-bold hover:bg-[#9456BD] hover:text-white"
                >
                  Annuler
                </button>
              )}
            </div>
          </form>

          {/* Liste des projets */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#CFEB00] mb-6">Projets existants</h3>

            {isLoading ? (
              <div className="grid gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-24 bg-[#3a0f52] rounded-xl animate-pulse"></div>
                ))}
              </div>
            ) : (
              <AnimatePresence>
                {projects.length === 0 ? (
                  <p className="text-[#9456BD] text-center py-8">Aucun projet</p>
                ) : (
                  <ul className="grid gap-4">
                    {projects.map((project) => (
                      <motion.li
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl overflow-hidden hover:border-[#CFEB00]"
                      >
                        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-[#CFEB00]">{project.title}</h4>
                            <p className="text-[#9456BD] mt-2">{project.description}</p>
                            {Array.isArray(project.tags) && project.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, i) => (
                                  <span key={i} className="text-xs px-2 py-1 bg-[#2E073F] text-[#CFEB00] rounded-full border border-[#9456BD]">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-[#CFEB00] hover:underline"
                              >
                                Voir le projet →
                              </a>
                            )}
                            {Array.isArray(project.image) && project.image.length > 0 && (
                              <div className="grid grid-cols-2 gap-2 mt-4">
                                {project.image.map((img, i) => (
                                  <img
                                    key={i}
                                    src={img}
                                    alt={project.title ? `${project.title} ${i + 1}` : `Projet ${i + 1}`}
                                    className="h-24 w-full object-cover rounded"
                                  />
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex gap-3">
                            <button
                              onClick={() => handleEdit(project)}
                              className="px-4 py-2 bg-[#9456BD] text-white rounded-lg hover:bg-[#7d3fa8]"
                            >
                              Modifier
                            </button>
                            <button
                              onClick={() => handleDelete(project.id)}
                              className="px-4 py-2 bg-red-600/90 text-white rounded-lg hover:bg-red-700"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
