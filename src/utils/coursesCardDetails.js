import full from "../../public/images/courses/full.jpg";
import auto from "../../public/images/courses/auto.webp";
import digi from "../../public/images/courses/digi.webp";
import anim from "../../public/images/courses/anim.webp";
import robo from "../../public/images/courses/robo.webp";


import t5 from "../../public/images/mentors/t5.jpg";
import t2 from "../../public/images/mentors/t2.jpg";
import t1 from "../../public/images/mentors/t1.jpg";
import t3 from "../../public/images/mentors/t3.jpg";
import t6 from "../../public/images/mentors/t6.jpg";
// import t4 from "../../public/images/mentors/t4.jpg";

const courseCategoryBtns = [
    "all",
    "core-technical",
    "cad-cam",
    "trending-tech",
    "basic-computer",
    "project-and-planning",
    "digital-marketing",
    "civil",
];

const courseRegentechTrainingSolutionsHeadingBtn = [
    "Full Stack Development",
    "AutoCAD Training",
    "Digital Marketing",
    "Animation",
    "Robotics",
    "Web Development",
];

const courseRegentechTrainingSolutionsDetails = [{
        id: 0,
        img: full,
        compareLine: "Full Stack Development",
        heading: "Become a Full Stack Developer with Real Project Skills",
        paraLineOne: "Master both front-end and back-end technologies through our Full Stack Development course. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and Git through real-time projects and hands-on coding practice to build dynamic web applications from scratch.",
        paraLineTwo: "Our Full Stack Development program is ideal for beginners and professionals looking to upskill and land high-paying tech jobs. Learn through expert guidance, practical assignments, and portfolio-building projects.",
    },
    {
        id: 1,
        img: auto,
        compareLine: "AutoCAD Training",
        heading: "Master AutoCAD Tools for Smarter Design and Drafting",
        paraLineOne: "Learn professional 2D drafting and 3D modeling using industry-standard AutoCAD tools. Whether you're from civil, mechanical, or architectural background, our training is tailored for practical applications and certifications..",
        paraLineTwo: "With hands-on labs and real project-based tasks, our AutoCAD course ensures you develop the technical skills required in modern design firms, construction, and manufacturing industries.",
    },
    {
        id: 2,
        img: digi,
        compareLine: "Digital Marketing",
        heading: "Master Digital Marketing to Boost Brands and Career Growth",
        paraLineOne: "Become a certified digital marketing expert by mastering SEO, Google Ads, social media marketing, content strategy, email campaigns, and analytics tools from scratch.",
        paraLineTwo: "Our course focuses on real-world projects and live campaign building, helping you land freelance work, boost your brand, or get hired in top digital marketing agencies.",
    },
    {
        id: 3,
        img: full, // or another image import
        compareLine: "Web Development",
        heading: "Become a Web Developer with Modern Skills",
        paraLineOne: "Learn HTML, CSS, JavaScript, and frameworks to build responsive websites and web apps.",
        paraLineTwo: "Get hands-on experience with real projects and expert mentorship to kickstart your web development career.",
    },
    {
        id: 4,
        img: robo, // use imported 'robo'
        compareLine: "Robotics",
        heading: "Learn Robotics for Future Tech Innovations",
        paraLineOne: "Get hands-on experience with building and programming robots using Arduino, Raspberry Pi, and sensors.",
        paraLineTwo: "Our robotics course combines theory with practical projects, preparing you for careers in automation, AI, and advanced manufacturing.",
    },
    {
        id: 5,
        img: anim, // use imported 'anim'
        compareLine: "Animation",
        heading: "Master Animation for Creative Storytelling",
        paraLineOne: "Learn 2D and 3D animation techniques using tools like Blender, Maya, and After Effects.",
        paraLineTwo: "Our animation course focuses on character design, motion graphics, and visual effects to help you create stunning animations for films, games, and media.",
    },
];

