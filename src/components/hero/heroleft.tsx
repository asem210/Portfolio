import React from "react";
import styles from "../../../styles";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";

import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
export const HeroLeft = () => {
  const [text] = useTypewriter({
    words: [
      "Desarrollador Full Stack.",
      "Estudiante de Ingeniería de Sistemas.",
      "Desarrollador BackEnd.",
      "Desarrollador FrontEnd.",
    ],
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    loop: true,
  });

  return (
    <section id="home" className={`h-fit  bg-fourthmisc flex flex-col`}>
      <div className=" text-white text-[20px]  font-normal uppercase font-belleza ">
        Bienvenido a mi portafolio{" "}
      </div>

      <div className="font-poppins text-white sm:text-[52px]  font-semibold flex text-[40px]">
        <h1>
          Hola, soy{" "}
          <span className="text-firstmisc capitalize">Gustavo Pazos</span>
        </h1>
      </div>
      <div className="font-poppins text-white sm:text-[36px] font-semibold text-[30px] w-full">
        <h1>
          un {""} <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#3A98B9" />
        </h1>
      </div>

      <div className="font-poppins text-white font-thin text-base  tracking-wide leading-6 pt-3 text-justify md:w-[70%] w-full">
        <h1>
          Bachiller en Ingeniería de Sistemas en la Universidad Nacional Mayor
          de San Marcos, culminé la carrera en marzo del 2024, interesado en el
          ámbito de desarrollo web, centrándome en el desarrollo con el stack
          PERN (PostgreSQL, Express.Js, React.Js, Node.Js).{" "}
          <Cursor cursorStyle="|" cursorColor="#3A98B9" />
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col sm:justify-between pt-14 w-[70%]">
        <div>
          <h1 className="font-ssp text-white text-[20px]   font-normal uppercase">
            Encuentrame
          </h1>
          <div className="flex gap-4 pt-4">
            <span className="bannerIcon">
              <BsWhatsapp />
            </span>
            <span className="bannerIcon">
              <GrLinkedin />
            </span>
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </div>
        </div>

        <div>
          <h1 className="font-ssp text-white text-[20px]   font-normal uppercase sm:pt-0 pt-10">
            BEST SKILLS
          </h1>
          <div className="flex gap-4 pt-4 ">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>

            <span className="bannerIcon">
              <SiPostgresql />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
