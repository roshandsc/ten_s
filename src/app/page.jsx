// Updated by Roshan to trigger redeployment
"use client";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });
// Suppress specific React hydration warning in development (e.g., Grammarly extension)
if (process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes(
        "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties"
      )
    ) {
      return; // ignore this specific hydration warning
    }
    originalConsoleError(...args);
  };
}
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaComments, FaUserTie } from "react-icons/fa";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";

const HydrationSafe = ({ children }) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;
  return children;
};

export default function TessaCloudLanding() {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedInternship, setSelectedInternship] = React.useState(null);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  // Ref for popular categories section
  const popularCategoriesRef = React.useRef(null);

  const internships = [
    {
      title: "Web Development",
      iconName: "FaGlobe",
      duration: "4-12 weeks",
      mode: "Online",
      color: "green-400",
    },
    {
      title: "Mobile App Development",
      iconName: "FaMobileAlt",
      duration: "4-12 weeks",
      mode: "Online",
      color: "purple-400",
    },
    {
      title: "Machine Learning / AI",
      iconName: "FaRobot",
      duration: "6-24 weeks",
      mode: "Online",
      color: "yellow-400",
    },
    {
      title: "Data Science & Analytics",
      iconName: "FaChartLine",
      duration: "4-12 weeks",
      mode: "Online",
      color: "red-400",
    },
    {
      title: "Cybersecurity",
      iconName: "FaShieldAlt",
      duration: "4-12 weeks",
      mode: "Online",
      color: "blue-500",
    },
    {
      title: "Desktop App Development",
      iconName: "FaDesktop",
      duration: "4-12 weeks",
      mode: "Online",
      color: "indigo-400",
    },
    {
      title: "Software Testing & QA",
      iconName: "FaCheckCircle",
      duration: "4-12 weeks",
      mode: "Online",
      color: "green-500",
    },
    {
      title: "DevOps / Cloud",
      iconName: "FaCloud",
      duration: "4-12 weeks",
      mode: "Online",
      color: "teal-400",
    },
    {
      title: "Open Source Contribution",
      iconName: "FaGithub",
      duration: "4-12 weeks",
      mode: "Online",
      color: "gray-400",
    },
    {
      title: "Game Development",
      iconName: "FaGamepad",
      duration: "4-12 weeks",
      mode: "Online",
      color: "pink-400",
    },
    {
      title: "Full Stack Development",
      iconName: "FaLayerGroup",
      duration: "6 Months",
      mode: "Online",
      color: "orange-400",
    },
  ];

  const trainings = [
    {
      title: "Resume Building",
      icon: <FaFileAlt className="text-2xl text-blue-400" />,
    },
    {
      title: "Mock Interviews",
      icon: <FaComments className="text-2xl text-green-400" />,
    },
    {
      title: "Soft Skills Training",
      icon: <FaUserTie className="text-2xl text-yellow-400" />,
    },
    {
      title: "LinkedIn Optimization",
      icon: <FaLinkedinIn className="text-2xl text-blue-500" />,
    },
  ];

  // Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Handler to scroll to popular categories section
  const handleScrollToPopularCategories = React.useCallback(() => {
    if (popularCategoriesRef.current) {
      popularCategoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  // Define rows explicitly
  const firstRow = [
    "Web Development",
    "Cybersecurity",
    "Machine Learning / AI",
    "Data Science & Analytics",
  ];
  const secondRow = [
    "Mobile App Development",
    "Desktop App Development",
    "Full Stack Development",
    "Software Testing & QA",
  ];
  const remaining = [
    "DevOps / Cloud",
    "Open Source Contribution",
    "Game Development",
  ];

  // Map titles to internship objects
  const rows = [
    firstRow.map((title) => internships.find((i) => i.title === title)),
    secondRow.map((title) => internships.find((i) => i.title === title)),
    remaining.map((title) => internships.find((i) => i.title === title)),
  ];

  const displayedInternships = showAll
    ? rows.flat()
    : rows[0].concat(rows[1].slice(0, Math.max(0, 4 - rows[0].length)));

  return (
    <>
      <Head>
        <title>Tessa Learn</title>
        <meta name="application-name" content="Tessa Learn" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-gray-800 font-inter">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Tessa Cloud Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
                <span
                  className={`text-lg font-semibold text-white ml-2 ${rubik.className}`}
                >
                  Tessa Learn
                </span>
              </div>
            </div>

            <nav className="hidden md:flex gap-6 items-center text-sm">
              <a href="#" className="hover:text-red-500 transition">
                Home
              </a>
              <a href="#courses" className="hover:text-red-500 transition">
                Courses
              </a>
              <a href="#internships" className="hover:text-red-500 transition">
                Internships
              </a>
              <a href="#placements" className="hover:text-red-500 transition">
                Placements Assistance
              </a>
              <a
                href="#about-tessa-learn"
                className="hover:text-red-500 transition"
              >
                About Us
              </a>
              <a
                href="#"
                onClick={() => setShowContact(true)}
                className="hover:text-red-500 transition"
              >
                Contact Us
              </a>
            </nav>

            <div className="flex gap-4 text-gray-400 text-lg md:text-base">
              <a
                href="https://www.facebook.com/people/Tessa-Cloud/61581878499209/?mibextid=wwXIfr&rdid=HD8KRTnU03Wf9mg8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CPK8RWDva%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/its_tessa_cloud/?igsh=dzRyaHBtY2tod3hx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/tessacloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Mobile menu button and dropdown */}
            <div className="md:hidden relative">
              <button
                aria-label="toggle mobile menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-xl"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>

              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col py-2">
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#courses"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </a>
                  <a
                    href="#internships"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Internships
                  </a>
                  <a
                    href="#placements"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Placement Assistance
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => {
                      setShowAbout(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 hover:bg-gray-800 transition"
                    onClick={() => {
                      setShowContact(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="pt-24">
          {/* About Us Popup */}
          <HydrationSafe>
            <AnimatePresence>
              {showAbout && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                  onClick={() => setShowAbout(false)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-br from-gray-900 to-black text-gray-200 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full p-8 relative"
                  >
                    <button
                      onClick={() => setShowAbout(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                      About Tessa Cloud
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Tessa Cloud builds intelligent enterprise-grade software
                      applications leveraging AI to solve complex business
                      challenges efficiently. Our solutions automate workflows,
                      enhance productivity, and empower innovation. With a focus
                      on cutting-edge technology, Tessa Cloud delivers scalable
                      and secure solutions tailored to enterprise needs.
                    </p>
                    <div className="mt-4 text-sm text-gray-400 italic">
                      “Innovate. Automate. Elevate.”
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </HydrationSafe>
          {/* Contact Us Popup */}
          <HydrationSafe>
            <AnimatePresence>
              {showContact && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                  onClick={() => setShowContact(false)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-br from-gray-900 to-black text-gray-200 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full p-8 relative"
                  >
                    <button
                      onClick={() => setShowContact(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                      Contact Tessa Cloud
                    </h3>
                    <div className="space-y-4 text-sm">
                      <p>
                        We’d love to hear from you! Reach out to us via email or
                        phone.
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@tessacloud.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          info@tessacloud.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+911234567890"
                          className="text-blue-400 hover:underline"
                        >
                          +91 12345 67890
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </HydrationSafe>
          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
            <HydrationSafe>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Explore Your Courses and Internship Opportunities
                </h1>
                <p className="mt-4 text-gray-300 max-w-xl">
                  Choose your internship duration and find the perfect learning
                  path!
                </p>
                <HydrationSafe>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                  >
                    <button
                      onClick={() => handleScrollToPopularCategories()}
                      className="px-6 py-3 rounded-md text-white bg-red-600 hover:bg-red-500 shadow-lg w-full sm:w-auto"
                    >
                      View Internships
                    </button>
                    <button
                      onClick={() => {
                        const coursesSection =
                          document.getElementById("courses");
                        if (coursesSection) {
                          coursesSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="px-6 py-3 rounded-md text-white bg-transparent border border-red-600 hover:bg-red-600/10 shadow-lg w-full sm:w-auto"
                    >
                      View Courses
                    </button>
                  </motion.div>
                </HydrationSafe>
              </motion.div>
            </HydrationSafe>
            <HydrationSafe>
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="w-full h-72 md:h-96 rounded-2xl bg-[#000000] flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src="/wmremove-transformed.png"
                    alt="Hero banner"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            </HydrationSafe>
          </section>
          {/* About Tessa Learn Section */}
          <section
            id="about-tessa-learn"
            className="max-w-7xl mx-auto px-6 py-16"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Left: Logo */}
              <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3">
                <img
                  src="AboutUs.jpg"
                  alt="Tessa Cloud Logo"
                  className="w-full h-72 md:h-96 rounded-2xl object-cover shadow-lg"
                />
              </div>
              {/* Right: Content */}
              <div className="flex-1 w-full flex flex-col justify-center items-start md:items-start">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-left">
                  About Tessa Learn
                </h2>
                <p className="text-gray-300 max-w-3xl leading-snug mb-10">
                  <strong>Tessa Learn</strong> is the learning and internship
                  platform powered by <strong>Tessa Cloud</strong>. It bridges
                  the gap between education and employability through
                  industry-relevant internships, project-based courses, and
                  guided mentorship. We focus on building technical confidence
                  and providing real-world exposure to students and young
                  professionals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-red-400">
                      Our Mission
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      To empower learners with practical knowledge, real
                      projects, and industry connections that prepare them for a
                      successful tech career.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-red-400">
                      Our Vision
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      To create a next-generation ecosystem where learning meets
                      innovation, and every student finds a pathway from
                      internship to placement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Courses Section */}
          <section id="courses" className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-center">
              Explore Our Courses
            </h2>
            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
              Learn skills that empower your career and mindset. Each course is
              crafted to connect logic with creativity — designed to help you
              grow both technically and personally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {[
                {
                  title: "React JS & Next.js",
                  iconName: "FaReact",
                  duration: "4 Weeks",
                  level: "Intermediate",
                  color: "blue-400",
                },
                {
                  title: "Python Web Development",
                  iconName: "FaPython",
                  duration: "4 Weeks",
                  level: "Intermediate",
                  color: "yellow-400",
                },
                {
                  title: "Data Science with Python",
                  iconName: "FaRobot",
                  duration: "4 Weeks",
                  level: "Intermediate",
                  color: "green-400",
                },
                {
                  title: "Machine Learning with Python",
                  iconName: "FaBrain",
                  duration: "4-6 Weeks",
                  level: "Intermediate",
                  color: "pink-400",
                },
                {
                  title: "Data Analytics with Python",
                  iconName: "FaChartLine",
                  duration: "4 Weeks",
                  level: "Beginner",
                  color: "purple-400",
                },
                {
                  title: "Data Analytics with Power BI, Tableau & Excel",
                  iconName: "FaChartBar",
                  duration: "4 Weeks",
                  level: "Beginner",
                  color: "teal-400",
                },
                {
                  title: "Full Stack Web App Development with Python",
                  iconName: "FaLayerGroup",
                  duration: "8-12 Weeks",
                  level: "Intermediate",
                  color: "orange-400",
                },
                {
                  title: "SQL for Developers",
                  iconName: "FaDatabase",
                  duration: "4 Weeks",
                  level: "Beginner",
                  color: "indigo-400",
                },
                {
                  title: "DevOps Essentials",
                  iconName: "FaCloud",
                  duration: "4 Weeks",
                  level: "Intermediate",
                  color: "cyan-400",
                },
                {
                  title: "Full Stack Web Development with Java",
                  iconName: "FaJava",
                  duration: "8-12 Weeks",
                  level: "Intermediate",
                  color: "red-400",
                },
                {
                  title: "Cloud Computing Basics",
                  iconName: "FaCloud",
                  duration: "4 Weeks",
                  level: "Beginner",
                  color: "teal-400",
                },
                {
                  title: "Cybersecurity Essentials",
                  iconName: "FaShieldAlt",
                  duration: "4 Weeks",
                  level: "Beginner",
                  color: "red-400",
                },
              ].map((course) => {
                const Icon = FaIcons[course.iconName];
                return (
                  <HydrationSafe key={course.title}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow min-h-[260px] flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {Icon && (
                          <Icon className={`text-2xl text-${course.color}`} />
                        )}
                        <div className="text-lg font-semibold">
                          {course.title}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 flex flex-col gap-2 flex-grow">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Level:</span>
                          <span>{course.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span>Online</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() =>
                            window.open(
                              "https://forms.gle/B8RZpdtVXn5NdUjy6",
                              "_blank"
                            )
                          }
                          className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white font-semibold shadow-[0_0_6px_rgba(255,0,85,0.2)] hover:shadow-[0_0_10px_rgba(255,0,85,0.3)] transition-all duration-300 hover:scale-105"
                        >
                          Enroll Now →
                        </button>
                      </div>
                    </motion.div>
                  </HydrationSafe>
                );
              })}
            </div>
          </section>
          {/* Download Brochure Section */}
          <section id="brochure" className="max-w-7xl mx-auto px-6 py-12">
            <div className="mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 p-[2px] rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-8 rounded-xl shadow-inner">
                  <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                      Download Our Brochure
                    </h2>
                    <p className="text-gray-400 mb-0 max-w-xl">
                      Get a detailed overview of Tessa Learn programs,
                      internship tracks, and placement support in our official
                      brochure.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <a
                      href="/tessa_learn_opportunities.pdf"
                      download
                      className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                      📄 Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tessa Learn Certifications Section */}
          <section id="certifications" className="max-w-7xl mx-auto px-6 py-12">
            <div className="mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 p-[2px] rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-8 rounded-xl shadow-inner">
                  <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                      Tessa Learn Certifications
                    </h2>
                    <p className="text-gray-400 mb-0 max-w-xl">
                      Every learner receives a{" "}
                      <strong>Tessa Learn Course Certificate</strong> or
                      <strong> Internship Completion Certificate</strong>{" "}
                      verified by <strong>Tessa Cloud</strong>. Each certificate
                      carries a <strong>unique verification ID</strong> that
                      companies can validate directly through Tessa Cloud’s
                      platform — ensuring trust and authenticity in every
                      credential.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <button
                      onClick={() =>
                        window.open("https://tessacloud.com/verify", "_blank")
                      }
                      className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                      View Sample Certificate →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Internship Cards */}
          <section
            id="internships"
            className="max-w-7xl mx-auto px-6 py-12"
            ref={popularCategoriesRef}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent tracking-wide text-center">
              Unlock Your Future | Explore Opportunities That Shape You
            </h2>
            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
              Every great career begins with a single step. Discover internships
              designed to fuel your curiosity, challenge your creativity, and
              launch your professional journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {displayedInternships.map((it) => {
                const IconComponent = FaIcons[it.iconName];
                return (
                  <HydrationSafe key={it.title}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-shadow min-h-[260px] flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {IconComponent && (
                          <IconComponent
                            className={`text-2xl ${
                              it.title === "Mobile App Development"
                                ? "text-purple-400"
                                : it.color === "blue-400"
                                ? "text-blue-400"
                                : it.color === "green-400"
                                ? "text-green-400"
                                : it.color === "yellow-400"
                                ? "text-yellow-400"
                                : it.color === "red-400"
                                ? "text-red-400"
                                : it.color === "blue-500"
                                ? "text-blue-500"
                                : it.color === "indigo-400"
                                ? "text-indigo-400"
                                : it.color === "green-500"
                                ? "text-green-500"
                                : it.color === "teal-400"
                                ? "text-teal-400"
                                : it.color === "gray-400"
                                ? "text-gray-400"
                                : it.color === "pink-400"
                                ? "text-pink-400"
                                : it.color === "orange-400"
                                ? "text-orange-400"
                                : "text-white"
                            }`}
                          />
                        )}
                        <div className="text-lg font-semibold">{it.title}</div>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 flex flex-col gap-2 flex-grow">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{it.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span>{it.mode}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() => setSelectedInternship(it)}
                          className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-700 via-red-500 to-gray-900 text-white font-semibold shadow-[0_0_6px_rgba(255,0,85,0.2)] hover:shadow-[0_0_10px_rgba(255,0,85,0.3)] transition-all duration-300 hover:scale-105 hover:from-gray-900 hover:to-red-700"
                        >
                          <span className="tracking-wide">View Details →</span>
                        </button>
                      </div>
                    </motion.div>
                  </HydrationSafe>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-md bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                {showAll ? "View Less ▲" : "View More ▼"}
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-10 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 p-[2px] rounded-xl shadow-lg"
            >
              <div className="bg-gray-900 p-8 rounded-xl text-white relative overflow-hidden">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent tracking-wide"
                >
                  ✨ Why Choose <span className="text-white">Tessa Learn?</span>
                </motion.h3>

                <ul className="space-y-4 text-gray-300 text-sm md:text-base relative z-10">
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaChalkboardTeacher className="text-yellow-400 text-xl" />
                    <span>
                      <strong>Hands-on Learning:</strong> Work on real projects
                      from Day 1 and build an impressive portfolio employers
                      love.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaProjectDiagram className="text-green-400 text-xl" />
                    <span>
                      <strong>Integrated Projects:</strong> Collaborate with
                      mentors and peers on live products — the ultimate skill
                      booster.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaChartLine className="text-blue-400 text-xl" />
                    <span>
                      <strong>Career Growth:</strong> From internship to
                      placement — Tessa Learn bridges the gap between learning
                      and earning.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaUserTie className="text-blue-400 text-xl" />
                    <span>
                      <strong>Placement Assistance:</strong> Backed by{" "}
                      <strong>Tessa Cloud</strong>, we provide mentorship, mock
                      interviews, and verified certificates that boost
                      employability.
                    </span>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="flex items-center gap-3"
                  >
                    <FaLightbulb className="text-pink-400 text-xl" />
                    <span>
                      <strong>Creative Edge:</strong> Learn with purpose. Build
                      with passion. Leave your digital footprint with
                      innovation.
                    </span>
                  </motion.li>
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-6 text-center text-sm md:text-base italic text-gray-400"
                >
                  “Your journey to brilliance starts here — innovate, grow, and
                  make a mark with Tessa Learn.”
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-red-400 to-yellow-300 opacity-20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-r from-pink-500 to-blue-400 opacity-20 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </section>

          {selectedInternship && (
            <HydrationSafe>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm overflow-y-auto p-4"
                style={{ WebkitOverflowScrolling: "touch" }}
                onClick={() => setSelectedInternship(null)}
              >
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-3xl w-full shadow-2xl border border-gray-700 relative"
                >
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                  >
                    ✕
                  </button>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                    {selectedInternship.title}
                  </h3>
                  {/* Render detailed content based on selected internship */}
                  {selectedInternship.title === "Web Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                        Vue
                      </p>
                      <p>
                        <strong>Backend:</strong> Node.js, Express, Django,
                        Flask
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Build a portfolio
                        website, to-do app, or blog CMS
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Mobile App Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Platforms:</strong> Android (Java/Kotlin), iOS
                        (Swift), Flutter (Dart)
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Weather app, Expense
                        tracker, Notes app
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Machine Learning / AI" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6-24 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Python, Scikit-learn,
                        TensorFlow, OpenCV
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Image classifier,
                        Chatbot, Sentiment analysis
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Data Science & Analytics" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Python, Pandas, Excel, Power BI,
                        SQL
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Analyze a dataset, Sales
                        dashboard, Data visualization reports
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Cybersecurity" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Topics:</strong> Network security, OWASP Top 10,
                        Ethical Hacking (Kali Linux), Web vulnerabilities
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Basic penetration
                        testing on a test website, password strength checker
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Desktop App Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tech:</strong> Java (Swing/JavaFX), Python
                        (Tkinter/PyQt), Electron.js
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Calculator, Notepad,
                        File Organizer
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Software Testing & QA" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Types:</strong> Manual Testing, Automation
                        (Selenium, Postman)
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Create test cases for a
                        small app, automate login flow testing
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "DevOps / Cloud" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Git, Docker, CI/CD, AWS, Azure,
                        Google Cloud
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Dockerize a small app,
                        set up CI with GitHub Actions
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Open Source Contribution" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Platforms:</strong> GitHub, GitLab
                      </p>
                      <p>
                        <strong>Skills:</strong> Git, issue tracking, pull
                        requests
                      </p>
                      <p>
                        <strong>Project Idea:</strong> Contribute documentation
                        or code to beginner-friendly repositories
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Game Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 4-12 weeks |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Tools:</strong> Unity (C#), Godot, Pygame
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Simple 2D games like
                        Pong, Breakout, or Platformer
                      </p>
                    </div>
                  )}
                  {selectedInternship.title === "Full Stack Development" && (
                    <div className="text-gray-300 space-y-4 text-sm">
                      <p>
                        <strong>Duration:</strong> 6 Months |{" "}
                        <strong>Mode:</strong> Online
                      </p>
                      <p>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                        Vue
                      </p>
                      <p>
                        <strong>Backend:</strong> Node.js, Express, Django,
                        Flask
                      </p>
                      <p>
                        <strong>Project Ideas:</strong> Build a full-stack
                        project (Portfolio, Blog, To-do app)
                      </p>
                    </div>
                  )}
                  <div className="mt-6 text-right">
                    <button
                      onClick={() =>
                        window.open(
                          "https://forms.gle/B8RZpdtVXn5NdUjy6",
                          "_blank"
                        )
                      }
                      className="px-5 py-2.5 rounded-md bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                    >
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </HydrationSafe>
          )}

          {/* Training & Placement */}
          <section id="placements" className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6">
              Placement Assistance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainings.map((t) => (
                <HydrationSafe key={t.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-5 rounded-xl bg-gradient-to-tr from-black to-gray-900 border border-gray-700 text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-3">
                      {t.icon}
                    </div>
                    <div className="font-semibold">{t.title}</div>
                    <p className="text-sm text-gray-400 mt-2">
                      Practical sessions and expert mentors to boost your
                      career.
                    </p>
                  </motion.div>
                </HydrationSafe>
              ))}
            </div>
          </section>
        </main>

        {/* Contact Form Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl mt-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
          <p className="text-center text-gray-400 mb-12">
            Have ideas? Let’s talk and build something great together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                Address
              </h3>
              <p className="text-gray-300">
                #979/5, Narayana Swamy Compound, 5th Cross, Sampige Road, K R
                Puram, Hassan, Karnataka, India - 573201
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2 text-red-400">
                Email
              </h3>
              <p className="text-gray-300">
                <a
                  href="mailto:info@tessacloud.com"
                  className="hover:text-red-400 transition"
                >
                  info@tessacloud.com
                </a>
              </p>
            </div>
            {/* Responsive Zoho Form Embed */}
            <ZohoContactFormEmbed />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Internships</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Web Dev</li>
                <li>AI/ML</li>
                <li>Data Science</li>
                <li>Cybersecurity</li>
                <li>SQL</li>
                <li>Cloud</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Courses</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Mobile App Development</li>
                <li>Full Stack Development</li>
                <li>AI/ML</li>
                <li>Desktop App Development</li>
                <li>Cybersecurity</li>
                <li>Software Testing & QA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Placement Assistance</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Mentorship</li>
                <li>Resume Building</li>
                <li>Mock Interviews</li>
                <li>LinkedIn Optimization</li>
                <li>Career Guidance</li>
                <li>Soft Skills Training</li>
              </ul>
            </div>
            <div className="text-right lg:text-right sm:text-left">
              <h3 className="font-semibold mb-2">About & Contact</h3>
              <p className="text-sm text-gray-400">info@tessacloud.com</p>
              <div className="flex justify-end sm:justify-start lg:justify-end gap-3 mt-2 text-gray-400 text-xl">
                <a
                  href="https://www.facebook.com/people/Tessa-Cloud/61581878499209/?mibextid=wwXIfr&rdid=HD8KRTnU03Wf9mg8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CPK8RWDva%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/its_tessa_cloud/?igsh=dzRyaHBtY2tod3hx&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/tessacloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 py-6">
            © 2025 Tessa Cloud | Internship Platform. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

function ZohoContactFormEmbed() {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    // Check screen width only on client side
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // For mobile view, dynamically inject full-height Zoho form
    if (isDesktop === false) {
      const container = document.getElementById(
        "zf_div_0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0"
      );
      if (container && container.children.length === 0) {
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://forms.zohopublic.in/tessacloud1/form/ContactUs/formperma/0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0?zf_rszfm=1";
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "80vh";
        iframe.style.overflowY = "auto";
        iframe.style.WebkitOverflowScrolling = "touch";
        iframe.style.borderRadius = "16px";
        iframe.style.margin = "0";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
      }
    }
  }, [isDesktop]);

  // Wait until we know if it's desktop or mobile
  if (isDesktop === null) return null;

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
      <div
        id="zf_div_0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0"
        style={{ width: "100%" }}
      ></div>

      {/* Desktop view only */}
      {isDesktop && (
        <iframe
          src="https://forms.zohopublic.in/tessacloud1/form/ContactUs/formperma/0qrgWzTrDHLuSZM1G2wlEdB1dStYFoMV3V3XYRodGC0?zf_rszfm=1"
          title="Contact Us"
          aria-label="Contact Us"
          style={{
            border: "none",
            width: "100%",
            height: "400px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
          }}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
