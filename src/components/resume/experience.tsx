import React from "react";
import { motion } from "framer-motion";

import ResumeCard from "./card";

export const Experiences: React.FC<{}> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lg:gap-20"
    >
      {/* Parte única: Experiencia laboral */}
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
          <ResumeCard
            title="Desarrollador Trainee"
            subTitle="Moventi - (2024 - Actualidad)"
            result="En progreso"
            des="Mantuve software no crítico para apoyar las operaciones del sistema. Colaboré con los clientes para comprender sus requisitos y asegurar que las soluciones cumplieran con los objetivos comerciales. Trabajé con el equipo para proporcionar documentación técnica."
            linkState={false}
            link=""
          />
        </div>
      </div>
    </motion.div>
  );
};
