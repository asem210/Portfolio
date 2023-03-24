import React from "react";

export const Experiences: React.FC<{}> = () => {
  return (
    <div className="flex flex-row rounded-lg bg-gradient-to-t from-[#314053] to-thirdmisc group mt-14 h-fit ">
      <div className="w-full sm:text-[40px] text-[24px] flex flex-col justify-center items-center font-poppins text-justify px-10">
        Actualmente no cuento con experiencia profesional, pero puedes ser el
        primero en darme la oportunidad de demostrar mis capacidades.
      </div>
      <div className="w-full flex items-center justify-center ">
        <div>
          <img
            className="sm:w-[500px] sm:h-[500px] w-[400px] h-[300px]"
            src="https://drive.google.com/uc?export=view&id=1qQSqPyvF-JDS5L-ZVFeMBHtDyPy8JXNe"
            alt="src"
          />
        </div>
      </div>
    </div>
  );
};
