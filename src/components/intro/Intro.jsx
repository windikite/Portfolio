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
          Hello! I am a junior developer looking for opportunities to use my skills in Javascript and Python. I have experience building fullstack ecosystems, frontend applications and backend servers for the web in both of those languages and I'm eager to learn even more working for the right team. I bring experience in popular frontend technologies such as React and Django, as well as backend technologies like Node, MongoDB and SQLite. Proficiency in version control utilities such as Git and Github enable me to contribute to online repositories while safely preserving previous versions.  
          </p>
          <p>
          The team I'll find my best home with is one where I can employ my skills to make meaningful contributions and be impacted just as much in return. To improve as a developer with my existing skills and learn new ones along the way is my ultimate goal, and I'd be glad for any opportunity to do so. If this sounds like your team I'd love to hear from you, so please feel free to contact me via email or LinkedIn with any questions!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
