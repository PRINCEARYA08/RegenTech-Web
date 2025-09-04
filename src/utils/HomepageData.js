// ===================== Welcome Cards =====================
const welcomeCardsDetails = [{
        title: "The Experts",
        des: "Learn From Industry Experts And Get Support With Interviews, Portfolios, And Job Readiness.",
        case: true,
    },
    {
        title: "Live Projects",
        des: "Work on real-world projects that build your portfolio and prepare you for high-paying tech careers.",
        case: true,
    },
    {
        title: "Awards & Achivements",
        des: "Showcase your skills with globally recognized certifications and awards to boost your career prospects.",
        case: true,
    },
    {
        title: "Community",
        des: "Join A Community Of Learners, Collaborate On Projects, And Build Lasting Professional Relationships.",
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
        courseName: "Robotics",
        mentor: "Mr. Sumit Janoriya",
        mentorRole: "Robotics Trainer",
        mentorImg: t3,
        paraDetails: "Build and program robots using Arduino, Raspberry Pi, and sensors. Learn mechanics, electronics, and coding for real-world applications.",
        enrollStudent: 50,
        courseRating: 4.5,
        // coursePrice: 18000,
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
        // coursePrice: 13000,
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
        // coursePrice: 10000,
    },
];

// ===================== Export =====================
export { welcomeCardsDetails, ourPopularCoursesCardsDetails };