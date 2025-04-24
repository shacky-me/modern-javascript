import React from "react";
import about1 from "../assets/images/about1.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#fdfdfd] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={about1}
            alt="Meshack"
            className="rounded-[2rem] shadow-2xl w-[80%] h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            🧑 Meet <span className="text-[#007e73]">Meshack</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-5">
            A forward-thinking{" "}
            <span className="font-medium text-[#007e73]">IT Specialist</span>{" "}
            and{" "}
            <span className="font-medium text-[#007e73]">
              Front-End Developer
            </span>{" "}
            with a background in Business Information Technology and practical
            technical experience.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-5">
            A graduate of The Cooperative University of Kenya, I also hold a
            widely recognized certification from ALX Africa, having qualified as
            a Front-End Software Developer after completing an intensive
            12-month program focused on real-world, hands-on engineering.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            My toolkit includes HTML5, CSS3, JavaScript (Vanilla), React.js,
            TypeScript, MySQL, Git, and GitHub — alongside tools and
            technologies like Webpack, Babel, Vite, Jest, Netlify, Vercel, Linux
            fundamentals, shell scripting, and basic Python. I’m passionate
            about writing clean code, creating intuitive user interfaces, and
            staying current with modern web development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
