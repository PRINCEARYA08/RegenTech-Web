import React, { useEffect, useRef, useState } from "react";
import s1 from "../../../public/images/student/s1.jpg";
import s2 from "../../../public/images/student/s2.jpg";
import s3 from "../../../public/images/student/s3.jpg";
import s4 from "../../../public/images/student/s4.jpg";
import s5 from "../../../public/images/student/s5.jpg";
import { useDark } from "../../context/theme/DarkContext";

 const placements = [
    {
      id: 1,
      studentName: "Rahul Kumar",
      studentProfileImageURL: s1,
      paraLines:
        "Rahul Kumar has been successfully placed at Group Bayport in Ahmedabad with a starting package of 3 LPA. His dedication and hard work have made him a standout achiever.",
    },
    {
      id: 2,
      studentName: "chandra Bhushan Singh",
      studentProfileImageURL: s2,
      paraLines:
        "Chandra Bhushan Singh joined Group Bayport in Ahmedabad with a salary package of 3 LPA. His consistent performance and discipline led to this well-deserved placement.",
    },
    {
      id: 3,
      studentName: "Ramgopal Ravat",
      studentProfileImageURL: s3,
      paraLines:
        "Ramgopal Ravat has earned his place at Group Bayport, Ahmedabad, with a solid offer of 3 LPA. His practical skills and technical knowledge played a key role in his selection",
    },
    {
      id: 5,
      studentName: "Amanullah Ali",
      studentProfileImageURL: s5,
      paraLines:
        "Amanullah Ali secured a placement at Group Bayport, Ahmedabad, with a starting salary of 3 LPA. His commitment to learning and excellence made him an ideal candidate.",
    },
    {
      id: 4,
      studentName: "Simran Sahu",
      studentProfileImageURL: s4,
      paraLines:
        "Simran Sahu has been placed at Group Bayport in Ahmedabad, receiving a salary of 3 LPA. Her dedication to mastering industry-relevant skills led to this great opportunity.",
    },
  ];

const PlacedStudent = () => {
  const {dark} = useDark();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === placements.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [placements.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="flex flex-nowrap justify-start overflow-x-hidden gap-3.5 p-2 capitalize w-full lg:max-w-5xl mx-auto "
    >
      {placements.map((item, index) => (
        <div
          key={index}
          // style={{
          //   background: "linear-gradient(to top,#000, #00000040, #00000060)",
          // }}
          className="flex flex-col min-h-[30vh] flex-shrink-0 sm:max-w-[100%] md:max-w-[27.5vw] max-w-full items-center p-4 shadow dark:shadow-black/10 shadow-black/85 rounded-lg"
        >
          <div className={`w-full min-h-10 py-2 rounded-md flex overflow-hidden relative `}>
           <div className=" flex gap-4 items-center px-1">
             <div className="max-w-[7vw] md:max-w-[5vw] md:max-h-[5vw] max-h-[7vw] rounded-full overflow-hidden shadow shadow-black/40 dark:shadow-black/50">
               <img
              src={item.studentProfileImageURL}
              alt={item.studentName}
              className="w-full h-full object-cover"
            />
             </div>
            <h2 className="text-white dark:text-black font-medium text-lg">{item.studentName}</h2>
          
          </div>
             </div>
           
          <div className="w-full flex flex-col gap-1 ">
            <p
              style={{ padding: "4px", paddingLeft: "30px" }}
              className=" text-sm leading-relaxed text-start"
            >
              {item.paraLines}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacedStudent;
