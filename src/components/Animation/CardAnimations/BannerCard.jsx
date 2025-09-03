import React from 'react'
import {motion, useScroll} from "framer-motion";
import EnrollButton from '../ButtonAnimations/EnrollButton.jsx';
import { useDark } from '../../../context/theme/DarkContext';

const BannerCard = ({data}) => {
    const {dark} = useDark();
  return (
    <div className={`w-full min-h-[5vh] flex items-start lg:items-center flex-col lg:flex-row gap-4 justify-between px-4 py-10  border-b-[1px] border-t-[1px] dark:border-black border-white`}>
      <h1 className="text-3xl leading-none tracking-wide font-medium capitalize">
        {data.title}
      </h1>
      <div className="lg:w-1/3 w-full px-10">
        <p style={{color : dark === false ? "#fff" : "#262626"}} className="text-xs tracking-wide leading-4">{data.des}</p>
        <div className="flex gap-2 mt-5">
          {data.live && <EnrollButton title="Live Website" />}
          {data.case && <EnrollButton title="Case Study" />}
        </div>
        </div>
    </div>
  )
}

export default BannerCard
