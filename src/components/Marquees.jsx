import React, { useState } from "react";
import p1 from "../../public/images/partner/p1.png";
import p2 from "../../public/images/partner/p2.png";
import p3 from "../../public/images/partner/p3.jpg";
import p4 from "../../public/images/partner/p4.png";
import p5 from "../../public/images/partner/p5.png";
import p6 from "../../public/images/partner/p6.png";
import p8 from "../../public/images/partner/p8.png";
import p9 from "../../public/images/partner/p9.png";
import p10 from "../../public/images/partner/p10.png";
import p11 from "../../public/images/partner/p11.png";
import p12 from "../../public/images/partner/p12.png";
import p13 from "../../public/images/partner/p13.png";
import p14 from "../../public/images/partner/p14.png";
import p15 from "../../public/images/partner/p15.png";
import p16 from "../../public/images/partner/p16.png";
import p17 from "../../public/images/partner/p17.png";
import p18 from "../../public/images/partner/p18.png";
import { motion } from "framer-motion";

const allPartnerImageSrc = [
  [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p8,
    // p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
  ],
  [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p8,
    // p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
  ],
];

const Marquees = () => {
  const [marqueeSrc, setMarqueeSrc] = useState(allPartnerImageSrc);
  return (
    <div className="my-1 w-full relative overflow-hidden">
      {marqueeSrc.map((marqueesImage, index) => (
        <div key={index} className="flex w-full py-4 gap-60 overflow-hidden">
          <motion.div
            initial={{
              x: (index === 0 ? "left" : "right") === "left" ? "0" : "-100%",
            }}
            animate={{
              x: (index === 0 ? "left" : "right") === "left" ? "-100%" : "0",
            }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="flex w-full gap-20 flex-shrink-0 py-2"
          >
            {marqueesImage.map((elem, index) => (
              <img key={index} src={`${elem}`} className="w-15 object-contain dark:contrast-100 contrast-200 grayscale-95 dark:grayscale-0" />
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Marquees;
