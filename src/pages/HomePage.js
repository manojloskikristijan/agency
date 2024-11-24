import React from "react";
import { Parallax } from "react-parallax";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Parallax
        bgImage="https://source.unsplash.com/1600x900/?technology" // Replace with your background image URL
        strength={500}
      >
        <div className="parallax-content">
          <h1>Navigate Your Brand’s Digital Journey</h1>
          <p>
            Web Development, Mobile App Solutions, and Digital Marketing – All
            in One Place.
          </p>
          <button className="cta-button">Start Your Digital Journey</button>
        </div>
      </Parallax>

      <section className="non-parallax-content">
        <h2>Welcome to Digital Compass</h2>
        <p>
          We are here to bring your ideas to life and make your business thrive
          in the digital era.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
