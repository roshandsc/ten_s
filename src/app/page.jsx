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
  FaHandshake,
  FaUsersCog,
  FaLaptopCode,
  FaUserTie,
  FaHandshake as FaHandshakeIcon,
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
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
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
        </div>
      </header>

      <main className="main" style={{ minHeight: "60vh" }}>
        <section id="hero" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                From Campus to Corporate — in Just <span>10 SECONDS</span>
              </h1>
              <h3>
                We’re an employability ecosystem empowering students,
                institutions, and recruiters through training, technology, and
                talent solutions.
              </h3>
              <button className="hero-btn">Get Started Now</button>
            </div>

            <div className="hero-image">
              <Image
                src="/h.png"
                alt="A professional graphic related to career success"
                width={550}
                height={400}
                className="hero-main-image"
              />
            </div>
          </div>
        </section>

        <section className="quick-summary">
          <div className="summary-card">
            <div
              className="summary-icon"
              style={{
                fontSize: "2.5rem",
                color: "#007bff",
                marginBottom: "10px",
              }}
            >
              <FaBookOpen />
            </div>
            <h2>Training That Transforms</h2>
            <p>
              Aptitude, Coding, and Soft-Skill programs built for real
              placements.
            </p>
          </div>

          <div className="summary-card">
            <div
              className="summary-icon"
              style={{
                fontSize: "2.5rem",
                color: "#00bcd4",
                marginBottom: "10px",
              }}
            >
              <FaLaptopCode />
            </div>
            <h2>Technology That Tracks</h2>
            <p>
              LMS with analytics, assessments, and recruiter-benchmarked tests.
            </p>
          </div>

          <div className="summary-card">
            <div
              className="summary-icon"
              style={{
                fontSize: "2.5rem",
                color: "#28a745",
                marginBottom: "10px",
              }}
            >
              <FaHandshake />
            </div>
            <h2>Talent That Fits</h2>
            <p>
              Staffing and consulting services connecting pre-trained candidates
              with leading corporates.
            </p>
          </div>
        </section>

        {/* ======= About Us Section ======= */}
        <section id="about" className="about-section">
          <div className="about-container" data-aos="fade-up">
            <header className="about-header">
              <h2>🌟 ABOUT US</h2>
            </header>

            <div className="about-grid">
              {[
                {
                  title: "Who We Are",
                  desc: "10 SECONDS is a new-age training and staffing organization that unifies learning, assessment, and recruitment under one roof. We partner with colleges, universities, and corporates to create career-ready graduates who meet real industry expectations.",
                  icon: <FaUniversity />,
                },
                {
                  title: "What We Believe",
                  desc: "It takes just ten seconds to make a strong first impression. Our programs ensure every student, trainer, and partner institution makes theirs count.",
                  icon: <FaBrain />,
                },
                {
                  title: "Our Journey",
                  desc: "From a single classroom in 2003 to a statewide network of 60 partner institutions, we’ve grown through innovation, trust, and measurable outcomes. Today, our digital learning platform and staffing services make us one of Karnataka’s most trusted campus-to-corporate partners. We don’t just teach. We transform potential into performance.",
                  icon: <FaRocket />,
                },
              ].map((item, index) => (
                <div
                  className="about-card"
                  key={index}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    background: "#ffffff",
                    borderRadius: "12px",
                    padding: "25px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
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
                    className="about-icon"
                    style={{
                      fontSize: "2.5rem",
                      color: "#007bff",
                      marginBottom: "15px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ color: "#003366", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#444", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ======= Services Section ======= */}
        <section id="services" className="services-section">
          <div className="services-container" data-aos="fade-up">
            <header className="services-header">
              <h2>🔧 SERVICES</h2>
            </header>

            <div
              className="services-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              {[
                {
                  title: "Pre-Placement Training",
                  icon: <FaChalkboardTeacher color="#007cf0" size={50} />,
                  desc: "Aptitude (Quant, Reasoning, Verbal) | Soft Skills & Communication | Mock Interviews | Competitive Coding (C, C++, DSA).",
                  outcome:
                    "Higher aptitude clearance, improved recruiter alignment, and better first-round success.",
                },
                {
                  title: "Recruitment Readiness & Campus Programs",
                  icon: <FaUsersCog color="#00bcd4" size={50} />,
                  desc: "Company-specific test prep, GD and HR interview coaching, resume + LinkedIn grooming, and career mapping.",
                  outcome:
                    "Students ready for Cognizant, SAP Labs, TCS, Infosys & top recruiters.",
                },
                {
                  title: "Technical Upskilling & Projects",
                  icon: <FaLaptopCode color="#28a745" size={50} />,
                  desc: "C, C++, Java, Python | IoT & Embedded Systems | Mini & Major Industry Projects.",
                  outcome:
                    "Hands-on, project-based learning that mirrors real corporate environments.",
                },
                {
                  title: "Corporate Training & Team Development",
                  icon: <FaUserTie color="#ff8800" size={50} />,
                  desc: "Leadership, Etiquette, Workplace Communication, and Time Management Modules for organizations and faculty.",
                  outcome: "Upskilled, motivated, and collaborative teams.",
                },
                {
                  title: "Staffing & Talent Consulting (NEW)",
                  icon: <FaHandshake color="#004aad" size={50} />,
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
                    padding: "25px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
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
                    className="service-icon"
                    style={{ marginBottom: "15px" }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ color: "#007bff", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#444", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                  <p style={{ marginTop: "10px", color: "#003366" }}>
                    <strong>Outcome:</strong> {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ======= LMS PLATFORM Section ======= */}
        <section id="lms-platform" className="lms-section">
          <div className="lms-container" data-aos="fade-up">
            <header className="lms-header">
              <h2>📚 LMS PLATFORM</h2>
              <a
                href="https://learning.10seconds.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="lms-link"
              >
                learning.10seconds.co.in
              </a>
            </header>

            <p className="lms-description">
              Our in-house Learning Management System connects learners,
              trainers, and recruiters on one platform.
            </p>

            <div className="lms-stats">
              {[
                { number: "50K+", label: "Active Users" },
                { number: "250+", label: "Mock & Company-Specific Tests" },
                { number: "100+", label: "Video Tutorials" },
                { number: "📊", label: "Real-time Analytics & Leaderboards" },
                { number: "💻", label: "MCQ + Coding Assessments" },
              ].map((stat, index) => (
                <div key={index} className="lms-card">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="lms-footer">
              Personalized, data-driven, and measurable — our LMS turns every
              learner into a performer.
            </p>
          </div>
        </section>

        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients-section">
          <div className="clients-container" data-aos="fade-up">
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

            <div
              className="clients-slider-wrapper"
              style={{ marginBottom: "4rem" }}
            >
              <ClientsSection />
            </div>

            <div
              className="clients-footer"
              style={{ textAlign: "center", marginTop: "3rem" }}
            >
              <h3
                style={{
                  color: "#004aad",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                🌍 Our footprint covers every major engineering hub across
                Karnataka.
              </h3>

              <div className="corporate-collab" style={{ marginTop: "2rem" }}>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#007bff",
                    marginBottom: "1rem",
                  }}
                >
                  Corporate Collaborations
                </h2>
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
                    VectorFab | Glowtouch | Prime Technosoft
                  </strong>
                </p>
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
        </section>

        {/* ======= Our Journey Section ======= */}
        <section className="journey-section">
          <div className="journey-container" data-aos="fade-up">
            <header
              className="journey-header"
              style={{ textAlign: "center", marginBottom: "2.5rem" }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#004aad",
                }}
              >
                🌱 OUR JOURNEY
              </h2>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#007bff",
                  marginTop: "0.5rem",
                }}
              >
                From a Classroom Dream to a Campus Movement
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#333",
                  maxWidth: "850px",
                  margin: "1.5rem auto 2rem auto",
                  lineHeight: "1.7",
                }}
              >
                What began in 2003 as a passion for aptitude has grown into a
                network that bridges classrooms and careers. With every phase —
                from training students to digitizing learning to building
                corporate staffing models — we’ve evolved without losing focus
                on what matters most: <strong>student success.</strong>
              </p>
            </header>

            <h3
              style={{
                textAlign: "center",
                fontSize: "1.8rem",
                color: "#004aad",
                marginBottom: "2rem",
              }}
            >
              Milestones
            </h3>

            <div className="timeline">
              {[
                {
                  year: "2003",
                  title: "Aptitude Training Begins",
                  desc: "We started our journey by training students in aptitude, problem-solving, and analytical thinking — building strong career foundations.",
                  icon: <FaRocket color="#007cf0" />,
                },
                {
                  year: "2010",
                  title: "Technical & Soft Skills Expansion",
                  desc: "Introduced modules for communication, coding, and technical interviews, making students job-ready across multiple domains.",
                  icon: <FaCogs color="#00bcd4" />,
                },
                {
                  year: "2020",
                  title: "BASE Educational Services (Udupi) Acquired",
                  desc: "Expanded our footprint and strengthened our regional presence by integrating BASE's educational excellence with our training ecosystem.",
                  icon: <FaUniversity color="#009688" />,
                },
                {
                  year: "2022",
                  title: "LMS Platform Launched",
                  desc: "Digitized learning with our in-house Learning Management System — enabling real-time analytics, assessments, and skill benchmarking.",
                  icon: <FaLaptopCode color="#ff8800" />,
                },
                {
                  year: "2024",
                  title: "Staffing & Consulting Vertical Introduced",
                  desc: "Launched the Staffing and Consulting division — bridging trained talent and corporates, transforming employability into measurable success.",
                  icon: <FaClipboardList color="#004aad" />,
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
                    <p
                      style={{
                        color: "#444",
                        lineHeight: "1.6",
                        marginTop: "0.3rem",
                      }}
                    >
                      {item.desc}
                    </p>
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
      {/* ======= Vision & Future Section ======= */}
      <section id="vision-future" className="vision-section">
        <div className="vision-container" data-aos="fade-up">
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
              padding: "40px",
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
