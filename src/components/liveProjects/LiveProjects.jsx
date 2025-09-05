import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    img: "/images/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Online Learning System",
    img: "/images/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Voting App",
    img: "/images/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: "/images/projects/project4.jpg",
  },
];

const LiveProjects = () => {
  return (
    <div className="w-full min-h-screen bg-black/90 text-white/90 p-10 pt-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading with extra space */}
        <h1 className="text-4xl font-bold mb-6 text-center">Live Projects</h1>
        <p className="text-lg max-w-2xl text-center mb-10">
          Explore our live projects built with modern technologies. These showcase real-world problem-solving skills and hands-on implementation.
        </p>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-700"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
