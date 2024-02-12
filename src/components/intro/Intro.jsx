import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Christopher Craig" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ year</small>
            </article> */}
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>32+ Completed Projects</small>
            </article> */}
          </div>
          <p>
          Hello! I am a full stack developer looking to pivot into the computer science field and begin a new career in programming. Delving into new fields and taking well to it is a big part of who I am, and the mix of different interests and activities even in just my education and work history has only made me more adaptable. This adaptability and a desire to find the right long-term career has led me to pursue an interest in programming and make that commitment. I have just completed Noble Desktop's fullstack developer bootcamp as of 2/12/24 and am now looking for full time employment to sharpen my skills and grow even further. I hope to hear from you soon!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
