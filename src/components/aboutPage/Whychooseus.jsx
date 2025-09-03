import { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { useDark } from "../../context/theme/DarkContext";
import EnrollButton from "../Animation/ButtonAnimations/EnrollButton";
import { IoCallOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { PiStudentLight } from "react-icons/pi";

const Whychooseus = () => {
  const { dark } = useDark();
  return (
    <div className="w-full h-fit relative px-10 py-10 ">
      <div className="w-full h-full flex gap-2 items-center justify-center flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] lg:h-[60vh] min-h-[60vh] flex items-center justify-center flex-col gap-2">
          <div className="w-full h-full rounded-md flex gap-2 items-center justify-center flex-col lg:flex-row">
            <div className="border-amber-500 dark:border-black border-[1px] bg-transparent dark:bg-zinc-0 lg:w-1/2 w-full h-full rounded-md p-3">
              <div className="w-full h-full relative flex flex-col gap-2">
                <span className="rounded-full p-2 border-[1px] dark:border-black border-white w-fit">
                  {" "}
                  <HiOutlineRocketLaunch />
                </span>
                <h2 className="font-light text-lg capitalize">Career oriented courses</h2>
                <p
                  style={{
                    color: dark  === false ? "#ccc" : "#000",
                    letterSpacing: "1px",
                    fontSize: "10px",
                  }}
                >
                  At Regentech, we offer 45+ expertly designed courses focused
                  on real-world skills and industry demands. Each course is
                  structured to enhance practical knowledge and boost student
                  readiness. Whether technical or creative, our programs aim to
                  shape confident, job-ready professionals.
                </p>
              </div>
            </div>
            <div className="border-amber-500 dark:border-black border-[1px] dark:bg-transparent bg-zinc-0 lg:w-1/2 w-full h-full rounded-md p-3">
              <div className="w-full h-full relative flex flex-col gap-2">
                <span className="rounded-full p-2 border-[1px] dark:border-black border-white w-fit">
                  {" "}
                  <BsJournalBookmark />
                </span>
                <h2 className="font-light text-lg capitalize">learning from the best</h2>
                <p
                  style={{
                    color: dark === false ? "#ccc" : "#000",
                    letterSpacing: "1px",
                    fontSize: "10px",
                  }}
                >
                  At Regentech, our faculty comprises experienced professionals and passionate educators. Each instructor brings real-world expertise, ensuring practical and up-to-date learning. With personalized guidance, they inspire and prepare students for real success.
                </p>
              </div>
            </div>
          </div>

          <div className="border-amber-500 dark:border-black border-[1px] dark:bg-transparent bg-zinc-0 w-full h-full rounded-md p-3">
            <div className="w-full h-full relative flex flex-col gap-2">
              <span className="rounded-full p-2 border-[1px] dark:border-black border-white w-fit">
                {" "}
                <GrUserExpert />
              </span>
              <h2 className="font-light text-lg capitalize w-fit">Both Online and Offline Facilities</h2>
              <p
                style={{
                  color: dark === false ? "#ccc" : "#000",
                  letterSpacing: "1px",
                  fontSize: "10px",
                }}
              >
                Regentech offers flexible learning with both online and offline classroom options. Students can access quality education from anywhere or attend in-person sessions for hands-on support. This hybrid approach ensures convenience without compromising learning excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[25%] w-full lg:min-h-[62vh] h-fit relative dark:border-black border-amber-500 border-[1px] dark:bg-transparent bg-zinc-0  rounded-md p-3">
          <div className="w-full h-full relative flex flex-col gap-2 lg:items-center items-start">
            <span className="rounded-full p-2 border-[1px] dark:border-black border-white w-fit">
              {" "}
              <PiStudentLight />
            </span>
            <h2 className="font-light text-lg capitalize">We encourage our students.</h2>
            <p
              style={{
                color: dark === false ? "#ccc" : "#000",
                letterSpacing: "1px",
                fontSize: "10px",
              }}
            >
              We encourage our students to go global by equipping them with in-demand skills, hands-on experience, and the confidence to compete internationally. Through real-world projects, global exposure, and industry mentorship, we prepare future-ready professionals who lead, innovate, and make an impact worldwide.
            </p>

            <p
              style={{
                color: dark === false ? "#ccc" : "#000",
                letterSpacing: "1px",
                fontSize: "10px",
              }}
            >
              At our core, we believe in nurturing talent that thrives beyond borders. By offering global insights, diverse collaborations, and exposure to international trends, we empower students to think big, act bold, and transform their ambitions into worldwide opportunities and success.
            </p>

            <EnrollButton title="Contact us" icon={<IoCallOutline />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
