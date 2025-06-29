import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import EducationExperience from "../components/EducationExperience";
import Services from "../components/Services";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#2E073F] text-white">
      <div data-aos="fade-up"><Hero /></div>
      <div data-aos="fade-right"><About /></div>
      <div data-aos="fade-left"><Skills /></div>
      <div data-aos="zoom-in"><Projects /></div>
      <div data-aos="fade-up"><EducationExperience /></div>
         <div data-aos="fade-up"><Services /></div>
      <div data-aos="fade-up"><Contact /></div>
    </div>
  );
};

export default Home;