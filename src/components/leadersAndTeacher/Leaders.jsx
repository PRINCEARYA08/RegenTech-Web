import React, { useEffect, useState } from "react";
import BlurText from "../Animation/TextAnimations/BlurText.jsx";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import owner2 from "../../../public/images/owners/owner2.jpg";
import owner1 from "../../../public/images/owners/owner1.jpg";
import owner3 from "../../../public/images/owners/owner3.jpg";

import t1 from "../../../public/images/mentors/t1.jpg";
import t2 from "../../../public/images/mentors/t2.jpg";
import t3 from "../../../public/images/mentors/t3.jpg";

const details = [
  {
    id: 1,
    name: "Mr. Anil Kumar Balani",
    profileImage: owner2,
    details:
      "Anil Kumar Balani guides Regentect with strategic vision, ensuring academic excellence, industry relevance, and a student-centered approach across all training programs and institutional initiatives.Anil Kumar Balani guides Regentect with strategic vision, ensuring academic excellence, industry relevance, and a student-centered approach across all training programs and institutional initiatives.Anil Kumar Balani guides Regentect with strategic vision, ensuring academic excellence, industry relevance, and a student-centered approach across all training programs and institutional initiatives.Anil Kumar Balani guides Regentect with strategic vision, ensuring academic excellence, industry relevance, and a student-centered approach across all training programs and institutional initiatives.",
    socialLinks: [
      {
        platform: "linkedIn",
        link: "",
      },
      {
        platform: "instagram",
        link: "",
      },
    ],
    position: "Director",
  },
  {
    id: 2,
    name: "Mr. Surjeet Singh Gour",
    profileImage: owner1,

    details:
      "Surjeet Singh Gour oversees operations and student engagement, contributing his vocational training experience and knowledge to align institute programs with practical skills and evolving industry requirements.Surjeet Singh Gour oversees operations and student engagement, contributing his vocational training experience and knowledge to align institute programs with practical skills and evolving industry requirements.Surjeet Singh Gour oversees operations and student engagement, contributing his vocational training experience and knowledge to align institute programs with practical skills and evolving industry requirements.Surjeet Singh Gour oversees operations and student engagement, contributing his vocational training experience and knowledge to align institute programs with practical skills and evolving industry requirements.",
    socialLinks: [
      {
        platform: "linkedIn",
        link: "",
      },
      {
        platform: "instagram",
        link: "",
      },
    ],
    position: "Director",
  },
  {
    id: 3,
    name: "Mrs. Simran Chainani",
    profileImage: owner3,

    details:
      "Simran Chainani drives curriculum innovation and creative development, focusing on interactive course design that empowers students with real-world knowledge and hands-on learning experiences.Simran Chainani drives curriculum innovation and creative development, focusing on interactive course design that empowers students with real-world knowledge and hands-on learning experiences.Simran Chainani drives curriculum innovation and creative development, focusing on interactive course design that empowers students with real-world knowledge and hands-on learning experiences.Simran Chainani drives curriculum innovation and creative development, focusing on interactive course design that empowers students with real-world knowledge and hands-on learning experiences.",
    socialLinks: [
      {
        platform: "linkedIn",
        link: "",
      },
      {
        platform: "instagram",
        link: "",
      },
    ],
    position: "Director",
  },

  {
    id: 4,
    name: "Lakshya Sahu",
    profileImage: t2,
    details:
      "Lakshya Sahu is an experienced Digital Marketing Trainer with a strong command over performance marketing, SEO, social media strategy, and lead generation. With a passion for teaching and a deep understanding of current industry tools and trends, Lakshya has trained countless students and professionals to navigate and succeed in the dynamic digital landscape. His training approach is hands-on, project-based, and results-oriented—focused on equipping learners with real-world skills that are in demand by employers and clients alike. From mastering Meta Ads and Google campaigns to understanding SEO algorithms and content strategies, Lakshya breaks down complex topics into actionable learning. At Regentech, he leads the digital marketing curriculum, developing modules that are constantly updated with the latest industry practices. His sessions are interactive, insight-rich, and designed to empower students to build careers in freelancing, agencies, startups, or their own ventures.Driven by a mission to bridge the gap between theory and execution, Lakshya continues to mentor aspiring marketers, helping them build strong portfolios, land high-impact roles, and stay ahead in the ever-evolving digital economy.",
    socialLinks: [
      {
        platform: "linkedIn",
        link: "",
      },
      {
        platform: "instagram",
        link: "",
      },
    ],
    position: "Marketing & Management",
  },

  {
    id: 5,
    name: "Laxman Sharma",
    profileImage: t1,
    details:
      "Laxman Sharma is a seasoned 3D animation professional with over 6 years of hands-on industry experience. He has contributed his creative expertise to top studios like Studio56 and Xentrix Studios in Bangalore, where he worked on globally recognized animated shows including Marsha and the Bear, Mia and Me, Heidi, Big Nate, and Indian series such as Gattu Battu and Rudra. Beyond production, Laxman has also made a mark in education. He served as an animation instructor at GD Goenka University in Haryana, where he trained students who have since gone on to secure placements in leading animation and media companies. At Regentech, he brings a results-driven approach to teaching—focused not on just theory, but real industry workflow. “This workshop is not about theory,” he says. “It's about reality. It's about making students industry-ready — fast.” His sessions are immersive, tool-oriented, and designed to help students master software like Autodesk Maya, while understanding the core principles of animation production.",
    socialLinks: [
      {
        platform: "linkedIn",
        link: "",
      },
      {
        platform: "instagram",
        link: "",
      },
    ],
    position: "Animator",
  },
  {
    id: 8,
    name: "Sumit Janoriya",
    profileImage: t3,
    details:
      "Sumit is known for designing industry-relevant training programs that go far beyond textbooks. His courses are built around real-world scenarios, hands-on experimentation, and project-based learning—ensuring that students don't just understand the theory but can build and innovate with confidence. He has mentored students through projects ranging from autonomous robots and sensor-driven IoT applications to advanced drone programming and embedded system designs. Under his guidance, many have gone on to participate in national-level competitions and secure placements in core tech companies. Driven by a mission to bridge the gap between academic knowledge and industrial needs, Sumit continues to inspire the next generation of tech leaders through immersive, future-ready education.",
    socialLinks: [
      {
        platform: "linkedIn",
        link: "",
      },
      {
        platform: "instagram",
        link: "",
      },
    ],
    position: "Robotics",
  },
];

