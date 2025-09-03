import { createContext, useContext, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const SmoothScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    scroll.on("scroll", (args) => {
      setScrollY(args.scroll.y); // <-- scroll position from Locomotive
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      <div data-scroll-container ref={scrollRef} className="scroll-container">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default SmoothScrollProvider;
