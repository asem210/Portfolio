import React from "react";
import styles from "../../../styles";
import { HeroLeft } from "./heroleft";
import { Heroright } from "./heroright";

export const Hero = () => {
  return (
    <div className=" flex m-14 border-b-4 border-firstmisc pb-20 ">
      <div className="sm:w-[80%] w-full  ">
        <HeroLeft />
      </div>
      <div className="sm:w-[20%] w-[0px]"></div>
    </div>
  );
};
