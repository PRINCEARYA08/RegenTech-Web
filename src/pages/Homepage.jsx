import { Suspense, useState } from "react";
import {
  ourPopularCoursesCardsDetails,
  welcomeCardsDetails,
} from "../utils/HomepageData.js";

import { useDark } from "../context/theme/DarkContext.jsx";
import Home from "../components/homeComponents/Home.jsx";
import ComponentLoader from "../components/ComponentLoader.jsx";
import Marquees from "../components/Marquees.jsx";
import PlacedStudent from "../components/homeComponents/PlacedStudent.jsx";
import TeamMember from "../components/homeComponents/teamMember.jsx";

import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import BannerCard from "../components/Animation/CardAnimations/BannerCard.jsx";
import TextPressure from "../components/Animation/TextAnimations/TextPressure.jsx";
import BlurText from "../components/Animation/TextAnimations/BlurText.jsx";
import CountUp from "../components/Animation/TextAnimations/CountUp.jsx";
import EnrollButton from "../components/Animation/ButtonAnimations/EnrollButton.jsx";
import LeaderShip from "./LeaderShip.jsx";

import auto from "../../public/images/courses/auto.webp";

const Homepage = () => {
  const { dark } = useDark();
  const [welcomeCardsDetail, setWelcomeCardsDetail] =
    useState(welcomeCardsDetails);
  const [ourPopularCoursesCardsDetail, setOurPopularCoursesCardsDetail] =
    useState(ourPopularCoursesCardsDetails);

  return (
    <Suspense fallback={<ComponentLoader />}>
      {/*******************************************************************
      Start 
    ********************************************************************/}
{/* ------- Section Wrapper ------- */}
<div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 my-16">

  {/* Add some spacing above */}
  <div className="h-12"></div> {/* This creates vertical space, you can adjust h-12 to h-20 etc. */}

  {/* ------- Banner / Content ------- */}
  <div className="flex flex-col md:flex-row bg-blue-600 rounded-2xl shadow-lg px-6 sm:px-10 md:px-14 lg:px-16 py-10 items-center">
    {/* ------- Left Section ------- */}
    <div className="flex-1 text-center md:text-left">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
        RegenTech Institute – Your <br /> Pathway to Placement.
      </h1>

      {/* Description */}
      <p className="text-white/90 mt-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
        Empowering you with cutting-edge learning in AI, Web Development,
        Robotics, and more—all in one place.
      </p>

      {/* Avatars + Button */}
      <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src="public/images/adiImg/k1.png"
            alt="user1"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="public/images/adiImg/k2.png"
            alt="user2"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="public/images/adiImg/k4.png"
            alt="user3"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>

        {/* Button */}
        <button className="bg-white text-sm sm:text-base text-black px-6 sm:px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-all">
          Know more →
        </button>
      </div>
    </div>

    {/* ------- Right Section (Image) ------- */}
    <div className="md:w-1/2 lg:w-[360px] relative mt-10 md:mt-0">
      <img
        src="public/images/banner/d1.png"
        alt="Banner"
        className="w-full max-w-sm mx-auto drop-shadow-lg"
      />
    </div>
  </div>

</div>


{/* Banner */}
      <div className="w-full h-full relative flex flex-col dark:bg-black/85 bg-white/85">
        {/****************************************************************
         *  Unlock the Future *
         *****************************************************************/}

        <Home />

        {/****************************************************************
         *  Welcome to Regentech *
         *****************************************************************/}

        <motion.div
          className={`w-full z-[100] relativ flex flex-col justify-center gap-4 px-10 py-10 ${
            dark === false ? "bg-black/85 text-white/85 " : "bg-white/90 text-black"
          }`}
        >
          <TextPressure
            text="Regentech"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor={dark === false ? "#ccc" : "#000"}
            strokeColor="#ff0000"
            minFontSize={20}
          />

          {/* cards */}

         <div className="w-full relative my-16">
  <div className="flex flex-row gap-10 overflow-x-auto px-8 py-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
    {welcomeCardsDetail.map((cardData, cardIndex) => (
      <div
        key={cardIndex}
        className="min-w-[320px] md:min-w-[380px] flex flex-col justify-between p-6 bg-gradient-to-b from-gray-900/40 to-gray-800/20 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
          {cardData.title}
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8">
          {cardData.des}
        </p>

        {/* Button */}
        {cardData.title === "The Experts" && (
          <Link to="/regentech/ourteam">
            <button className="self-start px-6 py-2 rounded-full border border-gray-500 text-gray-200 font-medium hover:bg-white hover:text-black transition-colors duration-300">
              Meet Experts ↘
            </button>
          </Link>
        )}
        {cardData.title === "Live Projects" && (
          <Link to="/regentech/LiveProjects">
          <button className="self-start px-6 py-2 rounded-full border border-gray-500 text-gray-200 font-medium hover:bg-white hover:text-black transition-colors duration-300">
            View Projects ↘
          </button>
          </Link>
        )}
        {cardData.title === "Awards & Achivements" && (
          <Link to="/regentech/awards">
            <button className="self-start px-6 py-2 rounded-full border border-gray-500 text-gray-200 font-medium hover:bg-white hover:text-black transition-colors duration-300">
              See Awards ↘
            </button>
          </Link>
        )}
        {cardData.title === "Community" && (
          <Link to="/regentech/community">
          <button className="self-start px-6 py-2 rounded-full border border-gray-500 text-gray-200 font-medium hover:bg-white hover:text-black transition-colors duration-300">
            Join Community ↘
          </button>
          </Link>
        )}
      </div>
    ))}
  </div>
</div>



          {/* partner marquees */}
          <div className="relative w-full ">
            <Marquees />
          </div>
        </motion.div>

        {/*****************************************************************
         *  Our Popular Courses *
         *****************************************************************/}
        <div
          className={`${
            dark === false ? "bg-black/90 text-white/85 " : "bg-white/95 text-black"
          } w-full min-h-fit relative flex flex-col justify-center gap-4 px-10 py-10`}
        >
          {/* heading */}

          <div className="text-center w-full flex justify-center flex-col items-center gap-2 my-6">
            <BlurText
              text="Our Popular Courses"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
          </div>

          {/* courses card */}
          <div className="w-full h-fit py-3 flex flex-wrap justify-center items-center gap-3">
            {ourPopularCoursesCardsDetail.map((cardDetails, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md shadow shadow-black/65 dark:shadow w-full min-h-[65vh] sm:max-w-[45vw] md:max-w-[50vw] lg:max-w-[26vw] flex flex-col items-center justify- text-center p-2"
              >
                <div className="w-full absolute top-0 left-0 overflow-hidden h-full ">
                  <img
                    src={`${cardDetails.img}`}
                    alt={cardDetails.courseName + "img"}
                    className="w-full h-1/2 object-cover"
                  />
                  <div className="absolute top-0 left-0 h-full flex  w-full ">
                    <div
                      style={{
                        background: dark === false
                          ? "linear-gradient(to top,#000, #00000010,#00000020, #00000020)"
                          : "",
                      }}
                      className="w-full h-full justify-end flex flex-col items-start py-4 px-2.5 text-start"
                    >
                      <div className="flex items-center justify-center py-2 gap-3">
                        <img
                          src={`${cardDetails.mentorImg}`}
                          alt={cardDetails.courseName + "mentorImage"}
                          className="w-[30px] h-[30px] rounded-full"
                        />
                        <h4 className="font-medium text-shadow text-[14px] md:text-[16px] lg:text-[1vw]">
                          {cardDetails.mentor}
                        </h4>
                      </div>

                      <h1 className="text-[16px] pb-2 md:text-[19px] w-[90%] md:w-[40%] sm:w-[55%] lg:w-[50%] lg:text-[1.1vw] whitespace-nowrap font-semibold tracking-tigh">
                        {cardDetails.courseName}
                      </h1>

                      <p
                        style={{ color: dark === false ? "#ccc" : "#000" }}
                        className="font-normal tracking-tigh lg:w-[100%] border-b-[0.5px] dark:border-black/20 border-white/20 pb-2"
                      >
                        {cardDetails.paraDetails}
                      </p>

                      <div className="flex items-center justify-between pt-2 w-full ">
                        <span className="tracking-wide text-xs">
                          {cardDetails.enrollStudent} + Student{" "}
                        </span>
                        <span className="tracking-wide text-xs">
                          {cardDetails.courseRating} Ratings{" "}
                        </span>
                        {/* <span className="font-bold tracking-wide text-sm">
                          {" "}
                          ₹ {cardDetails.coursePrice}{" "}
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* view all courses button */}
          <Link
            to={"/regentech/courses"}
            style={
              {
                // backgroundColor: "#074473",
              }
            }
            className="flex mx-auto text-xs dark:border-black  border-[1px]  items-center justify-center gap-2 px-4 py-1.5 mt-1 rounded-full"
          >
            <ImBooks />
            View All Courses
          </Link>
        </div>

        {/*****************************************************************
         *  Leaders *
         *****************************************************************/}

        <div
          className={`${
            dark === true ? "bg-black/90 text-white/85 " : "bg-white/90 text-black"
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

        {/******************************************************************
         * The Best Tutors in Town *
         ******************************************************************/}

        <div
          className={`${
            dark === true ? "bg-black/90 text-white/85 " : "bg-white/90 text-black"
          } w-full min-h-[75vh] relative flex flex-col justify-center px-10 gap-14 py-10 z-[80]`}
        >
          {/* heading */}

          <div className="text-center w-full flex justify-center flex-col items-center gap-2">
            <BlurText
              text="The Best Tutors in Town"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
          </div>

          {/* team members */}
          <TeamMember />
        </div>

        {/*****************************************************************
         * counter  *
         *****************************************************************/}

        <div className="bg-black/85 dark:bg-white/85 dark:text-black/85 text-white/85 w-full min-h-[100vh] flex flex-col items-center justify-center gap-10 py-10 px-10">
          <div className="text-center w-full flex justify-center flex-col items-center gap-2 my-2">
            <BlurText
              text="Our Learning and Careers Diary"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
          </div>
          <div className="w-full flex items-center min-h-[60vh] justify-center">
            <div className="my-6 grid gap-4 grid-cols-1 md:grid-cols-2 ">
              <div className="flex flex-col gap-4">
                {[
                  { det: "Engineers and Professionals Trained" },
                  { det: "Training Centres - Asia's Biggest Network" },
                ].map((ele, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 lg:max-w-[25vw] min-w-[25vw]  h-[24vh] text-center px-5 items-center justify-center border-amber-400 border-[1.5px] dark:border-blue-400 text-shadow-sm py-3 ${
                      index === 0 ? "rounded-t-4xl" : "rounded-b-4xl"
                    }`}
                  >
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-6xl font-medium"
                    />

                    <p
                      style={{
                        color: dark === false ? "#fff" : "#000",
                        fontSize: "1rem",
                      }}
                    >
                      {ele.det}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { det: "Industry-Ready Courses" },
                  { det: "Worldwide Presence" },
                ].map((ele, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 lg:max-w-[25vw] min-w-[25vw]  h-[24vh] text-center px-5 items-center justify-center border-amber-400 border-[1.5px] dark:border-blue-400 text-shadow-sm py-3 ${
                      index === 0 ? "rounded-t-4xl" : "rounded-b-4xl"
                    }`}
                  >
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-6xl font-medium"
                    />

                    <p
                      style={{
                        color: dark  === false ? "#fff" : "#000",
                        fontSize: "1rem",
                      }}
                    >
                      {ele.det}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*****************************************************************
         * Our Proudly Placed Students *
         *****************************************************************/}

        <div
          className={`${
            dark === true ? "bg-black/85 text-white/85 " : "bg-white/95 text-black"
          } w-full min-h-[75vh] relative flex gap-10 py-10 flex-col justify-center px-10  z-[100]`}
        >
          {/* heading */}
          <div className="text-center w-full flex justify-center flex-col items-center gap-2">
            <BlurText
              text="The Best Tutors in Town"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
          </div>

          {/* place student card */}
          <PlacedStudent />
        </div>

        {/********************************************************************
         * Explore Top Featured Courses *
         *******************************************************************/}

        <div
          className={`w-full min-h-[75vh] relative flex flex-col justify-center gap-15 py-15 px-5 ${
            dark === true ? "bg-black/90 text-white/85 " : "bg-white/90 text-black"
          }`}
        >
          <div className="text-center w-full flex justify-center flex-col items-center gap-2">
            <BlurText
              text="Explore Top Featured Courses"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
          </div>
          <div className="w-full flex items-center gap-6 justify-center md:flex-row flex-col">
            <div className="w-full md:w-1/2 h-full flex items-center justify-center">
              <img
                src={auto}
                alt="ExploreTopFeaturedCourses"
                className="md:w-[80%] w-[100%] rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2 h-full items-start justify-center flex-col">
              <div className="flex flex-col justify-center  gap-5">
                <h1
                  className="
          text-[16px] md:text-[25px]  w-[80%]  lg:text-[25px] font-bold tracking-tigh"
                >
                  Empower Your Career with In-Demand Tech Skills
                </h1>
                <p
                  style={{ fontSize: "13px", color: dark === false ? "#ccc" : "#000" }}
                  className="font-normal tracking-normal w-[95%]"
                >
                  Kickstart your journey into the digital world with our
                  industry-ready programs in Full Stack Development, Web Design,
                  and Emerging Technologies. Learn by building real-world
                  projects, guided by experienced mentors, and get equipped with
                  the tools and confidence needed to land top job roles in
                  tech-driven industries."
                </p>

                <div className="w-fit flex items-center justify-center min-h-[10vh]">
                  <a href="tel:9243611149">
                    <EnrollButton
                      title="Call Us"
                      icon={<IoCallOutline className="-rotate-12" />}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*******************************************************************
         *
         ********************************************************************/}
      </div>

      {/*******************************************************************
      End
    ********************************************************************/}
    </Suspense>
  );
};

export default Homepage;
