import React, { useState } from "react";
import Title from "../tittle/tittle";

import { ProjectsCard } from "./card";

import projects from "../../constants/projects/projects";

import data from "../../jsons/projects.json";

export const Projects: React.FC<{}> = ({}) => {
  const [projectsList, setProjectsList] = useState<projects[]>(data);

  return (
    <section id="projects" className="border-b-4 border-firstmisc pb-20">
      <div className="flex ">
        <Title title="Explora mi portafolio" des="Mis proyectos web" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsList.map((card, idx) => (
          <div id={card.title}>
            <ProjectsCard
              title={card.title}
              des={card.description}
              src={card.img}
              link={card.link}
              technologies={card.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
