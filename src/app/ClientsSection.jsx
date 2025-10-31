"use client";
import React from "react";
import Image from "next/image";

export default function ClientsSection() {
  return (
    <section
      className="clients-slider"
      style={{
        background: "linear-gradient(180deg, #f9f9f9, #eaf4ff)",
        padding: "100px 0",
      }}
    >
      <div className="container" data-aos="fade-up">
        <header
          className="section-header"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <h2
            style={{
              fontSize: "2.2rem",
              color: "#003366",
              fontWeight: "700",
            }}
          >
            Our Esteemed Clients
          </h2>
          <p style={{ color: "#555", fontSize: "1.1rem" }}>
            Trusted by leading universities, institutions, and enterprises
            across India.
          </p>
        </header>

        <div className="clients-lane">
          {[...Array(30)].map((_, index) => (
            <Image
              key={`lane1-${index}`}
              src={`/client${index + 1}.png`}
              alt={`Client ${index + 1}`}
              width={140}
              height={80}
            />
          ))}
          {[...Array(30)].map((_, index) => (
            <Image
              key={`lane1-dup-${index}`}
              src={`/client${index + 1}.png`}
              alt={`Client duplicate ${index + 1}`}
              width={140}
              height={80}
            />
          ))}
        </div>

        <div className="clients-lane reverse" style={{ marginTop: "3rem" }}>
          {[...Array(30)].map((_, index) => (
            <Image
              key={`lane2-${index}`}
              src={`/client${index + 1}.png`}
              alt={`Client ${index + 1}`}
              width={140}
              height={80}
            />
          ))}
          {[...Array(30)].map((_, index) => (
            <Image
              key={`lane2-dup-${index}`}
              src={`/client${index + 1}.png`}
              alt={`Client duplicate ${index + 1}`}
              width={140}
              height={80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
