import React from 'react'
import { PiArrowBendDownRight } from "react-icons/pi";
const EnrollButton = ({title='Call Us', icon= <PiArrowBendDownRight />}) => {
  return (
  <div className="min-w-[140px] py-2 px-4 cursor-pointer whitespace-nowrap rounded-full border border-white flex justify-center gap-2 items-center bg-transparent text-white hover:bg-white hover:text-black transition-colors">
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