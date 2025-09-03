import s5 from "../../public/images/student/s5.jpg";
import s3 from "../../public/images/student/s3.jpg";
import s1 from "../../public/images/student/s1.jpg";

import Marquees from "../components/Marquees";
import TeamMember from "../components/homeComponents/teamMember";
import Whychooseus from "../components/aboutPage/Whychooseus";
import { useDark } from "../context/theme/DarkContext";

import Particles from "../components/Animation/BackgroundAnimations/Particles";
import CircularText from "../components/Animation/TextAnimations/CircularText.jsx";
import BlurText from "../components/Animation/TextAnimations/BlurText.jsx";
import LeaderShip from "./LeaderShip.jsx";


import logof from "../../public/images/logo/logoLeaf.png"
import logoLeafBlue from "../../public/images/logo/logoLeafBlue.png"
const About = () => {
  const { dark } = useDark();

  const topPlacedStd = [
    {
      bg: "#074575",
      name: "RAHUL KUMAR",
      img: s1,
      text: "Surjeet Singh Gour oversees operations and student engagement, contributing his vocational training experience and knowledge to align institute programs with practical skills and evolving industry requirements.",
    },
    {
      bg: "#074575",
      name: "AMANULLAH ALI",
      img: s5,
      text: "Anil Kumar Balani guides Regentect with strategic vision, ensuring academic excellence, industry relevance, and a student-centered approach across all training programs and institutional initiatives.",
    },
    {
      bg: "#074575",
      name: "Chandra Bhushan Singh",
      img: s3,
      text: "Simran Chainani drives curriculum innovation and creative development, focusing on interactive course design that empowers students with real-world knowledge and hands-on learning experiences.",
    },
  ];

  return (
    <div className="w-full h-full relative flex flex-col dark:bg-black/85 bg-white/85 overflow-hidden snap-mandatory">
      {/*******************************************************************************
       * Banner *
       *******************************************************************************/}

      <div className="w-full min-h-[100vh] flex items-center justify-center bg-black dark:bg-white dark:text-black/85 text-white/85 relative overflow-hidden">
        <div
          style={{ width: "100%", height: "600px", position: "relative" }}
          className=""
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto">
          <CircularText
            text=" Learn Create Inspire Repeat"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class uppercase font-[Boldonse] text-center dark:text-black/85"
          />
          <div className="absolute">
            <img
              src={
                dark === false
                  ? logof
                  : logoLeafBlue
              }
              alt="about page logo"
              className="w-[125px]"
            />
          </div>
        </div>
      </div>

      {/*******************************************************************************
       * Why Choose us  *
       *******************************************************************************/}

      <div
        className={`w-full min-h-[100vh] relative flex flex-col py-10 items-center justify-center ${
          dark === false ? "bg-black/90 text-white/85 " : "bg-white/90 text-black/85"
        }`}
      >
        <div className="text-center w-full flex justify-center flex-col items-center gap-6 my-2">
          <BlurText
            text="Why Choose Us"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
          />
        </div>
        <Whychooseus />
      </div>

      {/*******************************************************************************
       * Partners  *
       *******************************************************************************/}
      <div
        className={`w-full min-h-[20vh] flex items-center bg-black/90 dark:bg-white/90`}
      >
        <Marquees />
      </div>

       {/*****************************************************************
         *  Leaders *
         *****************************************************************/}

        <div
          className={`${
            dark === false ? "bg-black/90 text-white/85 " : "bg-white/90 text-black"
          } w-full min-h-[75vh] relative flex flex-col justify-center px-10 gap-14 py-10`}
        >
          <div className="text-center w-full flex justify-center flex-col items-center gap-2">
            <BlurText
              text="Meet Our Directors"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
          </div>
          <LeaderShip />
        </div>
      {/*******************************************************************************
       * Meet our expert faculty  *
       *******************************************************************************/}

      <div
        className={`max-w-full min-h-[90vh] flex flex-col justify-center gap-15 py-10 px-10 text-center ${
          dark === false ? "bg-black/85 text-white/85 " : "bg-white/85 text-black"
        } `}
      >
        <div className="text-center w-full flex justify-center flex-col items-center gap-2 my-2">
          <BlurText
            text="Meet our expert faculty"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
          />
        </div>
        <TeamMember />
      </div>

      {/*******************************************************************************
       * Proven Result Section *
       *******************************************************************************/}

      <div
        className={`max-w-full mx-auto px-10 py-10 text-center ${
          dark === false ? "bg-black/85 text-white/85 " : "bg-white text-black"
        } `}
      >
        <div className="text-center w-full flex justify-center flex-col items-center gap-2 my-2">
          <BlurText
            text="Our Proven Result"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-6 lg:gap-2 mt-15 lg:px-20 ">
          {topPlacedStd.map((item, index) => (
             <div
          key={index}
          className="flex flex-col min-h-[30vh] flex-shrink-0 sm:max-w-[100%] md:max-w-[27.5vw] max-w-full items-center p-4 shadow dark:shadow-black/10 shadow-black/85 rounded-lg"
        >
          <div className={`w-full min-h-10 py-2 rounded-md flex overflow-hidden relative `}>
           <div className=" flex gap-4 items-center px-1">
             <div className="max-w-[7vw] md:max-w-[5vw] md:max-h-[5vw] max-h-[7vw] rounded-full overflow-hidden shadow dark:shadow-black/40 shadow-black/50">
               <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
             </div>
            <h2 className="text-white dark:text-black font-medium text-lg">{item.studentName}</h2>
          
          </div>
             </div>
           
          <div className="w-full flex flex-col gap-1 ">
            <p
              style={{ padding: "4px", paddingLeft: "30px" }}
              className=" text-sm leading-relaxed text-start"
            >
              {item.text}
            </p>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
