import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiRadio } from 'react-icons/fi';

export default function EducationExperience() {
  return (
    <section id="formations" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#1a0428] to-[#2E073F] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#CFEB00] mb-12 text-center">
            Formations et <span className="text-[#9456BD]">Expériences</span>
          </h2>

          {/* Section Formations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#CFEB00] mb-6 border-b border-[#9456BD]/30 pb-2">
              Formations et Diplômes
            </h3>

            <div className="space-y-8">
              {/* Formation 1 */}
               <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-[#CFEB00] mb-2">
                  Deuxième année de licence en informatique générale
                </h4>
                <p className="text-[#9456BD] mb-1">2023-2024, Tanambao Fianarantsoa</p>
                <p className="text-[#CFEB00]/80">ECOLE NATIONALE D'INFORMATIQUE</p>
              </motion.div>
              {/* Formation 2 */}
              <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-[#CFEB00] mb-2">
                  Troisieme année de licence en informatique générale
                </h4>
                <p className="text-[#9456BD] mb-1">2023-2024, Tanambao Fianarantsoa</p>
                <p className="text-[#9456BD] mb-1">Obtention du Diplome en Licence Professionnelle en Informatique Générale</p>
                <p className="text-[#CFEB00]/80">ECOLE NATIONALE D'INFORMATIQUE</p>
              </motion.div>

              {/* Formation 3 */}
              <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-[#CFEB00] mb-2">
                  Première année de licence en informatique générale
                </h4>
                <p className="text-[#9456BD] mb-1">2022-2023, Tanambao Fianarantsoa</p>
                <p className="text-[#CFEB00]/80">ECOLE NATIONALE D'INFORMATIQUE</p>
              </motion.div>

              {/* Formation 4 */}
              <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-[#CFEB00] mb-2">
                  Baccalauréat série D (bien)
                </h4>
                <p className="text-[#9456BD] mb-1">2021-2022, Tambohobe Fianarantsoa</p>
                <p className="text-[#CFEB00]/80">Saint Joseph de Cluny</p>
              </motion.div>
            </div>
          </div>

          {/* Section Expériences */}
          <div>
            <h3 className="text-2xl font-bold text-[#CFEB00] mb-6 border-b border-[#9456BD]/30 pb-2">
              Stages et Expériences
            </h3>

            <div className="space-y-8">
              {/* Expérience 0 */}
                 <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-[#CFEB00] mt-1">
                    <FiRadio className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#CFEB00]">Stage au sein de la Radio Tsiry</h4>
                    <p className="text-[#9456BD]">2024</p>
                  </div>
                </div>
                <div className="pl-10 space-y-2">
                  <p><span className="text-[#CFEB00]">Thème :</span> CONCEPTION ET DÉVELOPPEMENT DE LA PLATEFORME 
FUTUREMAKERS HUB UNE SOLUTION NUMÉRIQUE 
INCLUSIVE POUR L’ÉDUCATION ENTREPRENEURIALE 
DES ENFANTS ET L’AUTONOMISATION DIGITALE DES 
FEMMES </p>
                  <p><span className="text-[#CFEB00]">Durée :</span> Trois mois</p>
                  <p><span className="text-[#CFEB00]">Mention :</span> Honorable </p>
                </div>
              </motion.div>

              {/* Expérience 1 */}
              <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-[#CFEB00] mt-1">
                    <FiRadio className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#CFEB00]">Stage au sein de la Radio Tsiry</h4>
                    <p className="text-[#9456BD]">2024</p>
                  </div>
                </div>
                <div className="pl-10 space-y-2">
                  <p><span className="text-[#CFEB00]">Thème :</span> Conception d'un logiciel de système de facturation numérique</p>
                  <p><span className="text-[#CFEB00]">Durée :</span> Deux mois</p>
                  <p><span className="text-[#CFEB00]">Mention :</span> Honorable </p>
                </div>
              </motion.div>

              {/* Expérience 2 */}
              <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-[#CFEB00] mt-1">
                    <FiCheck className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#CFEB00]">Projet fin d'année</h4>
                    <p className="text-[#9456BD]">2023</p>
                  </div>
                </div>
                <div className="pl-10 space-y-2">
                  <p><span className="text-[#CFEB00]">Thème :</span> Conception et Modélisation d'un application Web de gestion de voyage</p>
                  <p><span className="text-[#CFEB00]">Durée :</span> Deux mois</p>
                  <p><span className="text-[#CFEB00]">Mention :</span> Très Bien </p>
                </div>
              </motion.div>

              {/* Expérience 3 */}
              <motion.div 
                className="bg-[#3a0f52]/50 border border-[#9456BD]/30 rounded-xl p-6 hover:border-[#CFEB00] transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-[#CFEB00] mt-1">
                    <FiCheck className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#CFEB00]">Projets personnels</h4>
                    <p className="text-[#9456BD]">2022-2024</p>
                  </div>
                </div>
                <div className="pl-10 space-y-2">
                  <p><span className="text-[#CFEB00]">Thèmes :</span></p>
                  <ul className="list-disc list-inside text-[#9456BD]">
                    <li>Portfolio (Web)</li>
                    <li>Gestion d'élève (Web)</li>
                    <li>Prototype de mon portfolio (Ux Design)</li>
                  </ul>
                  <p><span className="text-[#CFEB00]">Durée :</span> Un mois</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}