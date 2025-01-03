import React from "react";

const ResumeCard: React.FC<{
  title: string;
  subTitle: string;
  result: string;
  des: string;
  linkState: boolean;
  link: string;
}> = ({ title, subTitle, result, des, linkState, link }) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-10 h-[6px] bg-opacity-20 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lg:gap-10 shadow-shadowOne">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
        {linkState && (
          <a
            href={link}
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

export const ExperienceCard: React.FC<{
  title: string;
  subTitle: string;
  result: string;
  des: string;
  linkState: boolean;
  link: string;
  milestones: { title: string; description: string }[];
  technologies: string[];
}> = ({
  title,
  subTitle,
  result,
  des,
  linkState,
  link,
  milestones,
  technologies,
}) => {
  return (
    <div className="w-full h-auto group flex flex-col gap-6">
      <div className="w-10 h-[6px] bg-opacity-20 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-6 lg:px-12 flex flex-col justify-center gap-8 lg:gap-12 shadow-shadowOne">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-lg mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-base font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-lg md:text-xl font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
        {milestones.length > 0 && (
          <div className="mt-4">
            <h4 className="text-2xl font-semibold text-gray-300">Hitos:</h4>
            <ul className="list-inside list-disc pl-5 text-lg text-gray-400">
              {milestones.map((milestone, index) => (
                <li key={index}>
                  <strong>{milestone.title}:</strong> {milestone.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        {technologies.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-gray-300">
              Tecnologías:
            </h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm font-medium text-white bg-designColor px-4 py-2 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {linkState && (
          <a
            href={link}
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-lg"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};
export default ResumeCard;
