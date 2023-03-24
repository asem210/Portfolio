import React from "react";
import styles from "../styles";
import { NavBar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Resume } from "./components/resume/resume";
import { Contact } from "./components/contact/contact";

const App = () => {
  return (
    <div className=" w-full overflow-hidden   text-white h-full flex flex-col">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-thirdmisc top-0  h-fit sticky`}
      >
        <div className={`${styles.boxWidth} sticky`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-fourthmisc ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-fourthmisc ${styles.paddingX} ${styles.flexStart} pl-14 pr-14`}
      >
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>

      <div
        className={`bg-fourthmisc ${styles.paddingX} ${styles.flexStart} pl-14 pr-14 pt-14 h-fit`}
      >
        <div className={`${styles.boxWidth}`}>
          <Resume />
        </div>
      </div>

      <div
        className={`bg-fourthmisc ${styles.paddingX} ${styles.flexStart} pl-14 pr-14  pb-20 h-fit`}
      >
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
