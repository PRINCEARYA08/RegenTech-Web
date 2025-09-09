import { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { useDark } from "../../context/theme/DarkContext";
import EnrollButton from "../Animation/ButtonAnimations/EnrollButton";
import { IoCallOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { PiStudentLight } from "react-icons/pi";
import serves from "../../../public/images/service/serves.png";
import serves1 from "../../../public/images/service/serves1.png";
import serves2 from "../../../public/images/service/serves2.png";
import serves3 from "../../../public/images/service/serves3.png";

const Whychooseus = () => {
  return (
  <div className="w-full flex flex-col bg-white min-h-screen py-8">
      {/* Feature 1: Industry-Ready Courses */}
  <section className="w-full min-h-[250px] flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10 gap-10">
        <div className="flex-1 flex flex-col justify-center gap-4 bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-6 border border-[#e0e7ff]">
          <h2 className="text-4xl font-bold text-[#3b3663] mb-2">Industry-Ready Courses</h2>
          <p className="text-base text-[#3b3663] mb-4">
            Focused On Full Stack Development, DSA, UI/UX, And Freelancing. Built For Real-World Success.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-4 flex items-center justify-center border border-[#e0e7ff]">
            <img
              src={serves}
              alt="Industry-Ready Courses"
              className="w-[320px] h-[180px] object-contain rounded-lg bg-white"
            />
          </div>
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 2: Mentorship & Career Guidance */}
  <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10 gap-10">
        <div className="flex-1 flex items-center justify-center">
  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-4 flex items-center justify-center border border-[#e0e7ff]">
            <img
              src={serves1}
              alt="Mentorship"
              className="w-[320px] h-[180px] object-contain rounded-lg bg-white"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-6 border border-[#e0e7ff]">
          <h2 className="text-4xl font-bold text-[#3b3663] mb-2">Mentorship & Career Guidance</h2>
          <p className="text-base text-[#3b3663] mb-4">
            Learn From Industry Experts And Get Support With Interviews, Portfolios, And Job Readiness.
          </p>
        </div>
      </section>
      <hr className="border-zinc-700" />
      {/* Feature 3: Connect & Collaborate */}
  <section className="w-full min-h-[250px] flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10 gap-10">
        <div className="flex-1 flex flex-col justify-center gap-4 bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-6 border border-[#e0e7ff]">
          <h2 className="text-4xl font-bold text-[#3b3663] mb-2">Connect & Collaborate</h2>
          <p className="text-base text-[#3b3663] mb-4">
            Join A Community Of Learners, Collaborate On Projects, And Build Lasting Professional Relationships.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-4 flex items-center justify-center border border-[#e0e7ff]">
            <img
              src={serves2}
              alt="Industry-Ready Courses"
              className="w-[320px] h-[180px] object-contain rounded-lg bg-white"
            />
          </div>
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 4: Global Opportunities */}
      <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10 gap-10">
        <div className="flex-1 flex items-center justify-center">
  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-4 flex items-center justify-center border border-[#e0e7ff]">
            <img
              src={serves3}
              alt="Global Opportunities"
              className="w-[320px] h-[180px] object-contain rounded-lg bg-white"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0f7fa] rounded-3xl shadow-xl p-6 border border-[#e0e7ff]">
          <h2 className="text-4xl font-bold text-[#3b3663] mb-2">Global Opportunities</h2>
          <p className="text-base text-[#3b3663] mb-4">
            Prepare For International Careers With Real-World Projects, Global Exposure, And Industry Mentorship.
          </p>
          {/* Contact Us Button */}
          <a href="tel:9243611149">
            <button className="flex items-center justify-center gap-2 w-40 h-12 bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-white text-base font-medium rounded-full hover:opacity-90 transition duration-300 shadow-md">
              Contact Us
              <IoCallOutline className="text-lg" />
            </button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Whychooseus;