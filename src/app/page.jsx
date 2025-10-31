"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaVideo,
  FaBookOpen,
  FaBrain,
  FaChalkboardTeacher,
  FaClipboardList,
  FaFileAlt,
  FaRocket,
  FaCogs,
  FaUniversity,
  FaLaptopCode,
} from "react-icons/fa";
import SwiperCore from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import dynamic from "next/dynamic";
const ClientsSection = dynamic(() => import("./ClientsSection"), {
  ssr: false,
});

SwiperCore.use([Autoplay, FreeMode]);

const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "For Universities / Institutions", href: "#track-assign-achieve" },
  { name: "Consulting", href: "#consulting" },
  { name: "Contact Us", href: "#contact" },
];

export default function Page() {
  const pathname = usePathname();
  const [showPolicy, setShowPolicy] = useState(false);
  // Hydration-safe flag
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Stats Counter Animation
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    const counters = document.querySelectorAll(".stat-number");
    let hasAnimated = false;

    function animateCounters() {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = value.toLocaleString();
          if (progress < 1) requestAnimationFrame(updateCounter);
          else counter.textContent = target.toLocaleString();
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

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) observer.observe(statsSection);
  }, [hydrated]);

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

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <Image
              src="/logo.png"
              alt="10Seconds Logo"
              width={180}
              height={55}
              className="header-logo"
            />
          </div>
          <div className="header-right">
            <nav className="nav">
              <ul className="nav-links">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    {link.name === "Contact Us" ? (
                      <Link
                        href={link.href}
                        className={`contact-button ${
                          pathname === link.href ? "active-link" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className={pathname === link.href ? "active-link" : ""}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="main" style={{ minHeight: "60vh" }}>
        <section id="hero" className="hero-banner">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Quality is our priority</h1>
              <p>20,00,000 LEARNING OUTCOMES DELIVERED</p>
              <Link href="#about" className="hero-button">
                Get Started
              </Link>
            </div>
            <div className="hero-image">
              <Image
                src="/hero_banner_i.png"
                alt="Hero Banner"
                width={500}
                height={400}
                className="hero-banner-image"
              />
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
                WHO WE ARE
              </h2>
              <p>
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  Do you want to excel the aptitude and technical languages? Let
                  us tell your story and leave it to us for a seamless execution
                  right from the start.
                </span>
                <span
                  style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333" }}
                >
                  10 SECONDS is an organization that unifies training,
                  assessments and recruitment under one roof. Conceptualised by
                  Anijith Shetty and Ramaprasad, we are an ensemble set of young
                  executive trainers who specialise in all things digital.
                </span>
              </p>
            </div>
            <div className="about-image">
              <Image
                src="/about_i.png"
                alt="About Us"
                width={550}
                height={400}
                className="about-us-image"
              />
            </div>
          </div>
        </section>

        <section className="why-ten-seconds">
          <h2 className="why-title">Why 10 SECONDS</h2>
          <div className="why-card-container">
            <div className="why-card">
              <Image
                src="/c1.png"
                alt="Why 10 Seconds 1"
                width={350}
                height={250}
                className="why-card-image"
              />
              <p>
                The name of the business is inspired by research that suggests
                it takes 10 SECONDS to build a strong first impression. We try
                to apply this principle in everything we do, be it in our
                interactions with clients, prospects or even our partners.
              </p>
            </div>
            <div className="why-card">
              <Image
                src="/c2.png"
                alt="Why 10 Seconds 2"
                width={350}
                height={250}
                className="why-card-image"
              />
              <p>
                We have built an organization that enables us to provide high
                quality, skill-oriented training and services through a team of
                highly qualified professionals.
              </p>
            </div>
            <div className="why-card">
              <Image
                src="/c3.png"
                alt="Why 10 Seconds 3"
                width={350}
                height={250}
                className="why-card-image"
              />
              <p>
                Our focus on technology and innovation makes us future-ready and
                helps us deliver cutting edge solutions that are
                student-centric, easy to use and most importantly cost-effective
                for our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="boardroom-section">
          <div className="boardroom-container">
            <div className="boardroom-image">
              <Image
                src="/bored.png"
                alt="Boardroom"
                width={600}
                height={400}
                className="boardroom-photo"
              />
            </div>
            <div className="boardroom-text">
              <h2>What brews in our boardrooms?</h2>
              <p>
                We are a bunch of young, passionate trendsetters who are led by
                some of the most credible names in the industry. So, when you
                tap onto the career universe with us, we ensure you are heard
                without getting lost in the echo of trends.
              </p>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="stats-section">
          <h2 className="stats-title">Our Impact in Numbers</h2>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon">😊</div>
              <h3 className="stat-number" data-target="232">
                0
              </h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <h3 className="stat-number" data-target="521">
                0
              </h3>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎧</div>
              <h3 className="stat-number" data-target="1463">
                0
              </h3>
              <p>Hours of Support</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <h3 className="stat-number" data-target="63">
                0
              </h3>
              <p>Hard Workers</p>
            </div>
          </div>
        </section>

        <section id="consulting" className="consulting-section">
          <h2 className="consulting-title">Consulting</h2>
          <div className="consulting-container">
            <div className="consulting-content">
              <div className="consult-point" data-animate>
                <div className="consult-number">1</div>
                <p>
                  10 SECONDS is your career partner that translates your ideas &
                  dreams into reality. Our mission is to help you discover your
                  potential, build a solid career foundation, and achieve
                  greater success in life through the finest possible career
                  consulting.
                </p>
              </div>

              <div className="consult-point" data-animate>
                <div className="consult-number">2</div>
                <p>
                  Align Group is one of the fastest-growing career consulting
                  firms in India and has an extensive network spread across
                  multiple cities.
                </p>
              </div>

              <div className="consult-point" data-animate>
                <div className="consult-number">3</div>
                <p>
                  With a strong focus on services like campus placements,
                  training & development, executive search and recruitment, we
                  have been able to establish ourselves as one of the most
                  sought after job portals in the country.
                </p>
              </div>
            </div>

            <div className="consulting-image-wrapper">
              <Image
                src="/consulting_img.png"
                alt="Consulting"
                width={550}
                height={400}
                className="consulting-image"
              />
            </div>
          </div>
        </section>

        <section className="career-section">
          <h2 className="career-title" style={{ textAlign: "center" }}>
            Career
          </h2>
          <div
            className="career-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <div className="career-image-wrapper" style={{ flex: "1" }}>
              <Image
                src="/career_image.png"
                alt="Career"
                width={550}
                height={400}
                className="career-image"
              />
            </div>
            <div className="career-content" style={{ flex: "1" }}>
              <div className="career-point" data-animate>
                <h3>
                  <strong>Like what you saw? Work with us</strong>
                </h3>
                <p>
                  Your voice and art of training need to reach your target
                  audience without getting lost in the echo of trends. We make
                  it happen here.
                </p>
              </div>

              <div className="career-point" data-animate>
                <h3>
                  <strong>Want to join the 10-sec clan?</strong>
                </h3>
                <p>
                  We have been looking out for you and your expertise in
                  training! At 10 SECONDS, we believe in innovating the content
                  and stories we tell through ingenious minds. We are a clan of
                  dedicated, passionate, multi-skilled think-tanks who are
                  always looking out for more.
                </p>
              </div>

              <div className="career-point" data-animate>
                <h3>
                  <strong>
                    And if this sounds like you, say hello to us with your
                    profile
                  </strong>
                </h3>
                <p>- info@10secondsgroup.in</p>
              </div>
            </div>
          </div>
        </section>

        {/* Track > Assign > Achieve Section */}
        <section id="track-assign-achieve" className="track-assign-achieve">
          <div className="taa-container" data-aos="fade-up">
            <header className="taa-header">
              <p>Track &gt; Assign &gt; Achieve</p>
            </header>

            <div className="taa-content">
              <div className="taa-left">
                <ul className="taa-tabs">
                  <li className="taa-tab active" data-target="track">
                    Track
                  </li>
                  <li className="taa-tab" data-target="assign">
                    Assign
                  </li>
                  <li className="taa-tab" data-target="achieve">
                    Achieve
                  </li>
                </ul>

                <div className="taa-tab-content">
                  <div className="taa-pane active" id="track">
                    <h3> Fast Track Their Progress</h3>
                    <p>
                      Get real-time insights into your students’ learning
                      journey and monitor progress with futuristic analytics
                      dashboards that visualize growth.
                    </p>
                  </div>
                  <div className="taa-pane" id="assign">
                    <h3>📘 Assess Students' Performance</h3>
                    <p>
                      Empower educators with adaptive tests, AI-based feedback,
                      and detailed performance breakdowns. Personalized
                      difficulty levels ensure every student thrives.
                    </p>
                  </div>
                  <div className="taa-pane" id="achieve">
                    <h3> No Regrets, Only Achievement!</h3>
                    <p>
                      With over 100 personalized achievement paths, students
                      receive tailored guidance and milestone tracking,
                      motivating them toward excellence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="taa-right">
                <Image
                  src="/track.png"
                  alt="Track Assign Achieve"
                  width={550}
                  height={400}
                  className="taa-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======= Why Choose 10SECONDS PREP Section ======= */}
        <section className="why-choose-prep">
          <div className="prep-container" data-aos="fade-up">
            <header className="prep-header">
              <p>Why Choose 10SECONDS PREP?</p>
            </header>

            <div className="prep-grid">
              {[
                {
                  title: " Video Lessons by Top Trainers",
                  desc: "Live and recorded sessions by top curators with interactive visual learning.",
                  icon: <FaVideo />,
                },
                {
                  title: " Comprehensive Modules",
                  desc: "Covering aptitude, reasoning, and technical languages with modern methodologies.",
                  icon: <FaBookOpen />,
                },
                {
                  title: " Latest Pattern Test Series",
                  desc: "Practice full-length mock tests with instant feedback and leaderboard ranking.",
                  icon: <FaBrain />,
                },
                {
                  title: " Expert Faculty Sets",
                  desc: "Every module crafted by industry experts for maximum conceptual clarity.",
                  icon: <FaChalkboardTeacher />,
                },
                {
                  title: " Updated Question Patterns",
                  desc: "Stay ahead with the latest exam trends and structured question sets.",
                  icon: <FaClipboardList />,
                },
                {
                  title: " Detailed Solutions",
                  desc: "Every question comes with in-depth explanations for complete understanding.",
                  icon: <FaFileAlt />,
                },
              ].map((item, index) => (
                <div
                  className="prep-card"
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className="prep-icon"
                    style={{
                      fontSize: "2rem",
                      color: "#007bff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= Our Journey So Far Section ======= */}
        <section className="journey-section">
          <div className="journey-container" data-aos="fade-up">
            <header className="journey-header">
              <p>Our Journey So Far!</p>
            </header>
            <div className="timeline">
              {[
                {
                  year: "2003",
                  title: "Started with Aptitude Training.",
                  icon: <FaRocket color="#007cf0" />,
                },
                {
                  year: "2012",
                  title:
                    "Expanded by mastering technical training and innovative learning.",
                  icon: <FaCogs color="#00bcd4" />,
                },
                {
                  year: "2016",
                  title:
                    "With quality-based training, reached 80+ prestigious colleges across Karnataka.",
                  icon: <FaUniversity color="#009688" />,
                },
                {
                  year: "2020",
                  title:
                    "Revamped the entire experience with a modern Learning Management Portal.",
                  icon: <FaLaptopCode color="#ff8800" />,
                },
              ].map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div
                    className="timeline-dot"
                    style={{
                      fontSize: "2rem",
                      transition: "transform 0.4s ease",
                      animation: "pulseIcon 2.5s infinite",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= Clients Section ======= */}
        <ClientsSection />
        {/* ======= Contact Section ======= */}
        <section
          id="contact"
          className="contact"
          style={{
            background: "linear-gradient(180deg, #e6f0ff 0%, #ffffff 100%)",
            padding: "80px 0",
          }}
        >
          <div className="container" data-aos="fade-up">
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
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              {/* Left Side Info */}
              <div
                className="col-lg-6"
                style={{
                  width: "48%",
                  minWidth: 0,
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="info-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1.5rem",
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
                        padding: "20px",
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
                          fontSize: "2rem",
                          color: "#007bff",
                          marginBottom: "10px",
                          display: "block",
                          transition: "color 0.3s",
                        }}
                      ></i>
                      <h3 style={{ color: "#003366" }}>{item.title}</h3>
                      <p style={{ whiteSpace: "pre-line", color: "#444" }}>
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
                  width: "48%",
                  minWidth: 0,
                  boxSizing: "border-box",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <iframe
                  src="https://forms.zohopublic.in/10seconds/form/RequestforQuote/formperma/Yagg4-6x6eqKH8GfsJbH3E48VG-DicyHAr-YNc1qZtE?zf_rszfm=1"
                  style={{
                    border: "none",
                    height: "900px",
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    background: "#fff",
                  }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <Image
              src="/logo.png"
              alt="10Seconds Logo"
              width={150}
              height={50}
            />
            <p>
              10 SECONDS is an organization that unifies training, assessments
              and recruitment under one roof. Conceptualised by Anijith Shetty
              and Ramaprasad, we are an ensemble set of young executive trainers
              who specialise in all things digital.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-columns">
              <div className="useful-links-block">
                <h3>USEFUL LINKS</h3>
                <ul className="useful-links">
                  <li>
                    <a href="#hero">Home</a>
                  </li>
                  <li>
                    <a href="#track-assign-achieve">
                      For Universities / Institutions
                    </a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#consulting">Consulting</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPolicy(true);
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact-us-block">
                <h3>CONTACT US</h3>
                <address>
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
        {showPolicy && (
          <div
            className="privacy-modal-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(6px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              overflowY: "auto",
              padding: "40px 0",
              opacity: showPolicy ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
              animation: "fadeIn 0.4s ease forwards",
            }}
            onClick={(e) => {
              if (e.target.classList.contains("privacy-modal-overlay")) {
                setShowPolicy(false);
              }
            }}
          >
            <div
              className="privacy-modal"
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "40px",
                maxWidth: "900px",
                width: "90%",
                color: "#333",
                position: "relative",
                transform: "translateY(20px)",
                animation: "slideUp 0.4s ease forwards",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <button
                onClick={() => setShowPolicy(false)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  fontSize: "1.8rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#555",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                ✕
              </button>

              <h2
                style={{
                  textAlign: "center",
                  color: "#003366",
                  marginBottom: "20px",
                }}
              >
                Privacy Policy
              </h2>

              <p>
                10 SECONDS is committed to protecting the privacy and security
                of our users' personal information. We are an edtech company
                that provides educational services to students, teachers, and
                educational institutions. Our privacy policy outlines how we
                collect, use, and disclose your personal information in
                connection with our services.
              </p>

              <h3>Information Collection:</h3>
              <p>
                We collect personal information such as name, email address, and
                payment information when you sign up for our services. We may
                also collect information about your device and browser when you
                access our website or use our mobile application.
              </p>

              <h3>Information Use:</h3>
              <p>
                We use your personal information to provide and improve our
                services, communicate with you about your account, send you
                promotional materials, and respond to your inquiries. We may
                also use your information for research and analytics purposes to
                understand how our services are used.
              </p>

              <h3>Information Sharing:</h3>
              <p>
                We do not share your personal information with third parties,
                except for service providers who help us provide our services.
                We may also share your information if required by law or to
                protect our legal rights.
              </p>

              <h3>Data Security:</h3>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, or misuse. We use secure
                servers and encryption technology to protect your information.
              </p>

              <h3>Children's Privacy:</h3>
              <p>
                We do not knowingly collect personal information from children
                under the age of 13. If you are a parent or legal guardian and
                believe your child has provided us with personal information,
                please contact us immediately.
              </p>

              <h3>Changes to Our Policy:</h3>
              <p>
                We may update our privacy policy from time to time. If we make
                any material changes, we will notify you by email or by posting
                a notice on our website.
              </p>

              <h3>Contact Us:</h3>
              <p>
                If you have any questions or concerns about our privacy policy,
                please contact us at{" "}
                <a href="mailto:care@10seconds.co.in">care@10seconds.co.in</a>.
              </p>
            </div>

            <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }

              @keyframes slideUp {
                from {
                  transform: translateY(40px);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        )}
        <div className="footer-bottom">
          © Copyright 10SECONDS. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
