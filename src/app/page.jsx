"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaClipboardList,
  FaCogs,
  FaHandshake,
  FaLaptopCode,
  FaUserTie,
  FaUsersCog,
  FaChalkboardTeacher,
} from "react-icons/fa";
import {
  MdCastForEducation,
  MdEngineering,
  MdBusinessCenter,
  MdWorkOutline,
  MdPeopleAlt,
} from "react-icons/md";
import {
  HiOutlinePresentationChartBar,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { FaUniversity, FaBrain, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SwiperCore from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import dynamic from "next/dynamic";
const ClientsSection = dynamic(() => import("./ClientsSection"), {
  ssr: false,
});

// Responsive AboutUs component (3-Column Credibility Layout, mobile-friendly)
const AboutUs = () => {
  // Responsive helpers
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isBelow768 = windowWidth < 768;
  const isBelow480 = windowWidth < 480;

  // Style helpers for card
  const getColStyle = () => {
    if (isBelow480) {
      return {
        width: "95%",
        margin: "0 auto 1.5rem",
        borderRadius: "15px",
        padding: "12px",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        boxShadow: "none",
        flex: "unset",
        textAlign: "center",
        display: "block",
      };
    }
    if (isBelow768) {
      return {
        width: "90%",
        margin: "0 auto 1.5rem",
        borderRadius: "20px",
        padding: "15px",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        boxShadow: "none",
        flex: "unset",
        textAlign: "center",
        display: "block",
      };
    }
    // Desktop
    return {
      flex: "1 1 300px",
      background: "#ffffff",
      position: "relative",
      borderRadius: "20px",
      padding: "20px",
      overflow: "hidden",
      boxShadow: "none",
      minWidth: 260,
      maxWidth: 370,
      textAlign: "left",
      display: "block",
    };
  };
  // Style helpers for image
  const getImgSize = () => {
    if (isBelow480) return { width: 80, height: 80 };
    if (isBelow768) return { width: 90, height: 90 };
    return { width: 100, height: 100 };
  };
  // Style helpers for text
  const getFontSize = () => {
    if (isBelow480) return "0.9rem";
    if (isBelow768) return "0.95rem";
    return "1.05rem";
  };
  const getH3FontSize = () => {
    if (isBelow480) return "1.05rem";
    if (isBelow768) return "1.1rem";
    return "1.15rem";
  };
  // AboutUs cards data
  const aboutCards = [
    {
      img: "/a1.png",
      alt: "Who We Are",
      title: "Who We Are",
      desc: "10 SECONDS is a new-age training and staffing organization that unifies learning, assessment, and recruitment under one roof. We partner with colleges, universities, and corporates to create career-ready graduates who meet real industry expectations.",
    },
    {
      img: "/a2.png",
      alt: "What We Believe",
      title: "What We Believe",
      desc: "It takes just ten seconds to make a strong first impression. Our programs ensure every student, trainer, and partner institution makes theirs count.",
    },
    {
      img: "/a3.png",
      alt: "Our Journey",
      title: "Our Journey",
      desc: "From a single classroom in 2003 to a statewide network of 60 partner institutions, we’ve grown through innovation, trust, and measurable outcomes. Today, our digital learning platform and staffing services make us one of Karnataka’s most trusted campus-to-corporate partners.",
    },
  ];
  return (
    <section
      id="about"
      className="about-section"
      style={{
        backgroundColor: "#e6f4ff",
        width: "100%",
        padding: isBelow480
          ? "40px 5px"
          : isBelow768
          ? "45px 10px"
          : "60px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: isBelow480 ? "1.6rem" : isBelow768 ? "2rem" : "2.5rem",
          fontWeight: "800",
          color: "#004aad",
          marginBottom: "2rem",
        }}
      >
        🌟 ABOUT US
      </h2>

      <blockquote
        style={{
          marginTop: "2.5rem",
          fontStyle: "italic",
          fontWeight: "600",
          color: "#004aad",
          fontSize: isBelow480 ? "1.05rem" : isBelow768 ? "1.15rem" : "1.3rem",
          marginBottom: "1.5rem",
        }}
      >
        “We don’t just teach. We transform potential into performance.”
      </blockquote>

      <div
        className="about-columns"
        style={{
          display: "flex",
          flexDirection: isBelow768 ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: isBelow480 ? "1.1rem" : isBelow768 ? "1.5rem" : "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {aboutCards.map((card, idx) => (
          <div key={card.title} className="about-col" style={getColStyle()}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Image
                src={card.img}
                alt={card.alt}
                width={getImgSize().width}
                height={getImgSize().height}
                style={{
                  animation: "floatImage 4s ease-in-out infinite",
                  position: "relative",
                  zIndex: 1,
                  width: getImgSize().width,
                  height: getImgSize().height,
                  objectFit: "contain",
                }}
              />
            </div>
            <h3
              style={{
                color: "#007bff",
                fontWeight: "700",
                position: "relative",
                zIndex: 1,
                fontSize: getH3FontSize(),
                marginBottom: isBelow768 ? "0.4rem" : "0.7rem",
                textAlign: "center",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                color: "#333",
                lineHeight: "1.7",
                fontSize: getFontSize(),
                position: "relative",
                zIndex: 1,
                textAlign: isBelow768 ? "center" : "left",
                margin: 0,
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      {/* Global keyframes for AboutUs animations */}
      <style jsx global>{`
        @keyframes floatImage {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

SwiperCore.use([Autoplay, FreeMode]);

const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "LMS Platform", href: "#lms-platform" },
  { name: "Our Clients", href: "#clients" },
  { name: "Our Journey", href: "#journey" },
  { name: "Vision and Future", href: "#vision-future" },
  { name: "Contact Us", href: "#contact" },
];

export default function Page() {
  const pathname = usePathname();
  const [showPolicy, setShowPolicy] = useState(false);
  // Hydration-safe flag
  const [hydrated, setHydrated] = useState(false);
  // Responsive state
  const [windowWidth, setWindowWidth] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleOrientationChange = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);
    handleResize();
    // Smooth scroll for anchor links (all # links)
    // Custom slow smooth scroll
    function smoothScrollTo(targetY, duration = 900) {
      const startY = window.scrollY || window.pageYOffset;
      const diff = targetY - startY;
      let start;
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
      function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        let progress = Math.min(elapsed / duration, 1);
        progress = easeInOutQuad(progress);
        window.scrollTo(0, startY + diff * progress);
        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    }

    const handleAnchorClick = (e) => {
      // Only intercept anchor links with href="#section" (not external or just "#")
      const anchor = e.target.closest('a[href^="#"]');
      if (
        anchor &&
        anchor.getAttribute("href") &&
        anchor.getAttribute("href").startsWith("#") &&
        anchor.getAttribute("href").length > 1
      ) {
        const sectionId = anchor.getAttribute("href").slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          e.preventDefault();
          // Compute offset for fixed header (if any)
          let offset = 0;
          const header = document.querySelector(".header");
          if (header) {
            offset = header.offsetHeight || 0;
          }
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          const targetY = Math.max(sectionTop - offset, 0);
          smoothScrollTo(targetY, 900);
          // Optionally update the URL hash
          window.history.replaceState(null, "", `#${sectionId}`);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Stats Counter Animation
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    const quote = document.querySelector(".lms-quote");
    if (!quote) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            quote.classList.add("visible");
            const lines = quote.querySelectorAll("p");
            lines.forEach((line, index) => {
              line.style.animationDelay = `${index * 0.6}s`;
              line.style.animation = "fadeLine 0.8s ease forwards";
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(quote);

    return () => {
      if (observer && quote) observer.unobserve(quote);
    };
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    const counters = document.querySelectorAll(".stat-number");
    let hasAnimated = false;

    function animateCounters() {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        const duration = 4000; // duration of 4 seconds for animation
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.floor(progress * target);
          const textElement = counter.querySelector(".count-text");

          if (textElement) {
            textElement.textContent = value.toLocaleString();
          }

          // Removed background color animation for .stat-number
          // counter.style.background = `rgb(${red}, ${green}, 0)`;
          // counter.style.WebkitBackgroundClip = "text";
          // counter.style.WebkitTextFillColor = "transparent";

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            // Final state + pulse bounce
            if (textElement) textElement.textContent = target.toLocaleString();
            counter.style.background = "none";
            counter.style.WebkitTextFillColor = "inherit";
            counter.classList.add("animate-finish");
          }
        }

        requestAnimationFrame(updateCounter);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    // Find the section containing the stats cards
    // Try both .stats-section and .lms-section for robustness
    let statsSection = document.querySelector(".stats-section");
    if (!statsSection) statsSection = document.querySelector(".lms-section");
    if (statsSection) observer.observe(statsSection);
  }, [hydrated]);

  useEffect(() => {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    let index = 0;

    const changeSlide = () => {
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      index = (index + 1) % slides.length;
    };

    const interval = setInterval(changeSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  // Track > Assign > Achieve Tabs
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    const tabs = document.querySelectorAll(".taa-tab");
    const panes = document.querySelectorAll(".taa-pane");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        panes.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.target)?.classList.add("active");
      });
    });
  }, [hydrated]);

  // Consulting & Career Points Animation
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    const points = document.querySelectorAll(".consult-point, .career-point");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    points.forEach((el) => observer.observe(el));
  }, [hydrated]);

  // Clients Section Swiper Initialization (client-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Defer Swiper import until client hydration
    import("swiper")
      .then(({ default: Swiper }) => {
        const sliderElement = document.querySelector(".clients-slider");
        if (!sliderElement) return;

        // Destroy existing instance if present
        if (sliderElement.swiper) {
          sliderElement.swiper.destroy(true, true);
        }

        new Swiper(sliderElement, {
          direction: "vertical",
          slidesPerView: 5,
          spaceBetween: 25,
          loop: true,
          speed: 4000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          allowTouchMove: false,
          freeMode: true,
          observer: true,
          observeParents: true,
        });
      })
      .catch((err) => console.error("Swiper init failed:", err));
  }, []);

  // Responsive classes/logic
  const isBelow992 = windowWidth < 992;
  const isBelow768 = windowWidth < 768;
  const isBelow480 = windowWidth < 480;
  const isAtOrBelow1024 = windowWidth <= 1024; // Tablets now use mobile-style hamburger menu (<= includes 1024px landscape)

  // Max-width wrapper style for central alignment
  const maxWidthWrapperStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  };

  if (!hydrated) return null;
  return (
    <>
      <header
        className="header"
        style={{
          background: "#fff",
          boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
          width: "100%",
          height: "70px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div
          className="header-container"
          style={{
            ...maxWidthWrapperStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isBelow768 ? "8px 18px" : "14px 40px",
            position: "relative",
          }}
        >
          <div
            className="header-left"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/logo.png"
              alt="10Seconds Logo"
              width={isBelow480 ? 110 : isBelow768 ? 140 : 180}
              height={isBelow480 ? 35 : isBelow768 ? 45 : 55}
              className="header-logo"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          {/* Hamburger for mobile and tablets */}
          {isAtOrBelow1024 ? (
            <div
              className="mobile-nav-toggle"
              style={{
                display: "block",
                cursor: "pointer",
                zIndex: 1002,
                marginLeft: "auto",
              }}
              onClick={() => setNavOpen((open) => !open)}
              aria-label={navOpen ? "Close navigation" : "Open navigation"}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 28,
                    height: 4,
                    background: "#007bff",
                    margin: "3px 0",
                    borderRadius: 2,
                    transition: "0.3s",
                    transform: navOpen
                      ? "rotate(45deg) translate(5px, 6px)"
                      : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 28,
                    height: 4,
                    background: "#007bff",
                    margin: "3px 0",
                    borderRadius: 2,
                    opacity: navOpen ? 0 : 1,
                    transition: "0.3s",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 28,
                    height: 4,
                    background: "#007bff",
                    margin: "3px 0",
                    borderRadius: 2,
                    transition: "0.3s",
                    transform: navOpen
                      ? "rotate(-45deg) translate(5px, -6px)"
                      : "none",
                  }}
                />
              </div>
            </div>
          ) : null}
          {/* Navigation */}
          <div
            className="header-right"
            style={{
              flex: 1,
              display: isAtOrBelow1024 ? "none" : "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <nav className="nav">
              <ul
                className="nav-links"
                style={{
                  display: "flex",
                  gap: "1.7rem",
                  alignItems: "center",
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    {link.name === "Contact Us" ? (
                      <a href={link.href} className="contact-button">
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className={pathname === link.href ? "active-link" : ""}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Mobile Nav Dropdown - Tessa Cloud style */}
          {isAtOrBelow1024 && (
            <div
              className="mobile-dropdown"
              style={{
                position: "absolute",
                top: "72px",
                right: "5%",
                width: "90%",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                transition: "all 0.4s ease-in-out",
                maxHeight: navOpen ? "420px" : "0",
                opacity: navOpen ? 1 : 0,
                transform: navOpen ? "translateY(0)" : "translateY(-10px)",
                zIndex: 999,
              }}
            >
              {/* Blue X close icon */}
              <button
                onClick={() => setNavOpen(false)}
                aria-label="Close navigation"
                style={{
                  position: "absolute",
                  top: 10,
                  right: 14,
                  background: "none",
                  border: "none",
                  fontSize: "1.9rem",
                  color: "#004aad",
                  cursor: "pointer",
                  zIndex: 1001,
                  padding: 0,
                  lineHeight: 1,
                  fontWeight: 700,
                  display: navOpen ? "block" : "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#007cf0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#004aad")}
              >
                ×
              </button>
              <ul
                style={{
                  listStyle: "none",
                  padding: "20px 18px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  textAlign: "center",
                }}
              >
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setNavOpen(false)}
                      style={{
                        color: "#004aad",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "block",
                        padding: "6px 0",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#007cf0")}
                      onMouseLeave={(e) => (e.target.style.color = "#004aad")}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      <main
        className="main"
        style={{
          minHeight: "60vh",
          background: "#f7fbff",
          paddingTop: "70px",
        }}
      >
        <section id="hero" className="hero">
          <div
            className="hero-content"
            style={{
              ...maxWidthWrapperStyle,
              paddingLeft: isBelow768 ? "18px" : "40px",
              paddingRight: isBelow768 ? "18px" : "40px",
            }}
          >
            <div
              className="hero-text"
              style={{
                fontSize: isBelow480 ? undefined : undefined,
                textAlign: isBelow992 ? "center" : "left",
                marginBottom: isBelow992 ? "2.5rem" : 0,
                marginRight: isBelow992 ? 0 : "2.5rem",
                maxWidth: isBelow992 ? "100%" : 540,
                padding: isBelow480 ? "0 0.2rem" : isBelow768 ? "0 0.7rem" : 0,
              }}
            >
              <h1
                style={{
                  fontSize: isBelow480
                    ? "1.55rem"
                    : isBelow768
                    ? "2.1rem"
                    : isBelow992
                    ? "2.6rem"
                    : "3rem",
                  fontFamily: "'Poppins', 'Inter', sans-serif'",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "#0a1a3c",
                  marginBottom: isBelow480 ? "0.65rem" : "1.1rem",
                  lineHeight: isBelow480 ? "1.23" : "1.13",
                }}
              >
                From Campus to Corporate — in Just <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #41a2ef, #1463be)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Poppins', 'Inter', sans-serif'",
                    fontWeight: 900,
                    letterSpacing: "-0.5px",
                    fontSize: isBelow480
                      ? "1.25em"
                      : isBelow768
                      ? "1.18em"
                      : "1.1em",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  10 SECONDS
                </span>
              </h1>
              <h3
                style={{
                  fontSize: isBelow480
                    ? "1rem"
                    : isBelow768
                    ? "1.13rem"
                    : isBelow992
                    ? "1.22rem"
                    : "1.3rem",
                  fontFamily: "'Inter', 'Poppins', sans-serif'",
                  fontWeight: 700,
                  color: "#000000",
                  lineHeight: "1.6",
                  letterSpacing: "0.2px",
                  marginBottom: isBelow480 ? "0.8rem" : "1.2rem",
                }}
              >
                We’re an employability ecosystem empowering students,
                institutions, and recruiters through training, technology, and
                talent solutions.
              </h3>
              <a
                href="#quick-summary"
                className="hero-btn"
                style={{
                  padding: isBelow480
                    ? "0.9rem 0"
                    : isBelow768
                    ? "0.85rem 2.2rem"
                    : "1rem 2.8rem",
                  fontSize: isBelow480 ? "1.05rem" : "1.18rem",
                  fontWeight: 700,
                  borderRadius: 10,
                  display: "block",
                  width: isBelow480 ? "100%" : "auto",
                  margin: isBelow992 ? "0 auto" : "0",
                  backgroundColor: "#1463be",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  textAlign: "center",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0f4c94";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1463be";
                }}
              >
                Get Started Now
              </a>
            </div>
            <div
              className="hero-image"
              style={{
                width: isBelow768 ? "75%" : "100%",
                maxWidth: isBelow992 ? "480px" : "550px",
                minWidth: 0,
                padding: isBelow480 ? "0 0.2rem" : isBelow768 ? "0 0.7rem" : 0,
              }}
            >
              <Image
                src="/h.png"
                alt="A professional graphic related to career success"
                width={
                  isBelow480 ? 220 : isBelow768 ? 280 : isBelow992 ? 340 : 550
                }
                height={
                  isBelow480 ? 160 : isBelow768 ? 180 : isBelow992 ? 210 : 400
                }
                className="hero-main-image"
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        <section id="quick-summary" className="quick-summary">
          <div
            className="quick-summary-wrapper"
            style={{
              ...maxWidthWrapperStyle,
              paddingLeft: isBelow768 ? "18px" : "40px",
              paddingRight: isBelow768 ? "18px" : "40px",
            }}
          >
            {/* Left side image */}
            <div className="quick-summary-image">
              <Image
                src="/imageq.png"
                alt="Training, Technology, Talent"
                className="summary-image"
                width={600}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Separator between image and cards */}
            <hr className="quick-summary-separator" />

            {/* Right side cards */}
            <div className="quick-summary-cards">
              {/* Card 1 */}
              <div className="summary-card">
                <h2>Training That Transforms</h2>
                <p>
                  Aptitude, Coding, and Soft-Skill programs built for real
                  placements.
                </p>
              </div>

              {/* Card 2 */}
              <div className="summary-card">
                <h2>Technology That Tracks</h2>
                <p>
                  LMS with analytics, assessments, and recruiter-benchmarked
                  tests.
                </p>
              </div>

              {/* Card 3 */}
              <div className="summary-card">
                <h2>Talent That Fits</h2>
                <p>
                  Staffing and consulting services connecting pre-trained
                  candidates with leading corporates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          style={{
            backgroundColor: "#e6f4ff",
            minWidth: "100vw",
            minHeight: "100vh",
            paddingLeft: isBelow768 ? "18px" : "40px",
            paddingRight: isBelow768 ? "18px" : "40px",
            paddingTop: isBelow768 ? undefined : undefined,
            paddingBottom: isBelow768 ? undefined : undefined,
            textAlign: "center",
          }}
        >
          <AboutUs />
        </section>
        {/* ======= Services Section ======= */}
        <section
          id="services"
          className="services-section"
          style={{ background: "#fff", width: "100%" }}
        >
          <div
            className="services-container"
            data-aos="fade-up"
            style={{
              ...maxWidthWrapperStyle,
              paddingLeft: isBelow768 ? "18px" : "40px",
              paddingRight: isBelow768 ? "18px" : "40px",
              paddingTop: isBelow480 ? "10px" : isBelow768 ? "20px" : "35px",
              paddingBottom: isBelow480 ? "10px" : isBelow768 ? "20px" : "35px",
            }}
          >
            <header
              className="services-header"
              style={{
                textAlign: "center",
                marginBottom: isBelow480 ? "0.8rem" : "1.2rem",
              }}
            >
              <h2
                style={{
                  fontSize: isBelow480
                    ? "1.6rem"
                    : isBelow768
                    ? "1.8rem"
                    : "2rem",
                  fontWeight: 800,
                  color: "#004aad",
                  margin: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "7px",
                  paddingBottom: "2rem",
                  paddingTop: "0.5rem",
                }}
              >
                <Image
                  src="/service.png"
                  alt="Services Icon"
                  width={isBelow480 ? 28 : isBelow768 ? 34 : 40}
                  height={isBelow480 ? 28 : isBelow768 ? 34 : 40}
                  style={{ objectFit: "contain" }}
                />
                SERVICES
              </h2>
            </header>

            <div
              className="services-grid"
              style={{
                display: "grid",
                gridTemplateColumns: isBelow480
                  ? "1fr"
                  : isBelow768
                  ? "repeat(2, 1fr)"
                  : "repeat(auto-fit, minmax(300px, 1fr))",
                gap: isBelow480 ? "1rem" : isBelow768 ? "1.3rem" : "1.8rem",
                marginTop: isBelow480 ? "0.6rem" : "1.2rem",
                marginBottom: isBelow480 ? "0.8rem" : "1rem",
              }}
            >
              {[
                {
                  title: "Pre-Placement Training",
                  icon: (
                    <HiOutlinePresentationChartBar color="#007cf0" size={50} />
                  ),
                  desc: "Aptitude (Quant, Reasoning, Verbal) | Soft Skills & Communication | Mock Interviews | Competitive Coding (C, C++, DSA).",
                  outcome:
                    "Higher aptitude clearance, improved recruiter alignment, and better first-round success.",
                },
                {
                  title: "Recruitment Readiness & Campus Programs",
                  icon: <MdCastForEducation color="#00bcd4" size={50} />,
                  desc: "Company-specific test prep, GD and HR interview coaching, resume + LinkedIn grooming, and career mapping.",
                  outcome:
                    "Students ready for Cognizant, SAP Labs, TCS, Infosys & top recruiters.",
                },
                {
                  title: "Technical Upskilling & Projects",
                  icon: <MdEngineering color="#00d1db" size={50} />,
                  desc: "C, C++, Java, Python | IoT & Embedded Systems | Mini & Major Industry Projects.",
                  outcome:
                    "Hands-on, project-based learning that mirrors real corporate environments.",
                },
                {
                  title: "Corporate Training & Team Development",
                  icon: <MdPeopleAlt color="#ff8800" size={50} />,
                  desc: "Leadership, Etiquette, Workplace Communication, and Time Management Modules for organizations and faculty.",
                  outcome: "Upskilled, motivated, and collaborative teams.",
                },
                {
                  title: "Staffing & Talent Consulting (NEW)",
                  icon: <MdBusinessCenter color="#004aad" size={50} />,
                  desc: "End-to-end recruitment support for companies hiring pre-trained talent. We handle sourcing, screening, onboarding, and payroll — powered by our LMS insights. Our staffing model is not transactional. It’s ecosystem-driven.",
                  outcome:
                    "Faster hiring cycles, better retention, zero bench cost.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="service-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: "12px",
                    padding: isBelow480 ? "14px" : isBelow768 ? "18px" : "20px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    textAlign: "center",
                    margin: "0 auto",
                    width: isBelow992 ? "100%" : "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(0,124,240,0.12), rgba(0,124,240,0.28))",
                      borderRadius: "50%",
                      padding: isBelow480
                        ? "16px"
                        : isBelow768
                        ? "18px"
                        : "22px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "12px",
                      boxShadow: "inset 0 0 10px rgba(0,124,240,0.1)",
                      height: isBelow480
                        ? "65px"
                        : isBelow768
                        ? "75px"
                        : "85px",
                      width: isBelow480 ? "65px" : isBelow768 ? "75px" : "85px",
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      size: isBelow480 ? 32 : isBelow768 ? 42 : 52,
                      style: { transform: "rotate(0deg)" },
                    })}
                  </div>

                  <h3
                    style={{
                      color: "#007bff",
                      marginBottom: "6px",
                      fontWeight: 700,
                      fontSize: isBelow480
                        ? "1rem"
                        : isBelow768
                        ? "1.05rem"
                        : "1.15rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#444",
                      lineHeight: "1.5",
                      fontSize: isBelow480
                        ? "0.9rem"
                        : isBelow768
                        ? "0.95rem"
                        : "1rem",
                      margin: "0.3rem 0",
                    }}
                  >
                    {item.desc}
                  </p>

                  <p
                    style={{
                      marginTop: "6px",
                      color: "#003366",
                      fontSize: isBelow480
                        ? "0.9rem"
                        : isBelow768
                        ? "0.95rem"
                        : "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <strong>Outcome:</strong> {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ======= LMS PLATFORM Section ======= */}
        <section
          id="lms-platform"
          className="lms-section"
          style={{ background: "#f7fbff", width: "100%" }}
        >
          <div
            className="lms-container"
            style={{
              ...maxWidthWrapperStyle,
              paddingLeft: isBelow768 ? "18px" : "40px",
              paddingRight: isBelow768 ? "18px" : "40px",
              paddingTop: isBelow480 ? "18px" : isBelow768 ? "30px" : "50px",
              paddingBottom: isBelow480 ? "18px" : isBelow768 ? "30px" : "50px",
            }}
          >
            {/* LMS Title Centered Above Both Sides */}
            <header
              className="lms-header"
              style={{
                textAlign: "center",
                marginBottom: isBelow480
                  ? "1.3rem"
                  : isBelow768
                  ? "1.8rem"
                  : "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: isBelow480 ? "0.6rem" : "0.8rem",
                }}
              >
                <Image
                  src="/learning-management-system.png"
                  alt="LMS Icon"
                  width={isBelow480 ? 26 : isBelow768 ? 34 : 42}
                  height={isBelow480 ? 26 : isBelow768 ? 34 : 42}
                  style={{ objectFit: "contain" }}
                />
                <h2
                  style={{
                    color: "#004aad",
                    fontWeight: "800",
                    fontSize: isBelow480
                      ? "1.35rem"
                      : isBelow768
                      ? "1.8rem"
                      : "2.3rem",
                    letterSpacing: "1px",
                    margin: 0,
                  }}
                >
                  LMS PLATFORM
                </h2>
              </div>
              {/* Centered subtitle below title */}
              <p
                style={{
                  color: "#222",
                  fontWeight: 500,
                  fontSize: isBelow480
                    ? "0.99rem"
                    : isBelow768
                    ? "1.02rem"
                    : "1.11rem",
                  margin: 0,
                  marginTop: isBelow480 ? "0.8rem" : "1.2rem",
                  marginBottom: isBelow480 ? "1.1rem" : "1.5rem",
                  lineHeight: "1.6",
                  maxWidth: 600,
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Our in-house Learning Management System connects learners,
                trainers, and recruiters on one platform.
              </p>
            </header>
            <div
              className="lms-flex"
              style={{
                display: "flex",
                flexDirection: isBelow992 ? "column" : "row",
                gap: isBelow480 ? "1.2rem" : isBelow768 ? "2rem" : "3.5rem",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              {/* Left Side: LMS image */}
              <div
                className="lms-image"
                style={{
                  flex: isBelow992 ? "unset" : "1 1 48%",
                  maxWidth: isBelow992 ? "100%" : "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: isBelow992 ? "2rem" : 0,
                }}
              >
                <Image
                  src="/lms-1.png"
                  alt="LMS Platform"
                  width={600}
                  height={100}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: isBelow992 ? "auto" : "100%",
                    maxHeight: isBelow480
                      ? "220px"
                      : isBelow768
                      ? "320px"
                      : "420px",
                    borderRadius: "18px",
                    // Removed background and boxShadow
                    transform:
                      "perspective(1000px) rotateY(10deg) rotateX(5deg)",
                    filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.25))",
                  }}
                  priority
                />
              </div>

              {/* Right Side: Content grid */}
              <div
                className="lms-content"
                style={{
                  flex: isBelow992 ? "unset" : "1 1 52%",
                  maxWidth: isBelow992 ? "100%" : "52%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginBottom: isBelow480 ? "0.9rem" : "1.2rem",
                  }}
                >
                  <a
                    href="https://learning.10seconds.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(90deg, #007cf0, #00dfd8)",
                      color: "#fff",
                      padding: "16px 0",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: isBelow480 ? "0.97rem" : "1.07rem",
                      textDecoration: "none",
                      display: "block",
                      width: isBelow480 ? "100%" : isBelow768 ? "100%" : "100%",
                      alignSelf: "flex-end",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,124,240,0.13)",
                      transition: "background 0.2s, box-shadow 0.2s",
                      marginBottom: "1.5rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(90deg, #00dfd8, #007cf0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0,124,240,0.23)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(90deg, #007cf0, #00dfd8)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 8px rgba(0,124,240,0.13)";
                    }}
                  >
                    learning.10seconds.co.in
                  </a>
                </div>
                {/* Cards Grid */}
                <div
                  className="lms-cards-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: isBelow600()
                      ? "1fr"
                      : isBelow992
                      ? "1fr"
                      : "1fr 1fr",
                    gridTemplateRows: isBelow600()
                      ? "repeat(5, auto)"
                      : isBelow992
                      ? "repeat(5, auto)"
                      : "repeat(2, 1fr)",
                    gap: isBelow480
                      ? "0.9rem"
                      : isBelow768
                      ? "1.15rem"
                      : "1.6rem",
                    marginBottom: isBelow480 ? "1.1rem" : "1.7rem",
                    alignItems: "stretch",
                  }}
                >
                  {/* Row 1 */}
                  <div
                    className="lms-card"
                    style={lmsCardStyle(isBelow480, isBelow768)}
                  >
                    <h3 style={lmsCardH3Style(isBelow480, "#007bff")}>
                      Real-time Analytics &amp; Leaderboards
                    </h3>
                    <p style={lmsCardPStyle(isBelow480)}>
                      Instantly track progress, rankings, and performance.
                    </p>
                  </div>
                  <div
                    className="lms-card"
                    style={lmsCardStyle(isBelow480, isBelow768)}
                  >
                    <h3 style={lmsCardH3Style(isBelow480, "#00a859")}>
                      MCQ + Coding Assessments
                    </h3>
                    <p style={lmsCardPStyle(isBelow480)}>
                      Assess every skill: technical, aptitude, and code.
                    </p>
                  </div>
                  {/* Row 2 (3 cards) */}
                  <div
                    className="lms-card"
                    style={{
                      ...lmsCardStyle(isBelow480, isBelow768),
                      gridColumn:
                        isBelow600() || isBelow992 ? "auto" : "1 / span 1",
                    }}
                  >
                    <div className="stat-number" data-target="50000">
                      <h3 style={lmsCardH3Style(isBelow480, "#004aad")}>
                        <span className="count-text">0</span>+
                      </h3>
                    </div>
                    <p style={lmsCardPStyle(isBelow480)}>Active Users</p>
                  </div>

                  <div
                    className="lms-card"
                    style={lmsCardStyle(isBelow480, isBelow768)}
                  >
                    <div className="stat-number" data-target="250">
                      <h3 style={lmsCardH3Style(isBelow480, "#ff8800")}>
                        <span className="count-text">0</span>+
                      </h3>
                    </div>
                    <p style={lmsCardPStyle(isBelow480)}>
                      Mock &amp; Company-Specific Tests
                    </p>
                  </div>

                  <div
                    className="lms-card"
                    style={lmsCardStyle(isBelow480, isBelow768)}
                  >
                    <div className="stat-number" data-target="100">
                      <h3 style={lmsCardH3Style(isBelow480, "#00bcd4")}>
                        <span className="count-text">0</span>+
                      </h3>
                    </div>
                    <p style={lmsCardPStyle(isBelow480)}>Video Tutorials</p>
                  </div>
                  {/* New Card: Personalized, Data-Driven & Measurable */}
                  <div
                    className="lms-card"
                    style={{
                      ...lmsCardStyle(isBelow480, isBelow768),
                      // For grid layout, put beside Video Tutorials
                      gridColumn:
                        isBelow600() || isBelow992 ? "auto" : "2 / span 1",
                    }}
                  >
                    <h3 style={lmsCardH3Style(isBelow480, "#0077cc")}>
                      Personalized Learning That Adapts, Measures, and Excels
                    </h3>
                  </div>
                </div>
                {/* No footer statement here (removed) */}
              </div>
            </div>
            {/* Responsive helpers for grid columns */}
            <style jsx>{`
              @media (max-width: 992px) {
                .lms-flex {
                  flex-direction: column !important;
                }
                .lms-image {
                  max-width: 100% !important;
                  margin-bottom: 2rem !important;
                }
                .lms-cards-grid {
                  grid-template-columns: 1fr !important;
                  grid-template-rows: repeat(5, auto) !important;
                }
              }
              @media (max-width: 600px) {
                .lms-cards-grid {
                  grid-template-columns: 1fr !important;
                  grid-template-rows: repeat(5, auto) !important;
                  gap: 0.7rem !important;
                }
                .lms-card {
                  border-radius: 10px !important;
                  padding: 0.85rem !important;
                  font-size: 0.96rem !important;
                }
                .lms-footer {
                  font-size: 0.96rem !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* ======= Clients Section ======= */}
        <section
          id="clients"
          className="clients-section"
          style={{ background: "#fff", width: "100%" }}
        >
          <div
            className="clients-container"
            data-aos="fade-up"
            style={{
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
              padding: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="clients-inner"
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                paddingLeft: isBelow768 ? "18px" : "40px",
                paddingRight: isBelow768 ? "18px" : "40px",
              }}
            >
              <header
                className="clients-header"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <h2
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: "800",
                    color: "#004aad",
                  }}
                >
                  🤝 Institutional Partners
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#333",
                    maxWidth: "900px",
                    margin: "1rem auto 3rem auto",
                    lineHeight: "1.7",
                  }}
                >
                  Trusted by 50+ top colleges including{" "}
                  <strong>
                    NITK Surathkal, MAHE Manipal, RVCE, BMSCE, NMIT, Sahyadri
                    Mangalore, PES Mandya, VCET Puttur, Navkis Hassan, Jain
                    University, MIT Mysuru
                  </strong>
                  , and many more.
                </p>
              </header>

              {/* 🌍 Our footprint covers every major engineering hub across Karnataka. */}
              <h3
                style={{
                  color: "#004aad",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                🌍 Our footprint covers every major engineering hub across
                Karnataka.
              </h3>
              {/* style block for h3 is inline above */}

              <div
                className="clients-slider-wrapper"
                style={{
                  marginBottom: "4rem",
                  width: "100vw",
                  marginLeft: "calc(-50vw + 50%)",
                  marginRight: "calc(-50vw + 50%)",
                  position: "relative",
                  left: 0,
                  right: 0,
                  overflow: "hidden",
                }}
              >
                <ClientsSection />
                {/* Remove any gradient overlays or fading edges from slider */}
                <style jsx>{`
                  .clients-slider-wrapper {
                    width: 100vw !important;
                    margin-left: calc(-50vw + 50%) !important;
                    margin-right: calc(-50vw + 50%) !important;
                    position: relative !important;
                    left: 0 !important;
                    right: 0 !important;
                    overflow: hidden !important;
                  }
                  .clients-slider-wrapper::before,
                  .clients-slider-wrapper::after,
                  .clients-slider::before,
                  .clients-slider::after {
                    display: none !important;
                    content: none !important;
                  }
                  .clients-slider-wrapper,
                  .clients-slider {
                    background: none !important;
                    mask-image: none !important;
                    -webkit-mask-image: none !important;
                    box-shadow: none !important;
                    filter: none !important;
                  }
                  .clients-slider img {
                    filter: none !important;
                    box-shadow: none !important;
                  }
                  @media (max-width: 768px) {
                    .clients-slider-wrapper {
                      padding: 0 10px !important;
                    }
                  }
                `}</style>
              </div>

              <div
                className="clients-footer"
                style={{ textAlign: "center", marginTop: "3rem" }}
              >
                <div className="corporate-collab" style={{ marginTop: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      textAlign: "center",
                      gap: isBelow480
                        ? "0.5rem"
                        : isBelow768
                        ? "0.7rem"
                        : "1rem",
                    }}
                  >
                    <Image
                      src="/collaboration.png"
                      alt="Collaboration Icon"
                      width={isBelow480 ? 36 : isBelow768 ? 46 : 56}
                      height={isBelow480 ? 36 : isBelow768 ? 46 : 56}
                      style={{ objectFit: "contain" }}
                    />
                    <h2
                      style={{
                        fontSize: isBelow480
                          ? "1.4rem"
                          : isBelow768
                          ? "1.7rem"
                          : "2rem",
                        fontWeight: "800",
                        color: "#007bff",
                        marginBottom: isBelow480 ? "0.6rem" : "1rem",
                        textAlign: "center",
                      }}
                    >
                      Corporate Collaborations
                    </h2>
                  </div>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      color: "#333",
                      maxWidth: "850px",
                      margin: "0 auto 1.5rem auto",
                      lineHeight: "1.7",
                    }}
                  >
                    <strong>
                      Tata Elxsi | UiPath | Hitachi | Everi India | RPASoft.ai |
                      Glowtouch | Prime Technosoft
                    </strong>
                  </p>
                  {/* Corporate Logos Slider */}
                  <div
                    className="corporate-logos-slider-wrapper"
                    style={{
                      marginBottom: "2rem",
                      width: "100vw",
                      marginLeft: "calc(-50vw + 50%)",
                      marginRight: "calc(-50vw + 50%)",
                      position: "relative",
                      left: 0,
                      right: 0,
                      overflow: "hidden",
                      background: "#ffffff",
                      padding: isBelow480
                        ? "4px 0"
                        : isBelow768
                        ? "8px 0"
                        : "10px 0",
                    }}
                  >
                    <div
                      className="corporate-logos-slider"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isBelow480 ? "24px" : isBelow768 ? "36px" : "48px",
                        animation: "scrollLogos 28s linear infinite",
                        width: "max-content",
                      }}
                    >
                      {/* Repeat the logos twice for seamless looping */}
                      {[...Array(2)].map((_, repIdx) => (
                        <React.Fragment key={repIdx}>
                          <Image
                            src="/Company1.png"
                            alt="Tata Elxsi"
                            width={isBelow480 ? 100 : isBelow768 ? 130 : 160}
                            height={isBelow480 ? 48 : isBelow768 ? 55 : 65}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 48 : isBelow768 ? 55 : 65,
                              width: isBelow480 ? 100 : isBelow768 ? 130 : 160,
                              transition: "width 0.2s, height 0.2s",
                            }}
                          />
                          <Image
                            src="/UiPath_id_6hYBRTt_0.svg"
                            alt="UiPath"
                            width={isBelow480 ? 78 : isBelow768 ? 102 : 130}
                            height={isBelow480 ? 30 : isBelow768 ? 38 : 45}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 30 : isBelow768 ? 38 : 45,
                              width: isBelow480 ? 78 : isBelow768 ? 102 : 130,
                              transition: "width 0.2s, height 0.2s",
                            }}
                          />
                          <Image
                            src="/Hitachi_idd_z9R5x4_0.svg"
                            alt="Hitachi"
                            width={isBelow480 ? 78 : isBelow768 ? 102 : 130}
                            height={isBelow480 ? 30 : isBelow768 ? 38 : 45}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 30 : isBelow768 ? 38 : 45,
                              width: isBelow480 ? 78 : isBelow768 ? 102 : 130,
                              transition: "width 0.2s, height 0.2s",
                            }}
                          />
                          <Image
                            src="/IE-logo-together.svg"
                            alt="Everi India"
                            width={isBelow480 ? 80 : isBelow768 ? 110 : 140}
                            height={isBelow480 ? 30 : isBelow768 ? 36 : 42}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 30 : isBelow768 ? 36 : 42,
                              width: isBelow480 ? 80 : isBelow768 ? 110 : 140,
                              transition: "width 0.2s, height 0.2s",
                              filter: "grayscale(100%) brightness(0) invert(0)",
                            }}
                          />
                          <Image
                            src="/rpasoft-ai.png"
                            alt="RPASoft.ai"
                            width={isBelow480 ? 75 : isBelow768 ? 102 : 120}
                            height={isBelow480 ? 32 : isBelow768 ? 38 : 45}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 32 : isBelow768 ? 38 : 45,
                              width: isBelow480 ? 75 : isBelow768 ? 102 : 120,
                              transition: "width 0.2s, height 0.2s",
                            }}
                          />
                          <Image
                            src="/GLOWTOUCH.webp"
                            alt="Glowtouch"
                            width={isBelow480 ? 80 : isBelow768 ? 110 : 140}
                            height={isBelow480 ? 32 : isBelow768 ? 38 : 45}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 32 : isBelow768 ? 38 : 45,
                              width: isBelow480 ? 80 : isBelow768 ? 110 : 140,
                              transition: "width 0.2s, height 0.2s",
                            }}
                          />
                          <Image
                            src="/FINAL.gif"
                            alt="Prime Technosoft"
                            width={isBelow480 ? 70 : isBelow768 ? 95 : 120}
                            height={isBelow480 ? 32 : isBelow768 ? 36 : 40}
                            style={{
                              objectFit: "contain",
                              height: isBelow480 ? 32 : isBelow768 ? 36 : 40,
                              width: isBelow480 ? 70 : isBelow768 ? 95 : 120,
                              transition: "width 0.2s, height 0.2s",
                            }}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                    <style jsx>{`
                      .corporate-logos-slider-wrapper {
                        width: 100vw !important;
                        margin-left: calc(-50vw + 50%) !important;
                        margin-right: calc(-50vw + 50%) !important;
                        position: relative !important;
                        left: 0 !important;
                        right: 0 !important;
                        overflow: hidden !important;
                        background: #ffffff !important;
                      }
                      .corporate-logos-slider {
                        background: none !important;
                        box-shadow: none !important;
                        filter: none !important;
                        mask-image: none !important;
                        -webkit-mask-image: none !important;
                        border-radius: 0 !important;
                        min-height: 40px;
                      }
                      .corporate-logos-slider img {
                        filter: none !important;
                        box-shadow: none !important;
                        background: none !important;
                        margin: 0;
                        border-radius: 0 !important;
                      }
                      @keyframes scrollLogos {
                        0% {
                          transform: translateX(0);
                        }
                        100% {
                          transform: translateX(-50%);
                        }
                      }
                      @media (max-width: 768px) {
                        .corporate-logos-slider-wrapper {
                          padding: 0 8px !important;
                        }
                        .corporate-logos-slider {
                          gap: 36px !important;
                        }
                      }
                      @media (max-width: 480px) {
                        .corporate-logos-slider {
                          gap: 24px !important;
                        }
                      }
                    `}</style>
                  </div>
                  {/* ======= Vision & Future Section ======= */}
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "#003366",
                      maxWidth: "750px",
                      margin: "0 auto",
                    }}
                  >
                    We design, train, and deploy talent aligned with real-world
                    industry needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Our Journey Section ======= */}
        <section className="journey-section" id="journey">
          <div
            className="journey-container"
            data-aos="fade-up"
            style={{
              ...maxWidthWrapperStyle,
              paddingLeft: isBelow768 ? "18px" : "40px",
              paddingRight: isBelow768 ? "18px" : "40px",
              // preserve vertical padding if desired, or set as needed
            }}
          >
            <header className="journey-header">
              <h2>🌱 OUR JOURNEY</h2>
              <h3>From a Classroom Dream to a Campus Movement</h3>
              <p>
                What began in 2003 as a passion for aptitude has grown into a
                network that bridges classrooms and careers. With every phase —
                from training students to digitizing learning to building
                corporate staffing models — we’ve evolved without losing focus
                on what matters most: <strong>student success.</strong>
              </p>
            </header>

            <h3 className="journey-subtitle">Milestones</h3>

            <div className="timeline">
              {[
                {
                  year: "2003",
                  title: "Aptitude Training Begins",
                  desc: "We started our journey by training students in aptitude, problem-solving, and analytical thinking — building strong career foundations.",
                  icon: <FaRocket />,
                },
                {
                  year: "2010",
                  title: "Technical & Soft Skills Expansion",
                  desc: "Introduced modules for communication, coding, and technical interviews, making students job-ready across multiple domains.",
                  icon: <FaCogs />,
                },
                {
                  year: "2020",
                  title: "BASE Educational Services (Udupi) Acquired",
                  desc: "Expanded our footprint and strengthened our regional presence by integrating BASE's educational excellence with our training ecosystem.",
                  icon: <FaUniversity />,
                },
                {
                  year: "2022",
                  title: "LMS Platform Launched",
                  desc: "Digitized learning with our in-house Learning Management System — enabling real-time analytics, assessments, and skill benchmarking.",
                  icon: <FaLaptopCode />,
                },
                {
                  year: "2024",
                  title: "Staffing & Consulting Vertical Introduced",
                  desc: "Launched the Staffing and Consulting division — bridging trained talent and corporates, transforming employability into measurable success.",
                  icon: <FaClipboardList />,
                },
              ].map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot">{item.icon}</div>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ======= Contact Section ======= */}
        <section
          id="contact"
          className="contact"
          style={{
            background: "linear-gradient(180deg, #e6f0ff 0%, #ffffff 100%)",
            width: "100%",
            padding: isBelow480 ? "40px 0" : isBelow768 ? "60px 0" : "80px 0",
          }}
        >
          <div
            className="container"
            data-aos="fade-up"
            style={{
              ...maxWidthWrapperStyle,
              paddingLeft: isBelow768 ? "18px" : "40px",
              paddingRight: isBelow768 ? "18px" : "40px",
            }}
          >
            <header
              className="section-header"
              style={{ textAlign: "center", marginBottom: "50px" }}
            >
              <h2 style={{ color: "#003366", fontWeight: "700" }}>Contact</h2>
              <p style={{ color: "#555", fontSize: "1.2rem" }}>
                Get in Touch With Us
              </p>
            </header>

            <div
              className="row gy-4"
              style={{
                display: "flex",
                flexDirection: isBelow768 ? "column" : "row",
                alignItems: isBelow768 ? "stretch" : "flex-start",
                justifyContent: isBelow768 ? "center" : "space-between",
                gap: isBelow480 ? "1.2rem" : isBelow768 ? "1.5rem" : "2.3rem",
              }}
            >
              {/* Left Side Info */}
              <div
                className="col-lg-6"
                style={{
                  width: isBelow768 ? "100%" : "48%",
                  minWidth: 0,
                  boxSizing: "border-box",
                  marginBottom: isBelow768 ? "1.2rem" : 0,
                }}
              >
                <div
                  className="info-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: isBelow480
                      ? "1fr"
                      : isBelow768
                      ? "1fr"
                      : "repeat(2, 1fr)",
                    gap: isBelow480
                      ? "0.9rem"
                      : isBelow768
                      ? "1.1rem"
                      : "1.5rem",
                  }}
                >
                  {[
                    {
                      icon: "bi-geo-alt",
                      title: "Address",
                      content:
                        "10 SECONDS, Arya Hamsa, Royal County, 80 Feet Road, JP Nagar, 8th Phase, Bangalore - 83",
                    },
                    {
                      icon: "bi-clock",
                      title: "Open Hours",
                      content: "Monday - Friday\n10:00AM - 07:00PM",
                    },
                    {
                      icon: "bi-telephone",
                      title: "Call Us",
                      content: "+91 9611 22 4444",
                    },
                    {
                      icon: "bi-envelope",
                      title: "Email Us",
                      content: "info@10secondsgroup.in",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="info-box"
                      style={{
                        background: "#ffffff",
                        borderRadius: "10px",
                        padding: isBelow480 ? "13px" : "20px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                        transition:
                          "transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)",
                        cursor: "pointer",
                        borderLeft:
                          i === 2
                            ? "4px solid #ff8800"
                            : i === 3
                            ? "4px solid #ff8800"
                            : "4px solid transparent",
                        margin: isBelow992 ? "0 auto" : 0,
                        width: isBelow992 ? "90%" : "auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(0,0,0,0.13)";
                        e.currentTarget.style.borderLeft = "4px solid #ff8800";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(0,0,0,0.08)";
                        e.currentTarget.style.borderLeft =
                          i === 2 || i === 3
                            ? "4px solid #ff8800"
                            : "4px solid transparent";
                      }}
                    >
                      <i
                        className={`bi ${item.icon}`}
                        style={{
                          fontSize: isBelow480 ? "1.3rem" : "2rem",
                          color: "#007bff",
                          marginBottom: isBelow480 ? "4px" : "10px",
                          display: "block",
                          transition: "color 0.3s",
                        }}
                      ></i>
                      <h3
                        style={{
                          color: "#003366",
                          fontWeight: isBelow480 ? 600 : 700,
                          fontSize: isBelow480 ? "1rem" : "1.13rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          whiteSpace: "pre-line",
                          color: "#444",
                          fontSize: isBelow480 ? "0.97rem" : "1.05rem",
                        }}
                      >
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Form */}
              <div
                className="col-lg-6"
                style={{
                  width: isBelow768 ? "100%" : "48%",
                  minWidth: 0,
                  boxSizing: "border-box",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                {/* Contact Form Iframe */}
                <iframe
                  src="https://forms.zohopublic.in/10seconds/form/RequestforQuote/formperma/Yagg4-6x6eqKH8GfsJbH3E48VG-DicyHAr-YNc1qZtE?zf_rszfm=1"
                  style={{
                    border: "none",
                    height: isBelow480
                      ? "550px"
                      : isBelow768
                      ? "650px"
                      : "900px",
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    background: "#fff",
                  }}
                  allowFullScreen
                ></iframe>

                {/* ✅ Global tablet and hamburger styles */}
                <style jsx global>{`
                  /* Force hamburger for all tablets (portrait + landscape) */
                  @media (min-width: 768px) and (max-width: 1024px) {
                    .header-right {
                      display: none !important;
                    }
                    .mobile-nav-toggle {
                      display: block !important;
                    }
                    .mobile-dropdown {
                      display: block !important;
                    }
                    .nav-links {
                      display: none !important;
                    }
                    .header-container {
                      justify-content: space-between !important;
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ======= Vision & Future Section ======= */}
      <section
        id="vision-future"
        className="vision-section"
        style={{ background: "#f7fbff", width: "100%" }}
      >
        <div
          className="vision-container"
          data-aos="fade-up"
          style={{
            ...maxWidthWrapperStyle,
            paddingLeft: isBelow768 ? "18px" : "40px",
            paddingRight: isBelow768 ? "18px" : "40px",
            paddingTop: isBelow480 ? "18px" : isBelow768 ? "30px" : "50px",
            paddingBottom: isBelow480 ? "18px" : isBelow768 ? "30px" : "50px",
          }}
        >
          <header
            className="vision-header"
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "#004aad",
                background: "linear-gradient(90deg, #007cf0, #00dfd8, #007cf0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "headerShine 6s linear infinite",
              }}
            >
              🔮 VISION & FUTURE
            </h2>
          </header>

          <div
            className="vision-content"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.08)",
              padding: isBelow480 ? "18px" : isBelow768 ? "28px" : "40px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 25px rgba(0, 0, 0, 0.08)";
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                color: "#007bff",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: "1.7",
              }}
            >
              To be India’s most trusted campus-to-corporate ecosystem driven by{" "}
              <strong>Training, Technology & Talent.</strong>
            </p>
            <div
              style={{
                height: "2px",
                width: "80px",
                background: "#00bcd4",
                margin: "2rem auto 0 auto",
                borderRadius: "2px",
              }}
            ></div>
          </div>
        </div>
      </section>
      <footer
        className="footer"
        style={{
          background: "#fff",
          width: "100%",
          marginTop: "auto",
          marginBottom: 0,
          paddingBottom: 0,
          backgroundColor: "#ffffff",
        }}
      >
        <div
          className="footer-container"
          style={{
            ...maxWidthWrapperStyle,
            display: "flex",
            flexDirection: isBelow768 ? "column" : "row",
            gap: isBelow480 ? "1.2rem" : isBelow768 ? "1.4rem" : "2.5rem",
            alignItems: isBelow768 ? "center" : "flex-start",
            justifyContent: "space-between",
            paddingLeft: isBelow768 ? "18px" : "40px",
            paddingRight: isBelow768 ? "18px" : "40px",
            paddingTop: isBelow480 ? "16px" : isBelow768 ? "28px" : "40px",
            paddingBottom: isBelow480 ? "10px" : isBelow768 ? "16px" : "18px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="footer-left"
            style={{
              flex: 1,
              minWidth: 0,
              marginBottom: isBelow768 ? "1.5rem" : 0,
              display: "flex",
              flexDirection: "column",
              alignItems: isBelow768 ? "center" : "flex-start",
              textAlign: isBelow768 ? "center" : "left",
            }}
          >
            <Image
              src="/logo.png"
              alt="10Seconds Logo"
              width={isBelow480 ? 80 : isBelow768 ? 110 : 150}
              height={isBelow480 ? 25 : isBelow768 ? 35 : 50}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <p
              style={{
                fontSize: isBelow480 ? "0.92rem" : "1.05rem",
                marginTop: "0.7rem",
                textAlign: isBelow768 ? "center" : "left",
              }}
            >
              10 SECONDS is an organization that unifies training, assessments
              and recruitment under one roof. Conceptualised by Anijith Shetty
              and Ramaprasad, we are an ensemble set of young executive trainers
              who specialise in all things digital.
            </p>
            <div
              className="social-icons"
              style={{
                display: "flex",
                gap: isBelow480 ? "0.7rem" : "1rem",
                marginTop: "1.1rem",
                justifyContent: isBelow768 ? "center" : "flex-start",
              }}
            >
              <a href="#" aria-label="Facebook" style={{ fontSize: "1.5rem" }}>
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" style={{ fontSize: "1.5rem" }}>
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" style={{ fontSize: "1.5rem" }}>
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" style={{ fontSize: "1.5rem" }}>
                <FaYoutube />
              </a>
            </div>
          </div>

          <div
            className="footer-right"
            style={{
              flex: 1,
              minWidth: 0,
              width: isBelow992 ? "100%" : "auto",
              marginBottom: isBelow768 ? "1.5rem" : 0,
              display: "flex",
              flexDirection: "column",
              alignItems: isBelow768 ? "center" : "flex-start",
            }}
          >
            <div
              className="footer-columns"
              style={{
                display: "flex",
                flexDirection: isBelow768 ? "column" : "row",
                gap: isBelow768 ? "1.2rem" : "2.2rem",
                alignItems: isBelow768 ? "center" : "flex-start",
                width: "100%",
              }}
            >
              <div className="useful-links-block">
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: isBelow480 ? "1rem" : "1.1rem",
                    textAlign: isBelow768 ? "center" : "left",
                  }}
                >
                  USEFUL LINKS
                </h3>
                <ul
                  className="useful-links"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: isBelow480 ? "0.95rem" : "1.05rem",
                    textAlign: isBelow768 ? "center" : "left",
                  }}
                >
                  {[
                    { text: "Home", href: "#hero" },
                    {
                      text: "For Universities / Institutions",
                      href: "#clients",
                    },
                    { text: "About Us", href: "#about" },
                    { text: "Services", href: "#services" },
                    { text: "Contact Us", href: "#contact" },
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        style={{
                          color: "#004aad",
                          textDecoration: "none",
                          fontWeight: 500,
                          transition:
                            "color 0.3s ease, border-bottom 0.3s ease",
                          borderBottom: "2px solid transparent",
                          display: "inline-block",
                          paddingBottom: "2px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#007cf0";
                          e.currentTarget.style.borderBottom =
                            "2px solid #007cf0";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#004aad";
                          e.currentTarget.style.borderBottom =
                            "2px solid transparent";
                        }}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPolicy(true);
                      }}
                      style={{
                        color: "#004aad",
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "color 0.3s ease, border-bottom 0.3s ease",
                        borderBottom: "2px solid transparent",
                        display: "inline-block",
                        paddingBottom: "2px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#007cf0";
                        e.currentTarget.style.borderBottom =
                          "2px solid #007cf0";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#004aad";
                        e.currentTarget.style.borderBottom =
                          "2px solid transparent";
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="contact-us-block">
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: isBelow480 ? "1rem" : "1.1rem",
                    textAlign: isBelow768 ? "center" : "left",
                  }}
                >
                  CONTACT US
                </h3>
                <address
                  style={{
                    fontSize: isBelow480 ? "0.95rem" : "1.05rem",
                    fontStyle: "normal",
                    textAlign: isBelow768 ? "center" : "left",
                  }}
                >
                  10 SECONDS
                  <br />
                  Arya Hamsa
                  <br />
                  Royal County, 80 Feet Road
                  <br />
                  J P Nagar, 8th Phase
                  <br />
                  Bangalore - 83
                  <br />
                  <br />
                  Phone: <a href="tel:+919611224444">+91 9611 22 4444</a>
                  <br />
                  Email:{" "}
                  <a href="mailto:info@10secondsgroup.in">
                    info@10secondsgroup.in
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            textAlign: "center",
            padding: isBelow480 ? "7px 0" : "12px 0",
            fontSize: isBelow480 ? "0.97rem" : "1.02rem",
            backgroundColor: "#004aad",
            color: "#ffffff",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            position: "relative",
            left: 0,
            right: 0,
            bottom: 0,
            marginBottom: 0,
          }}
        >
          © Copyright 10SECONDS. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