const Leaders = () => {
  const [allData, setAllData] = useState(details);
  useEffect(() => {}, [allData]);
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 bg-black dark:bg-white text-white dark:text-black">
      <div className="w-full h-[30vh] px-4 ">
        <div className="w-full h-full relative flex items-end justify-center py-8 border-[1px] dark:border-black border-amber-200 rounded-b-[4rem]">
          <BlurText
            text="The Skilled Force of Regentech"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-sm md:text-xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
          />
        </div>
      </div>

      <div className="w-full h-full relative flex flex-col gap-6 py-6 lg:py-6 px-4 lg:px-10">
        {allData.map((data, indexOfData) => (
          <div
            key={indexOfData}
            className={`w-full min-h-[30vh] relative flex gap-4 justify-between items-center ${
              data.id % 2
                ? "flex-col lg:flex-row"
                : "flex-col lg:flex-row-reverse"
            }`}
          >
            <div className="lg:w-[30%] w-full h-full overflow-hidden relative flex items-center justify-center">
              <img
                src={`${data.profileImage}`}
                alt={data.name + " ourTeam"}
                className="w-[325px] h-[325px] object-cover object-top rounded-lg "
              />
            </div>
            <div
              className={`border-[2px] border-blue-300 lg:w-[70%] w-full py-6 rounded-l-xl relative flex flex-col ${
                data.id % 2
                  ? "lg:items-start items-center lg:text-start text-center"
                  : "lg:items-end lg:text-end items-center text-center"
              } gap-3 px-6`}
            >
              <h1 className="font-medium text-2xl leading-5">{data.name}</h1>
              <h2 className="font-normal leading-5 text-xl tracking-wider">
                {`(${data.position})`}
              </h2>
              <div className="flex gap-2 w-fit">
                <span className="dark:hover:bg-black hover:bg-white/20 hover:text-white p-1.5 rounded-full duration-300">
                  <FaLinkedin className="text-xl" />
                </span>
                <span className="dark:hover:bg-black hover:bg-white/20 hover:text-white p-1.5 rounded-full duration-300">
                  <FaSquareInstagram className="text-xl" />
                </span>
              </div>
              <p>{data.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
