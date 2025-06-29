import React from "react";

const ProjectCard = ({ title, description, image, link, tags }) => {
  return (
    <div className="group bg-[#3a0f52]/50 backdrop-blur-sm border border-[#9456BD]/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#CFEB00]/20 transition-all duration-500 hover:border-[#CFEB00] hover:scale-[1.02]">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
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