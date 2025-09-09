import React from "react";

const communityMembers = [
  { id: 1, img: "images/partner/p1.png", name: "John Doe" },
  { id: 2, img: "images/partner/p2.png", name: "Sarah Lee" },
  { id: 3, img: "images/partner/p3.jpg", name: "Michael Smith" },
  { id: 4, img: "images/partner/p4.png", name: "Priya Sharma" },
  { id: 5, img: "images/partner/p5.png", name: "David Kim" },
  { id: 6, img: "images/partner/p6.png", name: "Aisha Khan" },
  { id: 7, img: "images/partner/p7.png", name: "Carlos Rodriguez" },
  { id: 8, img: "images/partner/p8.png", name: "Emma Wilson" },
  { id: 9, img: "images/partner/p9.png", name: "Liam Johnson" },
  { id: 10, img: "images/partner/p10.png", name: "Olivia Brown" },
  { id: 11, img: "images/partner/p11.png", name: "Noah Davis" },
  { id: 12, img: "images/partner/p12.png", name: "Sophia Martinez" },
  { id: 13, img: "images/partner/p13.png", name: "Ethan Garcia" },
  { id: 14, img: "images/partner/p14.png", name: "Isabella Hernandez" },  
  { id: 15, img: "images/partner/p15.png", name: "Mason Lopez" },
  { id: 16, img: "images/partner/p16.png", name: "Mia Gonzalez" },
  { id: 17, img: "images/partner/p17.png", name: "Oliver Sanchez" },
  { id: 18, img: "images/partner/p18.png", name: "Ava Ramirez" },
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

        {/* Community Logo Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {communityMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-center bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
