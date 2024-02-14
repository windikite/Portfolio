import "./portfolio.css";

import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/IMG4.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "FFXIV Gearset Manager",
      img: IMG1,
      description:
        "This app takes etro.gg links, calls their API for information on the provided gearset and builds a collection on the page. Uses React and Bootstrap, developed using JS.",
      technologies: "React | Bootstrap | JS",
      siteLink: "https://ffxiv-gearset-manager.onrender.com/",
      gitLink:'https://github.com/windikite/FFXIV-Raid-Manager'
    },
    {
      id: 2,
      title: "D&D 3.5 Backpack",
      img: IMG2,
      description:
        "A CRUD site and API for Dungeons and Dragons 3.5. Uses Express/Node, MongoDB for the database, Bcrypt for authentication and EJS for SSR and templating",
      technologies: "Node |Express | MongoDB | Bcrypt | JS | EJS",
      siteLink: "https://dnd-3-5-backpack.onrender.com/",
      gitLink:'https://github.com/windikite/DnD-3.5-Backpack'
    },
    {
      id: 3,
      title: "D&D 3.5 Character Creator",
      img: IMG3,
      description:
        "An app for creating characters in D&D 3.5 using data from my D&D 3.5 Backpack api. Built with React and Bootstrap, developed using JS.",
      technologies: "React | Bootstrap | JS",
      siteLink: "https://dnd-3-5-character-creator.onrender.com/",
      gitLink:'https://github.com/windikite/DnD-3.5-Character-Creator'
    },
    {
      id: 4,
      title: "D&D 3.5 NPC Builder (depreciated)",
      img: IMG4,
      description:
        "A tool from early on when I was learning javascript. The new and improved version I'm working on is the Character Creator, which gathers its data via API call and displays it using React and Bootstrap. Since I did not know these technologies back then, this was an early attempt to just script things out with pure js and work entirely in styles.css.",
      technologies: "HTML | JS",
      siteLink: "https://dnd-3-5-character-builder-depreciated.onrender.com/",
      gitLink:'https://github.com/windikite/dnd-character-builder'
    }
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="container portfolio__container">
              <div className="portfolio__item-cta">
                <a
                  href={pro.siteLink}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Visit Site
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.gitLink}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
