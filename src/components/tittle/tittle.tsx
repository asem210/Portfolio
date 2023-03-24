import React from "react";

const Title: React.FC<{
  title: string;
  des: string;
}> = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-poppins mb-14">
      <h3 className="text-[16px] uppercase font-light text-firstmisc tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-white font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
