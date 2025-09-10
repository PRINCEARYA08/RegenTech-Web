import React from "react";
import EnrollButton from "../components/Animation/ButtonAnimations/EnrollButton.jsx"
import { Link } from "react-router-dom";
 
import owner1 from "../../public/images/owners/owner1.jpg"
import owner2 from "../../public/images/owners/owner2.jpg"

const LeaderShip = () => {
  return (
    <div className="w-full min-h-[85vh] bg-black dark:bg-white text-white/85 dark:text-black/85 relative flex flex-col items-center px-8 lg:flex-row">
    <div className="lg:w-[50%] h-full flex-col flex lg:gap-8 gap-2">
        <div className="w-full relative">
            <h1 className="font-black capitalize text-3xl lg:text-6xl">The Leadership</h1>
        <h2 className="font-black capitalize text-3xl lg:text-6xl">behind our Legacy</h2>
        </div>
        <div className="w-full flex items-center justify-center min-h-[10vh]">
        <Link to={"/regentech/ourteam"}>
          <EnrollButton title="Know More" />
        </Link>
      </div>
    </div>

      <div className=" lg:w-[50%] w-full h-full overflow-hidden relative flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="flex items-center flex-col justify-center w-full">
          <img
            src={owner1}
            className="w-[500px] h-[450px] object-cover object-top rounded-lg "
          />
          <div className="pt-5 text-center">
             <h1 className="font-medium text-2xl leading-normal">
             Mr. Surjeet Singh Gour
            </h1>
            <h2 className="font-normal leading-normal text-xl tracking-wider">
              {`(Director)`}
            </h2>
          </div>
        </div>

         <div className="flex items-center flex-col justify-center ">
          <img
            src={owner2}
            className="w-[500px] h-[450px] object-cover object-top rounded-lg "
          />
          <div className="pt-5 text-center">
             <h1 className="font-medium text-2xl leading-normal">
             Mr. Anil Kumar Balani
            </h1>
            <h2 className="font-normal leading-normal text-xl tracking-wider">
              {`(Director)`}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;
