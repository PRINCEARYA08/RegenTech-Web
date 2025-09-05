import React, { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";
import ComponentLoader from "../components/ComponentLoader.jsx";

const App = lazy(() => import("../App.jsx"));
const Homepage = lazy(() => import("../pages/Homepage.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const Gallery = lazy(() => import("../pages/Gallery.jsx"));
const Courses = lazy(() => import("../pages/Courses.jsx"));

const Awards = lazy(() => import("../components/awads/Awards.jsx"));
const Community = lazy(() => import("../components/Community/community.jsx"));
const LiveProjects = lazy(() => import("../components/LiveProjects/LiveProjects.jsx"));
const OurTeam = lazy(() => import("../pages/OurTeam.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const LeaderShip = lazy(() => import("../pages/LeaderShip.jsx"));

const router = createBrowserRouter([
  {
    path: "/regentech/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
            <Homepage />
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "liveprojects",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <LiveProjects />
          </Suspense>
        ),
      },
      {
        path: "awads",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <Awards />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "courses",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "ourteam",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <OurTeam />
          </Suspense>
        ),
      },
      {
        path: "leadership",
        element: (
          <Suspense fallback={<ComponentLoader />}>
            <LeaderShip />
          </Suspense>
        ),
      },
    ],
  },
]);

export { router };