const allCoursesDetails = [{
        id: 0,
        courseCategory: "core-technical",
        courseName: "Full Stack Web Development",
        mentorName: "Ms. Ziya Siddiqui",
        mentorImage: t5,
        mentorProfession: "Designer & Website",
        coursesPrice: "18000",
        courseImage: "https://images.pexels.com/photos/6964348/pexels-photo-6964348.jpeg",
        coursesLogos: [
            "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-python-logo-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--software-social-media-pack-logos-illustrations-4642716@0.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-java-3d-icon-download-in-png-blend-fbx-gltf-file-formats--object-oriented-jvm-logo-applications-coding-lang-pack-logos-icons-7578017.png",
            "https://w7.pngwing.com/pngs/35/874/png-transparent-c-language-logo-c-mobile-developer-programming-programming-language-interface-3d-icon.png",
        ],
        courseDetailsLine: "Master Full Stack development with real projects, expert mentorship, and job-ready skills for high-paying tech careers worldwide.",
    },
    {
        id: 1,
        courseCategory: "digital-marketing",
        courseName: "Digital Marketing",
        mentorName: "Mr. Nitin Barkhade",
        mentorImage: t2,
        mentorProfession: "Marketing & Management",
        coursesPrice: "18000",
        courseImage: "https://images.pexels.com/photos/6964348/pexels-photo-6964348.jpeg",
        coursesLogos: [
            "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-python-logo-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--software-social-media-pack-logos-illustrations-4642716@0.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-java-3d-icon-download-in-png-blend-fbx-gltf-file-formats--object-oriented-jvm-logo-applications-coding-lang-pack-logos-icons-7578017.png",
            "https://w7.pngwing.com/pngs/35/874/png-transparent-c-language-logo-c-mobile-developer-programming-programming-language-interface-3d-icon.png",
        ],
        courseDetailsLine: "Master Digital Marketing skills including SEO, social media, and content strategy to grow brands and careers.",
    },
    {
        id: 2,
        courseCategory: "trending-tech",
        courseName: "Animation",
        mentorName: "Mr. laxman Sharma",
        mentorImage: t1,
        mentorProfession: "Animator",
        coursesPrice: "18000",
        courseImage: "https://images.pexels.com/photos/6964348/pexels-photo-6964348.jpeg",
        coursesLogos: [
            "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-python-logo-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--software-social-media-pack-logos-illustrations-4642716@0.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-java-3d-icon-download-in-png-blend-fbx-gltf-file-formats--object-oriented-jvm-logo-applications-coding-lang-pack-logos-icons-7578017.png",
            "https://w7.pngwing.com/pngs/35/874/png-transparent-c-language-logo-c-mobile-developer-programming-programming-language-interface-3d-icon.png",
        ],
        courseDetailsLine: "Animation is a dynamic art form that brings static images to life through motion, storytelling, and visual effects, captivating audiences across various media platforms.",
    },
    {

        id: 3,
        courseCategory: "civil",
        courseName: "AutoCAD",
        mentorName: "Ms. Kajal Gupta",
        mentorImage: t6,
        mentorProfession: "AutoCAD Trainer",
        coursesPrice: "18000",
        courseImage: "https://images.pexels.com/photos/6964348/pexels-photo-6964348.jpeg",
        coursesLogos: [
            "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
        ],
        courseDetailsLine: "AutoCAD is a computer-aided design (CAD) software used for creating precise 2D and 3D drawings and models in various industries such as architecture, engineering, and construction.",
    },
    {
        id: 4,
        courseCategory: "trending-tech",
        courseName: "Full Stack Web Development",
        mentorName: "Ms. Ziya Siddiqui",
        mentorImage: t5,
        mentorProfession: "Designer & Website",
        coursesPrice: "18000",
        courseImage: "https://images.pexels.com/photos/6964348/pexels-photo-6964348.jpeg",
        coursesLogos: [
            "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-python-logo-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--software-social-media-pack-logos-illustrations-4642716@0.png",
            "https://cdn3d.iconscout.com/3d/free/thumb/free-java-3d-icon-download-in-png-blend-fbx-gltf-file-formats--object-oriented-jvm-logo-applications-coding-lang-pack-logos-icons-7578017.png",
            "https://w7.pngwing.com/pngs/35/874/png-transparent-c-language-logo-c-mobile-developer-programming-programming-language-interface-3d-icon.png",
        ],
        courseDetailsLine: "Master Full Stack development with real projects, expert mentorship, and job-ready skills for high-paying tech careers worldwide.",
    },



];

export {
    allCoursesDetails,
    courseCategoryBtns,
    courseRegentechTrainingSolutionsDetails,
    courseRegentechTrainingSolutionsHeadingBtn,
};