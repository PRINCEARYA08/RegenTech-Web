import { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { useDark } from "../../context/theme/DarkContext";
import EnrollButton from "../Animation/ButtonAnimations/EnrollButton";
import { IoCallOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { PiStudentLight } from "react-icons/pi";
import logof from "../../../public/images/logo/logof.png";
import serves from "../../../public/images/service/serves.png";

const Whychooseus = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Feature 1: Industry-Ready Courses */}
      <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-bold text-white mb-2">Industry-Ready Courses</h2>
          <p className="text-base text-white mb-4">
            Focused On Full Stack Development, DSA, UI/UX, And Freelancing. Built For Real-World Success.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={serves}
            alt="Industry-Ready Courses"
            className="w-[400px] h-[250px] object-contain rounded-lg"
          />
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 2: Mentorship & Career Guidance */}
      <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/service/Industry-Ready Courses.png"
            alt="Mentorship"
            className="w-[400px] h-[250px] object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-bold text-white mb-2">Mentorship & Career Guidance</h2>
          <p className="text-base text-white mb-4">
            Learn From Industry Experts And Get Support With Interviews, Portfolios, And Job Readiness.
          </p>
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 3: Connect & Collaborate */}
      <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/gellery/photo1.jpg"
            alt="Connect & Collaborate"
            className="w-[400px] h-[250px] object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-bold text-white mb-2">Connect & Collaborate</h2>
          <p className="text-base text-white mb-4">
            Join A Community Of Learners, Collaborate On Projects, And Build Lasting Professional Relationships.
          </p>
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 4: Global Opportunities */}
      <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/gellery/photo2.jpg"
            alt="Global Opportunities"
            className="w-[400px] h-[250px] object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-bold text-white mb-2">Global Opportunities</h2>
          <p className="text-base text-white mb-4">
            Prepare For International Careers With Real-World Projects, Global Exposure, And Industry Mentorship.
          </p>
          <EnrollButton title="Contact us" icon={<IoCallOutline />} />
        </div>
      </section>
    </div>
  );
};

export default Whychooseus;