import "./portfolio.css";

import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/IMG5.png";
import IMG6 from "../../assets/IMG6.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "FFXIV Gearset Manager",
      img: IMG1,
      description:
        "Groups of players in the MMORPG FFXIV normally use spreadsheets to manually track and coordinate the sets of equipment needed among the group. I developed this application to expedite the process, automatically calculating the resources required to acquire those sets for each person. Users can input a link from the popular equipment selector Etro.gg, which will be used via API call to fetch data directly from Etro. The data is checked against an internal dataset to determine the currencies or items needed for the entire set. Finally, relevant information is provided to the user based on the fetched data for the set’s statistics, as well as the ‘shopping list’ my site generates.",
      technologies: "React | Bootstrap | JS",
      siteLink: "https://ffxiv-gearset-manager.onrender.com/",
      gitLink:'https://github.com/windikite/FFXIV-Raid-Manager'
    },
    {
      id: 2,
      title: "D&D 3.5 Backpack",
      img: IMG2,
      description:
        "While there are APIs for other editions of Dungeons and Dragons, there was no such thing for the 3.5th edition in any form. I sought to remedy that by building both an API that can handle calls to modify data on my database, as well as a CRUD site for users to interact with. Currently, users can log in, favorite items, easily make requests and be provided with relevant data in return.",
      technologies: "Node |Express | MongoDB | Bcrypt | JS | EJS",
      siteLink: "https://dnd-3-5-backpack.onrender.com/",
      gitLink:'https://github.com/windikite/DnD-3.5-Backpack'
    },
    {
      id: 3,
      title: "D&D 3.5 Character Creator",
      img: IMG3,
      description:
        "For Dungeons and Dragons character creators specific to the 3.5th edition, the options are either very basic and only cover the core rulebook, or extremely expansive but unwieldy to use with no explanation of the available options presented. I developed this application specifically to provide an alternative; one that could easily have its dataset expanded to cover all desired material, but be displayed and interacted with in a modern framework. Users can currently complete the beginning steps of character creation and have their choices be reflected in an information pane above, compiling useful information for their convenience.",
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
    },
    {
      id: 5,
      title: "FFXIV Webscraper",
      img: IMG5,
      description:
        "During the development of the FFXIV Gearset Manager, I was faced with a problem; there exists no easy way to generate the dataset I would need to check user gearsets against. I needed a list of every relevant piece of equipment in the game and the required currencies and materials to acquire it, as well as the same for every material that could be bought or traded for. The FFIV official site does have the information on it, but no API. I opted to learn python and BeautifulSoup4 to scrape the information I needed straight off of the web page and repackage into an itemized JSON file for ease of use later. This was a success, and provided both an important piece of the site I was developing as well as an excellent opportunity to learn a new tool.",
      technologies: "Python | Beautiful Soup 4",
      siteLink: "",
      gitLink:'https://github.com/windikite/WebScraper'
    },
    {
      id: 6,
      title: "Django and SQLite Commerce Site",
      img: IMG6,
      description:
        "A commerce site that allows for users to log in and create auction listings, as well as watch and comment on them. Data is stored in a SQLite database. ",
      technologies: "Python | Django | SQLite",
      siteLink: "",
      gitLink:'https://github.com/windikite/Commerce-Site'
    }
  ];

  function checkSites(site){
    let siteButton;
    let gitButton;

    if(site.siteLink !== ""){
      siteButton = <a
        href={site.siteLink}
        target="_blank"
        className="btn btn-primary"
        rel="noreferrer"
      >
        Visit Site
      </a>
    }
    
    if(site.gitLink !== ""){
      gitButton = <a
        href={site.gitLink}
        target="_blank"
        className="btn btn-primary"
        rel="noreferrer"
      >
        Github Repo
      </a>
    }

    return (
      <div className="portfolio__item-cta">
        {siteButton}
        {gitButton}
      </div>
    )
    
  }

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
              <p>{pro.technologies}</p>
              <p>{pro.description}</p>
            </div>
            <div className="container links">
              {checkSites(pro)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
