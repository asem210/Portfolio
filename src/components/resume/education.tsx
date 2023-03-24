import React from "react";
import { motion } from "framer-motion";

import ResumeCard from "./card";

export const Education: React.FC<{}> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col md:flex-row gap-10 lg:gap-20 "
    >
      {/* part one */}
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2019-Actualidad
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Estudios</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Estudiante de Ingeniería de Sistemas e Informática"
            subTitle="Universidad Nacional Mayor de San Marcos (2019 - Actualidad)"
            result="En curso"
            des="Actualmente me encuentro cursando el noveno ciclo de la carrera de Ingeniería de Sistemas e Informática, por lo cual tengo previsto culminarla a fines del presente año."
            linkState={false}
            link=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022-Actualidad
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificaciones</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Scrum Fundamentals"
            subTitle="Scrum Study - (2022 - Actualidad)"
            result="Level: Basic"
            des="Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum;  get a basic understanding of how Scrum framework works in delivering successful projects."
            linkState={true}
            link="https://www.scrumstudy.com/certification/verify?type=SFC&number=941879"
          />
        </div>
      </div>
    </motion.div>
  );
};
