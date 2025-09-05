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
    <div className="w-full flex flex-col">
      {/* Feature 1: Industry-Ready Courses */}
      <section className="w-full min-h-[250px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
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
            className="w-[500px] h-[250px] object-contain rounded-lg"
          />
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 2: Mentorship & Career Guidance */}
      <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={serves1}
            alt="Mentorship"
            className="w-[500px] h-[250px] object-contain rounded-lg"
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
      <section className="w-full min-h-[250px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="text-4xl font-bold text-white mb-2">Connect & Collaborate</h2>
          <p className="text-base text-white mb-4">
            Join A Community Of Learners, Collaborate On Projects, And Build Lasting Professional Relationships.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={serves2}
            alt="Industry-Ready Courses"
            className="w-[500px] h-[250px] object-contain rounded-lg"
          />
        </div>
      </section>
      <hr className="border-zinc-700" />

      {/* Feature 4: Global Opportunities */}
    <section className="w-full min-h-[350px] flex flex-col md:flex-row items-center justify-center px-10 py-10 gap-10">
  <div className="flex-1 flex items-center justify-center">
    <img
      src={serves3}
      alt="Global Opportunities"
      className="w-[500px] h-[250px] object-contain rounded-lg"
    />
  </div>
  <div className="flex-1 flex flex-col justify-center gap-4">
    <h2 className="text-4xl font-bold text-white mb-2">Global Opportunities</h2>
    <p className="text-base text-white mb-4">
      Prepare For International Careers With Real-World Projects, Global Exposure, And Industry Mentorship.
    </p>
 <a href="tel:9243611149"></a>
    {/* Contact Us Button */}
    <button className="flex items-center justify-center gap-2 w-40 h-12 border border-white text-white text-base font-medium rounded-full hover:bg-white hover:text-black transition duration-300">
  Contact Us
  <IoCallOutline className="text-lg" />
</button>

  </div>
</section>

    </div>
  );
};

export default Whychooseus;