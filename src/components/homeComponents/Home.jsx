import React from "react";
import { useDark } from "../../context/theme/DarkContext";
import video from "../../../public/sectionVideo/home.mp4";

const Home = () => {
  const { dark } = useDark();
  return (
    <div className="w-full font-[Boldonse] lg:min-h-screen min-h-[100vh] z-[70] flex items-center justify-center sm:min-h-[100vh] relative text-white/85 dark:text-black/85 dark:bg-white bg-black md:pt-20 pt-10">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-[2]  mix-blend-color py-6">
        <video
          className="w-full h-full object-cover rotate-35 contrast-200"
          src={video}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="w-full h-full relative top-0 left-0 flex flex-col justify-between gap-5 lg:gap-0 px-10">
        <div className="">
          <h1 className="font-extrabold uppercase lg:text-[7vw] text-[12vw] tracking-tight">
            Learn
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: dark === false ? "#76777a" : "#262626",
              fontWeight: "700",
            }}
            className=""
          >
            Empowering learners to unlock the future with knowledge, innovation,
            and purpose. Learn. Build. Grow.
          </p>
        </div>

        <div className="relative">
          <h1 className="font-extrabold uppercase lg:text-[9em] text-[5em] dark:text-black/65 text-white/65">
            The Future
          </h1>
        </div>

        <div className="  flex justify-between w-full left-0 lg:px-10 ">
          <div className="w-[60%]">
            <p
              style={{
                fontSize: "15px",
                color: dark === false ? "#76777a" : "#262626",
                fontWeight: "700",
              }}
              className=""
            >
              Step into the future of learning — where creativity meets code,
              and knowledge knows no limits.
            </p>
          </div>
          <div className="">
            <h1 className="font-extrabold uppercase lg:text-[7vw] text-[12vw] tracking-tight">
              way
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
