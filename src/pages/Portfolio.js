import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A custom web development project for eCommerce.",
    },
    {
      title: "Project Beta",
      description: "A mobile app solution for a startup.",
    },
    {
      title: "Project Gamma",
      description: "Digital marketing campaign for a retail brand.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
