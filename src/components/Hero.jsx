import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../assets/images/hero1.jpg';
import { TypeAnimation } from 'react-type-animation'; // Import du package

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a0428] to-[#2E073F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Partie Texte */}
          <motion.div 
            className="lg:w-1/2 text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="text-[#CFEB00]">ANDRIANANDRIANINA</span>
            </h1>
            <motion.div 
              className="inline-block px-6 py-2 bg-[#3a0f52] rounded-full border border-[#9456BD] mb-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl text-[#CFEB00]">Diarintsoa Antinah</h2>
            </motion.div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                 
                ]}
                wrapper="span"
                speed={50}
                style={{ color: '#9456BD', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h3>
            
            
            
            <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              Je conçois des expériences numériques intuitives pour simplifier la vie des utilisateurs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#about" 
                className="px-6 py-3 bg-[#CFEB00] text-[#2E073F] rounded-full font-bold hover:bg-[#b8d400] transition-colors text-sm md:text-base text-center"
                whileHover={{ scale: 1.1 }}
              >
                En savoir plus
              </motion.a>
              <motion.a 
                href="/contact" 
                className="px-6 py-3 border-2 border-[#CFEB00] text-[#CFEB00] rounded-full font-bold hover:bg-[#CFEB00] hover:text-[#2E073F] transition-colors text-sm md:text-base text-center"
                whileHover={{ scale: 1.1 }}
              >
                Me contacter
              </motion.a>
            </div>
          </motion.div>

          {/* Partie Photo */}
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#CFEB00] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative h-64 w-64 md:h-80 md:w-96 lg:h-100 lg:w-100 rounded-2xl overflow-hidden border-4 border-[#9456BD] z-10">
                <img 
                  src={HeroImg} 
                  alt="Diarintsoa Antinah" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}