import React, { useState } from "react";
import Title from "../tittle/tittle";
import { Education } from "./education";
import { Skills } from "./skills";
import { Experiences } from "./experience";

export const Resume: React.FC<{}> = () => {
  const [educationState, setEducationState] = useState(true);
  const [skillState, setSkillState] = useState(false);
  const [experienceState, setExperienceState] = useState(false);
  const [title, setTitle] = useState("Mis logros académicos");
  const activateEducation = () => {
    setEducationState(true);
    setExperienceState(false);
    setSkillState(false);
    setTitle("Mis logros académicos");
  };

  const activateSkills = () => {
    setEducationState(false);
    setExperienceState(false);
    setSkillState(true);
    setTitle("Mis conocimientos y habilidades");
  };

  const activateExperience = () => {
    setEducationState(false);
    setExperienceState(true);
    setSkillState(false);
    setTitle("Mi experiencia laboral");
  };

  return (
    <section id="resume" className="border-b-4 border-firstmisc pb-20">
      <div className="flex ">
        <Title title="Explora mi portafolio" des={title} />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3 text-center text-[18px] bg-thirdmisc items-center font-poppins">
          <li
            onClick={activateEducation}
            className={`${
              educationState
                ? " border-2  border-firstmisc rounded-sm"
                : "border-transparent"
            } py-4 cursor-pointer`}
          >
            Estudios
          </li>
          <li
            onClick={activateSkills}
            className={`${
              skillState
                ? " border-2 border-firstmisc rounded-sm"
                : " border-transparent"
            } py-4 cursor-pointer`}
          >
            Habilidades
          </li>

          <li
            onClick={activateExperience}
            className={`${
              experienceState
                ? " border-2 border-firstmisc rounded-sm"
                : " border-transparent"
            } py-4 cursor-pointer`}
          >
            Experiencia
          </li>
        </ul>
      </div>
      {educationState && <Education />}
      {skillState && <Skills />}
      {experienceState && <Experiences />}
    </section>
  );
};
