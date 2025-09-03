import React from "react";
import { motion } from "framer-motion";
import logof from "../../../public/images/logo/logof.png";
const Welcomanimation = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-screen bg-[#074473] font-[Boldonse] fixed top-0 left-0 z-[999] lg:flex  items-center justify-center flex-col"
    >
      <div className="flex w-full relative justify-center min-h-[40vh] top-10 md:top-15 lg:top-0 overflow-hidden">
        <motion.div
          animate={{
            y: ["-100%", 0, 150, 0],
          }}
          transition={{
            duration: 4,
            delay: 4,
            ease: "backInOut",
          }}
          className="absolute top-20 left-[3.8px] h-full w-full flex items-center justify-center"
        >
          <div className="max-w-[45vw] flex flex-col gap-4 items-center justify-center rounded-md px-4 md:px-2">
            <div className="h-[20vw] w-[20vw] relative overflow-hidden">
              <img src={logof} className="h-full w-full object-scale-down" />
              <div className="absolute top-[65%] left-0 h-1/2 w-full bg-[#074473]"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div className="w-full lg:min-h-[30vh] min-h-[10vh]  z-10 mt-[-3%] overflow-hidden flex items-center justify-center relative gap-4.5">
        <motion.span
          animate={{
            y: [300, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "anticipate",
          }}
          className="inline-block tracking-[10px] text-[5.5vw] leading-0 font-black  text-white/85"
        >
          R
        </motion.span>
        <motion.span
          animate={{
            y: [300, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          E
        </motion.span>
        <motion.span
          animate={{
            y: [300, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          G
        </motion.span>
        <motion.span
          animate={{
            y: [300, 0],
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          E
        </motion.span>

        <motion.span
          animate={{
            scale: [0, 20, 1],
            opacity: [0.5, 0, 0.5, 1],
          }}
          transition={{
            duration: 4,
            delay: 0.5,
            ease: "backInOut",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          N
        </motion.span>

        <motion.span
          animate={{
            y: [-300, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          T
        </motion.span>
        <motion.span
          animate={{
            y: [-300, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          E
        </motion.span>
        <motion.span
          animate={{
            y: [-300, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          C
        </motion.span>
        <motion.span
          animate={{
            y: [-300, 0],
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "anticipate",
          }}
          className="inline-block text-[5.5vw] leading-0 font-black  text-white/85"
        >
          H
        </motion.span>
      </motion.div>

      <motion.div className="flex relative gap-4 items-center flex-col md:flex-row justify-center mb-[35vh] lg:mt-3 md:mt-1.5 mt-0 w-full">
        <div className="flex items-center relative justify-center gap-3 ">
          <motion.span
            animate={{
              x: [-800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.2,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            COME
          </motion.span>
          <motion.span
            animate={{
              x: [-800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.4,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            TO
          </motion.span>
          <motion.span
            animate={{
              x: [-800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.6,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            LEARN.
          </motion.span>
        </div>
        <div className="flex items-center relative justify-center gap-3 ">
          <motion.span
            animate={{
              x: [800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.4,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            GO
          </motion.span>
          <motion.span
            animate={{
              x: [800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.6,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            OUT
          </motion.span>
          <motion.span
            animate={{
              x: [800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.8,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            TO
          </motion.span>
          <motion.span
            animate={{
              x: [800, 0],
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              duration: 2,
              delay: 1.8,
              ease: "backInOut",
            }}
            className="inline-block tracking-[10px] text-[2vw] md:text-[1vw] leading-0 font-black  text-white/85"
          >
            SERVER
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Welcomanimation;
