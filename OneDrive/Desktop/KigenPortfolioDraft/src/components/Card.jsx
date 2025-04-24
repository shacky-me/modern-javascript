import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = ({ title, description, image, tech, github, demo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col">
      {/* Image */}
      <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech?.map((item, index) => (
          <span
            key={index}
            className="bg-[#59b3af] text-white text-xs px-2 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex gap-3">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#007e73] text-white px-4 py-2 rounded-full hover:bg-[#045e56] transition"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#000000] px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
