import React from 'react'
import { PiArrowBendDownRight } from "react-icons/pi";
const EnrollButton = ({title='Get Started', icon= <PiArrowBendDownRight />}) => {
  return (
    <div className="min-w-28 py-2 px-4 cursor-pointer whitespace-nowrap rounded-full border-[1px] dark:border-black border-white flex justify-center gap-2 items-center">
      <h3 className="text-[10px] font-medium leading-none">
        {title}
      </h3>
      <span className="text-xs">
        {icon}
      </span>
    </div>
  )
}

export default EnrollButton;
