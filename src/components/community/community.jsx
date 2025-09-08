import React from "react";
// Sample data for community members       
const communityMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    img: "/images/partner/p1.png",
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    img: "/images/partner/p2.png",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Data Scientist",
    img: "/images/partner/p3.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "AI Researcher",
    img: "/images/partner/p4.png",
  },
  {
    id: 5,
    name: "David Kim",
    role: "DevOps Engineer",
    img: "/images/partner/p5.png",
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "Mobile App Developer",
    img: "/images/partner/p6.png",
  },
  {
    id: 7,
    name: "Carlos Rodriguez",
    role: "Cybersecurity Expert",
    img: "/images/partner/p7.png",
  },
  {
    id: 8,
    name: "Emma Wilson",
    role: "Cloud Architect",
    img: "/images/partner/p8.png",
  },
  {
    id: 9,
    name: "Liam Johnson",
    role: "Product Manager",
    img: "/images/partner/p9.png",
  },
  {
    id: 10,
    name: "Olivia Brown",
    role: "Business Analyst",
    img: "/images/partner/p10.png",
  },
  {
    id: 11,
    name: "Noah Davis",
    role: "QA Engineer",
    img: "/images/partner/p11.png",
  },
  {
    id: 12,
    name: "Sophia Martinez",
    role: "Frontend Developer",
    img: "/images/partner/p12.png",
  },
];

const Community = () => {
  return (
    <div className="w-full min-h-screen bg-black/90 text-white/90 p-10 pt-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">Our Community</h1>
        <p className="text-lg max-w-2xl text-center mb-10">
          A thriving community of developers, designers, and innovators working
          together to share knowledge, build projects, and grow professionally.
        </p>

        {/* Community Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {communityMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-800/70 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-gray-700 mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
