import React from "react";
import Card from "../components/Card";
import screenshot1 from "../assets/images/screenshot1.png";
import screenshot2 from "../assets/images/screenshot2.png";
import screenshot3 from "../assets/images/screenshot3.png";
import screenshot4 from "../assets/images/screenshot4.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f9f9f9] py-16 px-4 md:px-12 lg:px-24 min-h-screen"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">My Projects</h2>
        <p className="text-gray-500 text-lg">
          A showcase of some cool stuff I've built.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Render multiple cards */}
        {/* card number1 */}
        <Card
          title="E-Commerce Website"
          description="A fully responsive e-commerce website built with HTML, CSS, and JavaScript."
          image={screenshot1}
          tech={["HTML", "CSS", "JavaScript(Vanilla)"]}
          github="https://github.com/shacky-me/EcommerceWebsite.git"
          demo="https://ecommbyshack.vercel.app/"
        />

        {/* card number2 */}
        <Card
          title="nike-landing-page"
          description="A fully responsive Nike landing page built with ReactJs and TailwindCSS."
          image={screenshot2}
          tech={["ReactJs, TailwindCSS"]}
          github="https://github.com/shacky-me/Nike_LandingPage.git"
          demo="https://nike-landing-page-pied-nine.vercel.app/"
        />

        {/* card number3 */}
        <Card
          title="Job Portal Website"
          description="A fully responsive job portal website built with ReactJs and TailwindCSS."
          image={screenshot3}
          tech={["ReactJs, TailwindCSS"]}
          github="https://github.com/shacky-me/ReactJs-Job-Portal.git"
          demo="https://react-js-job-portal-pied.vercel.app/"
        />

        {/* card number4 */}
        <Card
          title="A Custom Merchandise Web Application"
          description="A fully responsive merchandise web application built with Vanilla JavaScript, Html5 & Css3."
          image={screenshot4}
          tech={["HTML", "CSS", "JavaScript(Vanilla)", "Python", "Django"]}
          github="https://github.com/shacky-me/TailorShack-Merch-Design-Website.git"
          demo="https://ecommbyshack.vercel.app/"
        />

        {/* card number5 */}
        {/* <Card
          title="E-Commerce Website"
          description="A fully responsive e-commerce website built with HTML, CSS, and JavaScript."
          image={screenshot1}
          tech={["HTML", "CSS", "JavaScript(Vanilla)"]}
          github="https://github.com/shacky-me/EcommerceWebsite.git"
          demo="https://ecommbyshack.vercel.app/"
        /> */}

        {/* card number6 */}
        {/* <Card
          title="E-Commerce Website"
          description="A fully responsive e-commerce website built with HTML, CSS, and JavaScript."
          image={screenshot1}
          tech={["HTML", "CSS", "JavaScript(Vanilla)"]}
          github="https://github.com/shacky-me/EcommerceWebsite.git"
          demo="https://ecommbyshack.vercel.app/"
        /> */}
      </div>
    </section>
  );
};

export default Projects;
