import React from "react";

const communityMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    img: "/images/community/member1.jpg", // put images inside public/images/community/
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    img: "/images/community/member2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Data Scientist",
    img: "/images/community/member3.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "AI Researcher",
    img: "/images/community/member4.jpg",
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
