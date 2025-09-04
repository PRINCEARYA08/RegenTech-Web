// ===================== Welcome Cards =====================
const welcomeCardsDetails = [{
        title: "The Experts",
        des: "Learn from top industry professionals with years of real-world experience in tech and development.",
        case: true,
    },
    {
        title: "Live Projects",
        des: "Work on real-world live projects with expert supervision to gain industry-ready skills and confidence.",
        case: true,
    },
    {
        title: "Best Courses",
        des: "From coding to cloud computing - our job-ready courses are the most in-demand in Bhopal.",
        case: true,
    },
    {
        title: "Award & Reward",
        des: "Certified programs with placement support and recognition - we reward skill, effort, and success.",
        case: true,
    },
];

// ===================== Images =====================
import t1 from "../../public/images/mentors/t1.jpg";
import t2 from "../../public/images/mentors/t2.jpg";
import t3 from "../../public/images/mentors/t3.jpg";

import robo from "../../public/images/courses/robo.webp";
import auto from "../../public/images/courses/auto.webp";
import digi from "../../public/images/courses/digi.webp";

// ===================== Courses =====================
const ourPopularCoursesCardsDetails = [{
        img: robo,
        courseName: "Full Stack Web Development",
        mentor: "Ms. Ziya Siddiqui",
        mentorRole: "Designer & Website",
        mentorImg: t3,
        paraDetails: "Master Full Stack development with real projects, expert mentorship, and job-ready skills for high-paying tech careers worldwide.",
        enrollStudent: 50,
        courseRating: 4.5,
        coursePrice: 18000,
    },
    {
        img: digi,
        courseName: "Digital Marketing",
        mentor: "Mr. Nitin Barkhade",
        mentorRole: "Marketing & Management",
        mentorImg: t2,
        paraDetails: "Master SEO, social media, Google Ads, and content strategies to grow brands, generate leads, and build successful digital careers.",
        enrollStudent: 30,
        courseRating: 4.4,
        coursePrice: 13000,
    },
    {
        img: auto,
        courseName: "Animation",
        mentor: "Mr. Laxman Sharma",
        mentorRole: "Animator",
        mentorImg: t1,
        paraDetails: "Learn Graphic Designing from professionals and master visual storytelling, branding, and design tools for digital and print media.",
        enrollStudent: 80,
        courseRating: 4.7,
        coursePrice: 10000,
    },
];

// ===================== Export =====================
export { welcomeCardsDetails, ourPopularCoursesCardsDetails };