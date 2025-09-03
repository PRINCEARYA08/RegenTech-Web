import React from "react";
import g1 from "../../public/images/gellery/photo.jpg";
import g2 from "../../public/images/gellery/photo1.jpg";
import g3 from "../../public/images/gellery/photo2.jpg";
import g4 from "../../public/images/gellery/photo3.jpg";
import g5 from "../../public/images/gellery/photo4.jpg";
import g6 from "../../public/images/gellery/photo5.jpg";
import g7 from "../../public/images/gellery/photo6.jpg";
import g8 from "../../public/images/gellery/photo7.jpg";
import g9 from "../../public/images/gellery/photo8.jpg";
import g10 from "../../public/images/gellery/photo9.jpg";
import g11 from "../../public/images/gellery/photo10.jpg";
import g12 from "../../public/images/gellery/photo11.jpg";
import g13 from "../../public/images/gellery/photo12.jpg";
import g14 from "../../public/images/gellery/photo13.jpg";
import g15 from "../../public/images/gellery/photo14.jpg";
import g16 from "../../public/images/gellery/photo15.jpg";
import g17 from "../../public/images/gellery/photo16.jpg";
import g18 from "../../public/images/gellery/photo17.jpg";
import g19 from "../../public/images/gellery/photo18.jpg";
import g20 from "../../public/images/gellery/photo19.jpg";
import g21 from "../../public/images/gellery/photo20.jpg";
import g22 from "../../public/images/gellery/photo21.jpg";
import g23 from "../../public/images/gellery/photo22.jpg";
import g24 from "../../public/images/gellery/photo23.jpg";
import g25 from "../../public/images/gellery/photo24.jpg";
import { useDark } from "../context/theme/DarkContext";
import BlurText from "../components/Animation/TextAnimations/BlurText";

const galleryImagesSRC = [
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,
  g22,
  g23,
  g24,
  g25,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
];

const Gallery = () => {
  const { dark } = useDark();

  return (
    <div className="w-full h-full relative flex flex-col bg-black dark:bg-white dark:text-black text-white pt-20">
      <div className="w-full  relative flex flex-col justify-between px-10 py-8 gap-10">
        {/* heading */}

        <div className="text-center w-full flex justify-center  flex-col items-center gap-6">
          <BlurText
            text="Our Gallery"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
          />
          <p style={{ color: dark === false ? "#ccc" : "#000" }}>
            At Regentech, our strength lies in our mentors. Each tutor is a
            seasoned industry expert dedicated to delivering real-world
            knowledge, personalized guidance, and hands-on training. With a
            passion for teaching and proven experience, they ensure every
            student gets the support needed to excel in their career journey.
          </p>
        </div>
        {/* grid box */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImagesSRC.map((imageSRC, indx) => (
            <div className="grid gap-4 ">
              <div className="max-h-[40vw]  md:max-w-[25vw]  overflow-hidden">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={`${imageSRC}`}
                  alt="galleryImage"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