// Helper for below 600px
function isBelow600() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 600;
  }
  return false;
}

// Card style helpers for LMS section
function lmsCardStyle(isBelow480, isBelow768) {
  return {
    background: "#ffffff",
    borderRadius: isBelow480 ? 10 : 16,
    boxShadow: "0 2px 10px rgba(0, 124, 240, 0.07)",
    padding: isBelow480 ? "0.85rem" : isBelow768 ? "1.1rem" : "1.25rem",
    textAlign: "center",
    minHeight: isBelow480 ? 80 : isBelow768 ? 95 : 110,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    transition: "box-shadow 0.2s, transform 0.2s",
  };
}
function lmsCardH3Style(isBelow480, color) {
  return {
    fontWeight: 700,
    fontSize: isBelow480 ? "1.08rem" : "1.17rem",
    color,
    margin: 0,
    marginBottom: "0.3rem",
    letterSpacing: "0.5px",
    textAlign: "center",
  };
}
function lmsCardPStyle(isBelow480) {
  return {
    fontSize: isBelow480 ? "0.92rem" : "1.01rem",
    color: "#003366",
    fontWeight: 500,
    margin: 0,
    textAlign: "center",
    lineHeight: "1.45",
  };
}

{
  /* Responsive Footer Styles */
}
<style jsx>{`
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      padding-left: 18px !important;
      padding-right: 18px !important;
    }
    .footer-left,
    .footer-right {
      width: 100% !important;
      align-items: center !important;
      text-align: center !important;
      margin-bottom: 1.5rem !important;
    }
    .footer-columns {
      flex-direction: column !important;
      gap: 1.2rem !important;
      align-items: center !important;
      width: 100% !important;
    }
    .footer-left p,
    .footer-right p,
    .footer-right address,
    .footer-right h3 {
      text-align: center !important;
    }
    .social-icons {
      justify-content: center !important;
    }
    .social-icons a {
      font-size: 1.5rem !important;
    }
  }
  @media (max-width: 480px) {
    .footer-container {
      gap: 1rem !important;
      padding-top: 10px !important;
      padding-bottom: 8px !important;
    }
    .footer-left p,
    .footer-right p,
    .footer-right address {
      font-size: 0.92rem !important;
    }
    .footer-right h3,
    .footer-left h3 {
      font-size: 1rem !important;
    }
    .footer-columns {
      gap: 0.7rem !important;
    }
    .social-icons a {
      font-size: 1.5rem !important;
    }
  }
`}</style>;

