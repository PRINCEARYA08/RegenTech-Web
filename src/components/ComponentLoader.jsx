import React from "react";
import logof from '../../public/images/logo/logof.png'
const ComponentLoader = () => {
  return (
    <div className="w-full min-h-[100vh] bg-black dark:bg-white relative flex items-center justify-center">
      <div className="max-w-[45vw] flex flex-col gap-4 items-center justify-center py-6 rounded-md px-4 md:px-2">
        <div className="p-5 h-[10vw] w-[10vw] relative overflow-hidden rounded-full shadow-sm shadow-white/20">
          <img
            src={logof}
            alt="No Courses Found"
            className="h-full w-full object-scale-down"
          />
          <div className="absolute top-0 left-0 h-full z-[-2] animate-spin w-full delay-1000 duration-1000 rounded-full bg-conic from-blue-600 to-[#074473] to-80%"></div>
          <div className="absolute top-0 left-0 h-full z-[-1] animate-spin w-full delay-1000  duration-1000  p-0.5">
            <div className="h-full w-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLoader;
