import React from "react";

const awardsData = [
  {
    title: "Certificate of Recognition",
    issuer: "Department for Promotion of Industry and Internal Trade",
    description:
      "Recognized as a startup working in 'Technology Hardware' Industry and 'Manufacturing' sector.",
    date: "December 8, 2022",
    image: "public/images/awards/c1.jpg",
  },
  {
  title: "Certificate of Appreciation",
  issuer: "Corrosion Protection Pvt. Ltd.",
  description: "Awarded to KIIT University team for innovative automation work on 'Tracking of 'C' Welding seam of LPG Cylinder'. Recognized for exemplary work boosting Industry Academia interaction and enhancing productivity for MSMEs in Odisha.",
  date: "October 21, 2022",
  image: "public/images/awards/c2.jpg",  // Replace with actual path to your image file
},
{
  title: "Certificate of Recognition",
  issuer: "Startup Odisha, Micro, Small & Medium Enterprises Department, Government of Odisha",
  description: "IVEYS INNOVATIONS PVT LTD is recognized as a 'Startup' under the Odisha Startup Policy - 2016. This certificate is valid for up to 7 years (10 years for biotechnology) from the date of incorporation, provided annual turnover does not exceed ₹25 crore.",
  date: "December 17, 2022",
  image: "public/images/awards/c3.jpg",  // Replace with the actual path to your image file
},
{
  title: "Certificate of Appreciation",
  issuer: "PM Shri School, Jawahar Navodaya Vidyalaya, Jhabua-I",
  description: "Awarded to Mr. Surjeet Singh Gaur, Founder and CEO of Iveys Innovations, Babel India, and CADX, for delivering an expert lecture on 'Innovation and Entrepreneurship'. The session was highly motivating and fruitful for the students.",
  date: "November 26, 2024",
  image: "public/images/awards/c7.jpg",  // Replace with the actual path to your image file
},
{
  title: "Memento of Appreciation",
  issuer: "Sagar Institute of Science & Technology (SISTec), Department of Mechanical Engineering",
  description: "Awarded to Surjeet Singh Gaur, Director & CEO, for his effective Expert Talk on 'Innovation/Prototype validation-Converting Innovation into Start-up'.",
  date: "2024", // Note: The image content does not specify a date, so you may need to adjust this if you have the actual date
  image: "public/images/awards/c8.jpg",  // Replace with the actual path to your image file
},



];

const Awards = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black/90 text-white/90 p-10">
      {/* Added top margin here */}
      <h1 className="text-3xl font-bold mb-6 mt-12">Awards & Achievements</h1>
      
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
