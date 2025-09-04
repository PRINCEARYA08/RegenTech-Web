import { FaLinkedin, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import footerLogoBlack from "../../public/images/logo/logoLeaf.png";
import footerLogo from "../../public/images/logo/logoLeafBlue.png";
import { useDark } from "../context/theme/DarkContext";
import { Link } from "react-router-dom";
const Footer = () => {
  const { dark } = useDark();
  return (
    <div className="w-full h-full relative">
      <footer className="relative bg-black/95 dark:bg-white/95 py-12 dark:text-black/85 text-white/85">
        <div className="absolute inset-0 bg-cover bg-center"></div>

        <div className="relative container mx-auto px-6">
          <div className="flex flex-wrap gap-y-12 justify-between">
            {/* About */}
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="mb-6">
                <a href="/regentech/">
                  <img
                    src={dark === false ? footerLogoBlack : footerLogo}
                    alt="Regentech"
                    className="w-[150px] h-auto"
                  />
                </a>
              </div>
              <div className="flex space-x-4 mt-4 text-white/85">
                <a
                  href="https://www.linkedin.com/company/regentech-institute/"
                  className="bg-[#4b505d] hover:bg-[#074473] w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="http://www.regentech.in"
                  className="bg-[#4b505d] hover:bg-[#074473] w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaGooglePlusG />
                </a>
                <a
                  href="https://www.instagram.com/regentechinstitute?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="bg-[#4b505d] hover:bg-[#074473] w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* All Pages  */}
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-lg font-semibold mb-4">All Pages</h2>
              <ul className="columns-2 space-y-2">
                {["home", "about", "contact", "courses", "gallery", "ourteam"].map(
                  (link, index) => (
                    <li  key={index}>
                      <Link
                        to={`/regentech/${link === "home" ? "" : link}`}
                       
                        className="font-medium capitalize LinkAnimation"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="space-y-3  text-sm">
                <li>Email: regentechinstitute@gmail.com</li>
                <li>Phone: +91 9243611149</li>
                <li>
                  Rohit Nagar, Phase - 2, Plot no. - 190, Rohit Nagar Rd,
                  Bhopal, Madhya Pradesh 462026
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#353a49] mt-12 pt-6 text-center text-[#b5b8be] text-sm">
            <p>
              &copy; {new Date().getFullYear()} All rights reserved | by
              Regentech Institute
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
