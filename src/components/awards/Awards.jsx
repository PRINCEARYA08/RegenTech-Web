import React from "react";

const awardsData = [
  {
    title: "Best Developer Award",
    issuer: "TechFest 2024",
    description: "Recognized as the best full-stack developer at TechFest.",
    date: "March 2024",
    image: "/images/awards/dev-award.png", // Add image in public/images/awards/
  },
  {
    title: "Hackathon Winner",
    issuer: "Smart India Hackathon",
    description: "Led a team to build an AI-powered solution for healthcare.",
    date: "August 2023",
    image: "/images/awards/hackathon.png",
  },
  {
    title: "Certified MERN Stack Developer",
    issuer: "Udemy / Coursera",
    description: "Completed a professional certification in MERN stack development.",
    date: "June 2023",
    image: "/images/awards/mern-cert.png",
  },
  {
    title: "Top 10 Finalist",
    issuer: "Google Code Jam",
    description: "Secured a place in the top 10 finalists of Google Code Jam regional round.",
    date: "November 2022",
    image: "/images/awards/codejam.png",
  },
];

const Awards = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black/90 text-white/90 p-10">
      <h1 className="text-3xl font-bold mb-6">Awards & Achievements</h1>
      <p className="text-lg max-w-2xl text-center mb-10">
        Showcase your skills with globally recognized certifications, awards, and achievements to boost your career prospects.
      </p>

      {/* Grid for awards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-40 object-contain mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-yellow-300">{award.title}</h2>
            <p className="text-sm text-gray-300">{award.issuer}</p>
            <p className="mt-2 text-gray-200">{award.description}</p>
            <p className="mt-3 text-sm text-gray-400 italic">{award.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
