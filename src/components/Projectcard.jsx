import React, { useState } from "react";

const ProjectCard = ({ title, description, image, link, tags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (image.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }
  };

  const prevImage = () => {
    if (image.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
    }
  };

  return (
    <div className="group bg-[#3a0f52]/50 backdrop-blur-sm border border-[#9456BD]/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#CFEB00]/20 transition-all duration-500 hover:border-[#CFEB00] hover:scale-[1.02]">
      {Array.isArray(image) && image.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          {image.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#2E073F]/70 text-[#CFEB00] p-1 rounded-full hover:bg-[#CFEB00] hover:text-[#2E073F]"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#2E073F]/70 text-[#CFEB00] p-1 rounded-full hover:bg-[#CFEB00] hover:text-[#2E073F]"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#CFEB00] mb-2">{title}</h3>
        <p className="text-[#9456BD] mb-4">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-[#2E073F] text-[#CFEB00] rounded-full border border-[#9456BD]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#CFEB00] text-[#2E073F] px-5 py-2 rounded-full font-semibold hover:bg-[#b8d400] hover:shadow-md hover:shadow-[#CFEB00]/30 transition-all"
          >
            Voir le projet →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
