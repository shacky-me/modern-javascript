import React from "react";
import { Button } from "@mui/material";
import image1hero from "../assets/images/image1hero.jpg";
import image2hero from "../assets/images/image2hero.jpeg";

const Home = () => {
  return (
    <section id="home" className="w-[95%] md:w-full mb-50">
      <div className="flex justify-center items-center mx-auto pt-25 w-[60%]">
        <h1 className="text-xl md:text-2xl leading-13 tracking-wide font-[400] w-full md:w-[75%]">
          <span className="text-[#bba69e] md:text-4xl font-light">
            Hi, I'm Meshack,
          </span>{" "}
          a software developer and front-end specialist. I build thoughtful user
          experiences that feel natural; clean, responsive, and designed with
          real people in mind.
        </h1>
      </div>

      <div className="flex justify-center m-5 gap-5">
        <Button variant="outlined">Let's Talk</Button>
        <Button variant="contained">My Skills</Button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="">
          <img
            src={image1hero}
            alt="setup"
            className="w-[250px] md:w-[300px] h-auto rounded-xl shadow-xl"
          />
        </div>
        <div className="">
          <img
            src={image2hero}
            alt="mobile"
            className="w-[250px] md:w-[300px] h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
