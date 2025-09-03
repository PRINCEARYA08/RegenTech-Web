import React from "react";

const Headingpara = ({ heading, para, paraColor, headingColor }) => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center text-center">
      <h1
      style={headingColor && {color: headingColor}}
        className={`
          text-[18px] md:text-[20px] leading-9 w-[90%] mb-3 md:w-[40%] sm:w-[55%] lg:w-[50%] lg:text-[30px] font-bold tracking-tigh`}
      >
        {heading}
      </h1>
      <p
        className={`text-[15px] leading-5 font-normal tracking-normal md:w-[75%] lg:w-[70%]`}
        style={paraColor && { color: paraColor }}
      >
        {para}
      </p>
    </div>
  );
};

export default Headingpara;
