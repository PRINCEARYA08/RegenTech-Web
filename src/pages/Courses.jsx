import React, { useEffect, useState, Suspense, } from "react";
import { Link } from "react-router-dom";

import Headingpara from "../components/Headingpara";
import {
  allCoursesDetails,
  courseCategoryBtns,
  courseRegentechTrainingSolutionsDetails,
  courseRegentechTrainingSolutionsHeadingBtn,
} from "../utils/coursesCardDetails.js";

import { BsArrowReturnRight } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";

import ComponentLoader from "../components/ComponentLoader.jsx";

import { useDark } from "../context/theme/DarkContext.jsx";
import Orb from "../components/Animation/BackgroundAnimations/Orb.jsx";
import EnrollButton from "../components/Animation/ButtonAnimations/EnrollButton.jsx";

import auto from "../../public/images/courses/auto.webp";
import logof from "../../public/images/logo/logof.png";
import { IoCallOutline } from "react-icons/io5";
import BlurText from "../components/Animation/TextAnimations/BlurText.jsx";

const Courses = () => {
  const { dark } = useDark();
  const [courseCardDetails, setCourseCardDetails] = useState(allCoursesDetails);
  const [courseCardBtn, setCourseCardBtn] = useState(courseCategoryBtns);

  const [coursesRtsd, setCoursesRtsd] = useState(
    courseRegentechTrainingSolutionsDetails
  );

  const [coursesRtshb, setCoursesRtshb] = useState(
    courseRegentechTrainingSolutionsHeadingBtn
  );

  const btns = (selectedBtn) => {
    const filterCoursesBySelectedBtn =
      selectedBtn === "all"
        ? allCoursesDetails
        : allCoursesDetails.filter(
            (filterCourses) => selectedBtn === filterCourses.courseCategory
          );
    setCourseCardDetails(filterCoursesBySelectedBtn);
  };

  const regentechTrainingSolutionsHandler = (headingBtn) => {
    const newDets =
      headingBtn === "full stack development"
        ? courseRegentechTrainingSolutionsDetails.filter(
            (detsFill) => headingBtn === detsFill.compareLine.toLowerCase()
          )
        : courseRegentechTrainingSolutionsDetails.filter(
            (detsFill) => detsFill.compareLine.toLowerCase() === headingBtn
          );
    setCoursesRtsd(newDets);
  };

  useEffect(() => {
    regentechTrainingSolutionsHandler("full stack development");
  }, []);

  return (
    courseCardDetails.length >= 0 && (
      <Suspense fallback={<ComponentLoader />}>
  <div className="w-full min-h-[100vh] relative bg-white text-black">
          {/*******************************************************************************
           * Banner *
           *******************************************************************************/}
          <div className="w-full min-h-[100vh] flex items-center justify-center bg-white text-black relative overflow-hidden py-10">
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Orb
                hoverIntensity={4}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <div className="absolute flex items-center w-full lg:px-20 px-3 rounded-full lg:top-[33%] top-[40%] flex-col md:gap-5 gap-2 pointer-events-auto ">
              <div className="w-fit h-full flex-col flex lg:gap-8 gap-1">
                <h1 className="lg:text-5xl text-sm tracking-widest text-center uppercase font-black font-[Boldonse] text-shadow-sm ">
                  Empower Your Future
                </h1>
                <h1 className="lg:text-5xl text-sm tracking-widest text-center uppercase font-black font-[Boldonse] text-shadow-sm ">
                  with Skills That Matter{" "}
                </h1>
              </div>
              <p
                style={{
                  color: '#0c0c0cff',
                  letterSpacing: "1px",
                  fontSize: "20px",
                  width: "100%",
                  textAlign: "center",
                }}
                className="hidden md:flex"
              >
                Explore expertly designed courses tailored to match real-world
                industry needs. Whether you're starting your journey or
                upgrading your skills, our programs help you stay ahead in
                today's fast-moving digital world.
              </p>
              <p
                style={{
                  color: '#000',
                  letterSpacing: "1px",
                  fontSize: "12px",
                  width: "100%",
                  textAlign: "center",
                }}
                className="visible md:hidden"
              >
                Explore expertly designed courses tailored to match real-world
                industry needs. Whether you're starting your journey or
                upgrading your skills, our programs help you stay ahead in
                today's fast-moving digital world.
              </p>
              <EnrollButton />
            </div>
          </div>

          {/*******************************************************************************
           * Courses *
           *******************************************************************************/}

          <div className="flex flex-col py-10.5 bg-white text-black">
            <div className="text-center w-full flex justify-center flex-col items-center gap-2">
              <BlurText
                text="Explore Top Courses"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit mb-5"
              />
            </div>

            <div className="flex hidden-scroll items-center max-w-4xl mx-auto justify-center lg:justify-start py-4 md:py-8 flex-wrap lg:flex-nowrap overflow-x-scroll gap-4  ">
              {courseCardBtn.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => btns(btn.toLowerCase())}
                  type="button"
                  className="text-xs cursor-pointer rounded-full border-[1.5px] shadow text-shadow-sm shadow-black/20 px-4 py-2 font-bold tracking-wide whitespace-nowrap"
                >
                  {btn.toUpperCase()}
                </button>
              ))}
            </div>

            <Suspense fallback={<ComponentLoader />}>
              <div className="px-6 md:px-12 lg:px-20 ">
                <div className="flex gap-3 justify-start hidden-scroll lg:justify-start snap-mandatory motion-safe:snap-x motion-safe:snap-mandatory  overflow-x-scroll relative">
                  {courseCardDetails.length <= 0 ? (
                    <div className="md:max-w-[45vw] w-full shrink-0 flex flex-col gap-4 items-center justify-center  py-6 rounded-md px-4 md:px-2">
                      <div className="p-8 h-[15vw] w-[15vw] relative overflow-hidden rounded-full shadow-sm shadow-white/20">
                        <img
                          src={logof}
                          alt="No Courses Found"
                          className="h-full w-full object-scale-down pt-6"
                        />
                        <div className="absolute top-[65%] left-0 h-1/2 w-full bg-[#074473]"></div>
                      </div>
                      <Headingpara
                        heading={"No Courses Found"}
                        para={
                          "We couldn't find any courses under this category at the moment. Please try exploring other categories or check back soon for new updates!"
                        }
                        paraColor={dark === false ? "#ccc" : "#000"}
                      />
                    </div>
                  ) : (
                    courseCardDetails.map((cardsDet, index) => (
                      <div
                        key={cardsDet.id || index}
                        className="relative w-full md:max-w-[23vw] flex items-center justify-center h-[60vh] shrink-0 overflow-hidden rounded-md"
                      >
                        <div
                          className="absolute top-0 left-0 h-full w-full z-[2] px-4 py-2 "
                          style={{
                            background:
                              "linear-gradient(to top,#000, #00000040, #00000060)",
                          }}
                        >
                          <div className="w-full h-full relative flex flex-col gap-4 py-1 justify-end">
                            <div className="flex gap-4 w-full items-center ">
                              <img
                                className="md:h-[5vw] h-[10vw] w-[10vw] md:w-[5vw] object-cover rounded-full"
                                src={`${cardsDet.mentorImage}`}
                                alt={cardsDet.mentorName}
                              />
                              <div className="flex flex-col w-full ">
                                <h3 className="font-semibold text-sm text-[#fff]">
                                  {cardsDet.mentorName}
                                </h3>
                                <h6 className="font-medium text-[11px] text-[#fff]">
                                  {cardsDet.mentorProfession}
                                </h6>
                              </div>
                            </div>
                            <div className="flex w-full items-start flex-col ">
                              <h3 className="font-semibold text-sm  text-[#fff]">
                                {cardsDet.courseName}
                              </h3>
                              <p
                                style={{
                                   color: '#fcf7f7ff',
                                  fontSize: "12px",
                                  width: "90%",
                                }}
                                className="text-black text-sm leading-relaxed text-start"
                              >
                                {cardsDet.courseDetailsLine}
                              </p>
                            </div>
                            {cardsDet.coursesLogos.length >= 0 && (
                              <div className="flex  gap-2 overflow-x-scroll hidden-scroll w-[90%]">
                                {cardsDet.coursesLogos.map((logo, index) => (
                                  <img
                                    key={index}
                                    className="md:h-[2.5vw] h-[7vw] w-[7vw] md:w-[2.5vw] object-cover rounded-full"
                                    src={logo}
                                    alt="coursesLogos"
                                  />
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-4 mt-2.5 text-black">
                              <Link
                                to={""}
                                className="w-fit px-4 py-2 rounded-full border-[1px] border-white text-[12px] flex items-center gap-2 text-white"
                              >
                                <BsArrowReturnRight /> Enroll Now
                              </Link>
                              <Link
                                to={""}
                                className="w-fit px-4 py-2 rounded-full border-[1px] border-white text-[12px] flex items-center gap-2"
                              >
                                <BsCurrencyRupee />{" "}
                                <span className="text-md tracking-wider text-white">
                                  {cardsDet.coursesPrice}
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-[60vh] md:min-w-[25.5vw] min-w-full object-cover shrink-0 rounded-lg"
                          src={`${cardsDet.courseImage}`}
                          alt={cardsDet.courseName}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Suspense>
          </div>

          {/*******************************************************************************
           * Regentech Training Solutions *
           *******************************************************************************/}
          <div className="w-full min-h-[100vh]  relative lg:px-20 px-0 flex flex-col gap-10 bg-white justify-center py-10">
            <div className="text-center w-full flex justify-center flex-col items-center gap-2">
              <BlurText
                text="Regentech Training Solutions"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
              />
            </div>

            <div className="flex flex-col w-fit">
              <div className="lg:min-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-1 sm:gap-2 md:gap-2 flex-wrap border-b-[1.5px] pb-4">
                {coursesRtshb.map((compareLine, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      regentechTrainingSolutionsHandler(
                        compareLine.toLowerCase()
                      )
                    }
                    className={`font-medium cursor-pointer text-sm LinkAnimation `}
                  >
                    {compareLine}
                  </button>
                ))}
              </div>

              {coursesRtsd.map((dets, index) => (
                <div
                  key={dets.id || index}
                  className="flex items-center flex-wrap lg:flex-row flex-col w-full pt-6 justify-center"
                >
                  <div className="lg:w-[50%] w-[90%] sm:w-[65%] md:w-[50%] flex items-center justify-center">
                    <div className="lg:w-[85%] w-[100%] h-[60vh] py-4 overflow-hidden relative">
                      <img
                        src={`${dets.img}`}
                        alt={dets.heading + "Image"}
                        className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 py-6 lg:w-[45%] w-[90%] sm:w-[75%] md:w-[60%] ">
                    <h1 className="text-[18px] md:text-[20px] lg:leading-9 leading-6  lg:text-[25px] font-bold tracking-tigh">
                      {dets.heading}
                    </h1>
                    <div className="flex flex-col items-start gap-3">
                      <p
                        style={{
                          fontSize: "13px",
                          color: '#000',
                        }}
                      >
                        {dets.paraLineOne}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: '#000',
                        }}
                      >
                        {dets.paraLineTwo}
                      </p>
                    </div>
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
              ))}
            </div>
          </div>

          {/*******************************************************************************
           * Explore Top Featured Courses *
           *******************************************************************************/}

          <div className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-15 relative  px-5 bg-white">
            <div className="text-center w-full flex justify-center flex-col items-center gap-2">
              <BlurText
                text="Explore Top Featured Courses"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
              />
            </div>
            <div className="w-full flex items-center justify-center md:flex-row flex-col gap-8">
              <div className="w-full md:w-1/2 p-2 h-full flex items-center justify-end">
                <img
                  src={auto}
                  alt="ExploreTopFeaturedCourses"
                  className="md:w-[80%] w-[100%] object-cover lg:h-[45vh] h-[50vh] rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 h-full items-start justify-center flex-col">
                <div className="flex flex-col justify-center gap-5">
                  <h1
                    className="
          text-[16px] md:text-[20px]  w-[80%]  lg:text-[25px] font-bold tracking-tigh"
                  >
                    Empower Your Career with In-Demand Tech Skills
                  </h1>
                  <p
                    style={{ fontSize: "14px", color: '#000' }}
                    className="font-normal tracking-normal w-[95%]"
                  >
                    Kickstart your journey into the digital world with our
                    industry-ready programs in Full Stack Development, Web
                    Design, and Emerging Technologies. Learn by building
                    real-world projects, guided by experienced mentors, and get
                    equipped with the tools and confidence needed to land top
                    job roles in tech-driven industries."
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
        </div>
      </Suspense>
    )
  );
};

export default Courses;
