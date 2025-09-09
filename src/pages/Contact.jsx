import React from "react";
import logoLightMood from "../../public/images/logo/logo.png";
import logoBlackMood from "../../public/images/logo/logof.png";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useDark } from "../context/theme/DarkContext.jsx";
import BlurText from "../components/Animation/TextAnimations/BlurText.jsx";
import EnrollButton from "../components/Animation/ButtonAnimations/EnrollButton.jsx";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const { dark } = useDark();
  const navigate = useNavigate();
  return (
    <div className="w-full h-full relative flex flex-col gap-10 bg-black dark:bg-white text-white/85 dark:text-black/85">
      <div className="flex w-full flex-col min-h-[100vh] items-center gap-10 lg:items-start justify-center px-8 pt-28 ">
        <div className="text-center w-full flex justify-center  flex-col items-center gap-2">
          <BlurText
            text="Get In Touch"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
          />
          <p style={{ color: dark === false ? "#ccc" : "#000" }}>Choose your preferred way to get help from our support team:</p>
        </div>
        <div className="relative w-full h-full flex items-center justify-center gap-5 flex-col lg:flex-row px-2 lg:px-10">
          {/* Call Us */}
          <div className="min-w-full lg:min-w-[30vw] px-3 py-3 min-h-[20vh] flex flex-col justify-start gap-2 border-[1px] border-zinc-100 dark:border-black rounded-t-4xl">
            <div className="flex items-center gap-4">
              <div className="p-4 border-amber-400 dark:border-black hover:bg-amber-400 duration-300 hover:text-white border-[1px] w-fit rounded-full">
                <span><IoIosCall /></span>
              </div>
              <div className="w-fit">
                <h2>Call Us</h2>
              </div>
            </div>
            <div className="flex items-center justify-center w-full pl-16 ">
              <p style={{ color: dark === false ? "#ccc" : "#000", width: "fit-content", fontSize: "15px" }}>Need immediate help? Call us now at +91 9243611149</p>
            </div>
            <a href="tel:9243611149" className="w-full inline-flex items-center justify-center py-5">
              <EnrollButton title="Call Us" icon={<IoIosCall />} />
            </a>
          </div>
          {/* Email Us */}
          <div className="min-w-full lg:min-w-[30vw] px-3 py-3 min-h-[20vh] flex flex-col justify-start gap-2 border-[1px] border-zinc-100 dark:border-black rounded-t-4xl">
            <div className="flex items-center gap-4">
              <div className="p-4 border-amber-400 dark:border-black hover:bg-amber-400 duration-300 hover:text-white border-[1px] w-fit rounded-full">
                <span><MdOutlineEmail /></span>
              </div>
              <div className="w-fit">
                <h2>Email Us</h2>
              </div>
            </div>
            <div className="flex items-center justify-center w-full pl-16 ">
              <p style={{ color: dark === false ? "#ccc" : "#000", width: "fit-content", fontSize: "15px" }}>Prefer email? Reach out to us at regentechinstitute@gmail.com</p>
            </div>
            <a href="mailto:regentechinstitute@gmail.com" className="w-full inline-flex items-center justify-center py-5">
              <EnrollButton title="Email Us" icon={<MdOutlineEmail />} />
            </a>
          </div>
          {/* Chat with Us (Show Contact Form) */}
          <div className="min-w-full lg:min-w-[30vw] px-3 py-3 min-h-[20vh] flex flex-col justify-start gap-2 border-[1px] border-zinc-100 dark:border-black rounded-t-4xl">
            <div className="flex items-center gap-4">
              <div className="p-4 border-amber-400 dark:border-black hover:bg-amber-400 duration-300 hover:text-white border-[1px] w-fit rounded-full">
                <span><IoChatbubbleEllipsesOutline /></span>
              </div>
              <div className="w-fit">
                <h2>Chat with Us</h2>
              </div>
            </div>
            <div className="flex items-center justify-center w-full pl-16 ">
              <p style={{ color: dark === false ? "#ccc" : "#000", width: "fit-content", fontSize: "15px" }}>Have questions? Start a live chat with one of our agents right now.</p>
            </div>
            <button onClick={() => navigate("/regentech/contactus") } className="w-full inline-flex items-center justify-center py-5">
              <EnrollButton title="Start Chat" icon={<IoChatbubbleEllipsesOutline />} />
            </button>
          </div>
        </div>
  {/* Show Contact Form Modal removed, now handled by route navigation */}
      </div>

      {/* Google Map */}
      <div className="w-full min-h-[10vh] md:h-[65vh] lg:h-[60vh] mx-auto flex items-start justify-center flex-col lg:px-40 md:px-20 px-10">
          <div className="text-center w-full flex justify-center pb-10 flex-col items-center gap-2">
            <BlurText
              text="Our Location"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl lg:text-4xl text-shadow-lg font-[Boldonse] w-fit"
            />
            <p style={{color: dark === false ? "#ccc" : "#000"}}>Choose your preferred way to get help from our support team:</p>
          </div>
        <div className="w-full h-full overflow-hidden rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8945325852073!2d77.43738790912627!3d23.174049110574494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c230007ab7%3A0x5d5eb0543cf70fa7!2sRegentech%20Institute%20LLP!5e0!3m2!1sen!2sin!4v1749816255284!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Info */}
      <div className=" px-4 pb-20 pt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info Text */}
          <div className="pl-0 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              Contact Info
            </h2>
            <p
            style={{color: dark === false ? "#ccc" : "#000"}}
            className=" mb-6">
              It's a well-known fact that great ideas start with a conversation.
              If you have a question, a project in mind, or just want to
              connect—feel free to reach out. Whether you're looking for
              collaboration, feedback, or support, I'm here to listen and help.
              Let's create something meaningful together.
            </p>
            <div>
              <h3 className="text-lg font-semibold ">
                Rohit Nagar Office
              </h3>
              <ul className="mt-3 space-y-3 text-sm ">
                <li className="flex items-start gap-2">
                  <FaLocationDot className="text-lg text-blue-600" />
                  <span>
                    Phase - 2, Plot no. - 190, Rohit Nagar Rd, Bhopal, Madhya
                    Pradesh 462026
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IoIosCall className="text-lg text-blue-600" />
                  <span>9243611149</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdOutlineEmail className="text-lg pt-1 text-blue-600" />
                  <span>regentechinstitute@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <img
              src={dark === false ? logoBlackMood : logoLightMood}
              alt="Regentech"
              className="max-w-[200px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
