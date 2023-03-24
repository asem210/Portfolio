import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

import data from "../../jsons/navbar.json";

import { navbarcontent } from "../../constants/navbar/navbar";

export const NavBar = () => {
  const [navList, setNavList] = useState<navbarcontent[]>(data);
  const [active, setActive] = useState("Home");
  const [toogle, setToggle] = useState(false);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className=" w-full sticky text-white flex justify-between p-4 items-center">
      <div className="flex flex-row font-pacifico text-white ml-10 text-[30px]">
        <h1>
          <span className="font-black flex-initial mr-2">Gustavo</span>
          <span>Pazos</span>
        </h1>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
        <AiOutlineMenu
          onClick={() => setToggle(!toogle)}
          className="scale-150 cursor-pointer"
        />
      </div>
      <nav>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
          {navList?.map((nav, index) =>
            nav.itemList.map((navitem, idx) => (
              <div onClick={() => setActive(navitem.item)}>
                <li
                  key={idx}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    idx === nav.itemList.length - 1 ? "mr-10" : "mr-10"
                  } hover:text-firstmisc duration-300`}
                >
                  <Link
                    activeClass="active"
                    to={navitem.link}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    {navitem.item}
                  </Link>
                </li>
              </div>
            ))
          )}
        </ul>

        <ContextualMenu
          toogle={toogle}
          setToogle={() => setToggle(!toogle)}
          active={active}
          setActive={(data: string) => setActive(data)}
          navList={data}
        />
      </nav>
    </div>
  );
};

const ContextualMenu: React.FC<{
  toogle: boolean;
  setToogle: (data: boolean) => void;
  active: string;
  navList: navbarcontent[];
  setActive: (data: string) => void;
}> = ({ toogle, setToogle, active, navList, setActive }) => {
  return (
    <ul
      className={
        toogle
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 sm:hidden w-"
          : "hidden"
      }
    >
      <AiOutlineClose
        onClick={() => setToogle(!toogle)}
        className="cursor-pointer"
        size={20}
      />
      {navList?.map((nav, index) =>
        nav.itemList.map((navitem, idx) => (
          <li
            key={idx}
            className={`font-poppins font-medium cursor-pointer text-[16px]   hover:text-firstmisc duration-300 ${
              idx === nav.itemList.length - 1 ? "mb-2" : "mb-4"
            }`}
            onClick={() => setActive(navitem.item)}
          >
            <Link
              activeClass="active"
              to={navitem.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
            >
              {navitem.item}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};
