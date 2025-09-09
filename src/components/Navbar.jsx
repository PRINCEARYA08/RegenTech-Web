import React, { useState } from "react";
import { useDark } from "../context/theme/DarkContext";
import { Link, NavLink } from "react-router-dom";

import logoLightMood from "../../public/images/logo/logoLeafBlue.png";
import logoDarkMood from "../../public/images/logo/logoLeaf.png";

import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { RiGalleryFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { tr } from "framer-motion/client";

const Navbar = () => {
  const { dark, themeHandler } = useDark();

  const { scrollY } = useScroll();
  const [menu, setMenu] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previousValue = scrollY.getPrevious();
    if (latestValue > previousValue && latestValue > 20) setNavHidden(true);
    else setNavHidden(false);
  });

  const links = [
    {
      icon: <FaHome />,
      url: "/regentech/",
      name: "Home",
    },
    {
      icon: <FaInfoCircle />,
      url: "/regentech/about",
      name: "About",
    },
    {
      icon: <ImBooks />,
      url: "/regentech/courses",
      name: "Courses",
    },
    {
      icon: <RiGalleryFill />,
      url: "/regentech/gallery",
      name: "Gallery",
    },
    {
      icon: <IoIosContact size={18} />,
      url: "/regentech/contact",
      name: "Contact",
    },
    {
      icon: <RiTeamFill size={16} />,
      url: "/regentech/ourteam",
      name: "Our-Team",
    },
  ];
  return (
    <motion.div
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      animate={navHidden ? "hidden" : "visible"}
  className="w-full fixed top-0 left-0 z-[90] text-black"
    >
      {/* links and logo */}
  <div className="transition-all duration-300 ease-in bg-white flex items-center justify-between px-6 md:px-20 relative shadow-sm shadow-black/10 py-3">
        {/* logo */}
        <Link
          to={"/regentech/"}
          className="h-[50px]  flex items-center justify-center  md:w-[50px] overflow-hidden"
        >
          <img
            src={dark === true ? logoDarkMood : logoLightMood}
            alt="regentech_logo"
            className="max-w-full h-full object-contain"
          />
        </Link>

        {/* desktop links page */}
  <div className="hidden md:flex w-fit h-full items-center justify-center gap-6 text-black/85 transition-all duration-300 ease-in">
          <div className="w-fit py-2 px-2">
            <ul className="w-full flex items-center lg:gap-9 justify-center">
              {links.map((linksItems, index) => (
                <NavLink
                  key={index}
                  to={`${linksItems.url.toLocaleLowerCase()}`}
                  className={`LinkAnimation ${
                    linksItems.name === "LinkedIn" && "lg:block hidden"
                  } capitalize font-medium cursor-pointer text-black/85 transition-all duration-300 ease-in text-xs lg:text-[1.1vw]`}
                >
                  {({ isActive }) => (
                    <span
                      className={`${
                        isActive ? "text-amber-200 dark:text-blue-800" : ""
                      } flex items-center justify-center gap-1`}
                    >
                      {linksItems.icon}
                      {linksItems.name}
                    </span>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>

        
        {/* Theme Toggle Btn */}
        <div
          onClick={() => themeHandler()}
          className="hidden lg:flex items-center justify-center gap-4 text-amber-200 border-[2px] border-black/85 rounded-full p-1.5  shadow-inner overflow-hidden transition-all duration-300 ease-in bg-white/80"
        >
          {dark === false ? (
            <motion.span
              animate={{
                x: [100, 0],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transition-all duration-300 ease-in"
            >
              <IoMdMoon />
            </motion.span>
          ) : (
            <motion.span
              animate={{
                x: [100, 0],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transition-all duration-300 ease-in"
            >
              <IoSunny />
            </motion.span>
          )}
        </div>

        {/* moblie button => email, menu */}
  <div  className="flex lg:hidden items-center justify-center gap-4 text-black/85 transition-all duration-300 ease-in">
          <button onClick={() => setMenu(!menu)} className="text-md flex items-center justify-center">
            {menu ? <IoMdClose size={25}/> : <MdMenu size={25} />}
          </button>
        </div>


       

      </div>
       {/* Mobile links page */}
        {menu && (
          <div className="md:hidden h-screen float-end flex-col justify-start items-start px-8 flex w-[90%] bg-white text-black/85">
             <div className="w-fit h-fit py-2 px-2">
            <ul className="w-full flex items-start gap-6 py-6 flex-col justify-center">
              {links.map((linksItems, index) => (
                <NavLink
                onClick={() => setMenu(!menu)}
                  key={index}
                  to={`${linksItems.url.toLocaleLowerCase()}`}
                  className={`LinkAnimation ${
                    linksItems.name === "LinkedIn" && "lg:block hidden"
                  } capitalize font-medium cursor-pointer text-black/85 transition-all duration-300 ease-in text-xs lg:text-[1.1vw]`}
                >
                  {({ isActive }) => (
                    <span
                      className={`${
                        isActive ? "text-amber-200 dark:text-blue-800" : ""
                      } flex items-center justify-center gap-3`}
                    >
                      {linksItems.icon}
                      {linksItems.name}
                    </span>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
            {/* Theme Toggle Btn */}
        <div
          onClick={() => themeHandler()}
          className="flex md:hidden h-fit w-fit items-center justify-center gap-4 text-amber-200 border-[2px] border-black/85 rounded-full p-1.5 shadow-inner overflow-hidden transition-all duration-300 ease-in bg-white/80"
        >
          {dark === false ? (
            <motion.span
              animate={{
                x: [100, 0],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transition-all duration-300 ease-in"
            >
              <IoMdMoon />
            </motion.span>
          ) : (
            <motion.span
              animate={{
                x: [100, 0],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transition-all duration-300 ease-in"
            >
              <IoSunny />
            </motion.span>
          )}
        </div>
          </div>
          )
          }
    </motion.div>
  );
};

export default Navbar;
