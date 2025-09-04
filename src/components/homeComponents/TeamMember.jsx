import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import EnrollButton from "../../components/Animation/ButtonAnimations/EnrollButton.jsx";
import { Link } from "react-router-dom";
import t3 from "../../../public/images/mentors/t3.jpg"
import t1 from "../../../public/images/mentors/t1.jpg"
import t2 from "../../../public/images/mentors/t2.jpg"

const TeamMember = () => {
  const teamMembers = [
    {
      name: "Laxman Sharma",
      role: "Animator",
      image: t1,
      socials: {
        facebook: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Sumit Janoriya",
      role: "Robotics",
      image: t3,
      socials: {
        facebook: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Nitin Barkhade",
      role: "Marketing & Management",
      image: t2,
      socials: {
        facebook: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];
  // 9209495108
  
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 justify-center  grid gap-10 md:gap-6 lg:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative text-center group">
            <div className="w-40 h-36 shadow-md mx-auto  overflow-hidden rounded-md mb-[-3.5rem] z-10 relative">
              <img
                src={`${member.image}`}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="dark:bg-white/85 bg-black/85 pt-20 pb-6 px-4 rounded-lg shadow-md group-hover:shadow-xl transition duration-200">
              <h3 className="text-lg font-semibold transition duration-200">
                {member.name}
              </h3>
              <p className="whitespace-nowrap" style={{ fontSize: "13px" }}>
                {member.role}
              </p>
              <ul className="flex justify-center mt-2 space-x-4">
                <li>
                  <a href={member.socials.facebook}>
                    <FaFacebookF className="text-gray-500 hover:text-[#14bdee] transition" />
                  </a>
                </li>
                <li>
                  <a href={member.socials.twitter}>
                    <FaTwitter className="text-gray-500 hover:text-[#14bdee] transition" />
                  </a>
                </li>
                <li>
                  <a href={member.socials.email}>
                    <MdEmail className="text-gray-500 hover:text-[#14bdee] transition" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center min-h-[20vh]">
        <Link to={"/regentech/ourteam"}>
          <EnrollButton title="Know More" />
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
