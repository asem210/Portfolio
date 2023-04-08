import React from "react";

export const Experiences: React.FC<{}> = () => {
  return (
    <div className="flex flex-row rounded-lg bg-gradient-to-t from-[#314053] to-thirdmisc group mt-14 h-fit justify-center items-center py-5 sm:px-10 px-2">
      <div className="w-full md:text-[36px] sm:text-[20px] text-[12px] flex flex-col  font-poppins md:text-justify text-left px-2">
        Actualmente no cuento con experiencia profesional, pero puedes ser el
        primero en darme la oportunidad de demostrar mis capacidades.
      </div>
      <div className="w-full flex items-center justify-center ">
        <div>
          <img
            className="sm:w-[300px] sm:h-[300px] w-[200px] h-[250px] md:h-[500px] md:w-[500px]"
            src="https://drive.google.com/uc?export=view&id=1qQSqPyvF-JDS5L-ZVFeMBHtDyPy8JXNe"
            alt="src"
          />
        </div>
      </div>
    </div>
  );
};
