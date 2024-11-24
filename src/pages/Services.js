import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Crafting websites that captivate and convert.",
    },
    {
      title: "Mobile App Development",
      description: "Apps that empower your business.",
    },
    {
      title: "Digital Marketing",
      description: "Marketing that moves the needle.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
