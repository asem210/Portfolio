import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./card";
export const Experiences: React.FC<{}> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lg:gap-20"
    >
      {/* Sección de Experiencia Laboral */}
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024-Actualidad
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experiencia Laboral
          </h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ExperienceCard
            title="Desarrollador Trainee"
            subTitle="Moventi - (Agosto 2024 - Actualidad)"
            result="En progreso"
            des="Comencé mis prácticas profesionales como Trainee Fullstack Developer, trabajando en el desarrollo y mantenimiento de aplicaciones tanto en el frontend como en el backend. Colaboré estrechamente con el equipo para diseñar, implementar y optimizar soluciones tecnológicas que cumplieran con los requisitos de los clientes. Apliqué tecnologías como React, Node.js, y Python para construir una experiencia de usuario fluida y robusta."
            linkState={false}
            link=""
            milestones={[
              {
                title: "Desarrollo e integración de OCR",
                description:
                  "Desarrollé e integré un modelo OCR en Python con Flask para la extracción de texto en tiempo real desde imágenes de vouchers en una aplicación móvil React Native. Utilicé OpenCV para mejorar el preprocesamiento de imágenes y optimicé el análisis de texto con OpenAI, permitiendo una digitalización eficiente de vouchers y mejorando la experiencia del usuario.",
              },
              {
                title: "Mejora de diseño responsive y UX",
                description:
                  "Mejoré el diseño responsive y la experiencia de usuario de aplicaciones web, implementando un enfoque móvil primero (mobile-first) con CSS Grid, Flexbox y media queries. Optimicé la interacción del usuario con animaciones suaves y transiciones, lo que resultó en una interfaz más accesible y una mayor retención de usuarios.",
              },
            ]}
            technologies={[
              "React",
              "Node.js",
              "TypeScript",
              "Python",
              "Flask",
              "OpenCV",
              "OpenAI",
              "React Native",
              "Git",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};