<style jsx global>{`
  /* 🔒 Lock header layout for tablets (both portrait + landscape) */
  @media (min-width: 768px) and (max-width: 1024px) {
    /* Always show hamburger on left, logo on right */
    .header-right {
      display: none !important;
    }
    .mobile-nav-toggle {
      display: block !important;
    }

    .header {
      height: 70px !important;
    }

    .header-container {
      justify-content: space-between !important;
      flex-direction: row !important;
    }

    /* Flip order: hamburger left, logo right */
    .header-left {
      order: 2 !important;
    }
    .mobile-nav-toggle {
      order: 1 !important;
      margin-left: 0 !important;
    }
  }

  /* Explicitly handle landscape orientation */
  @media (orientation: landscape) and (min-width: 768px) and (max-width: 1024px) {
    .header-right {
      display: none !important;
    }
    .mobile-nav-toggle {
      display: block !important;
    }
    .header-left {
      order: 2 !important;
    }
    .mobile-nav-toggle {
      order: 1 !important;
    }
    .header {
      height: 70px !important;
    }
  }
`}</style>;

{
  /* ======= Footer Navigation (if present) ======= */
}
{
  /* If you have a footer navigation, ensure the links below use the correct hrefs with section IDs */
}
{
  /* Example footer navigation: */
}
{
  /*
      <footer>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#lms-platform">LMS Platform</a></li>
            <li><a href="#clients">Our Clients</a></li>
            <li><a href="#journey">Our Journey</a></li>
            <li><a href="#vision-future">Vision and Future</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </footer>
      */
}
