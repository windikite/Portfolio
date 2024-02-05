import Container from 'react-bootstrap/container';
import SiteCard from './components/SiteCard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar />
      <Container className='d-flex column-gap-3 --bs-dark-bg-subtle'>
        <SiteCard 
          title='FFXIV Gearset Manager' 
          text='This app takes etro.gg links, calls their API for information on the provided gearset and builds a collection on the page. Uses React and Bootstrap, developed using JS.' 
          button='Visit Site' 
          src='./366e9ae9394446c6e6eab51baf8b4c7d1.png' 
          siteLink='https://ffxiv-gearset-manager.onrender.com/'
          gitLink='https://github.com/windikite/FFXIV-Raid-Manager'
          />
        <SiteCard 
          title='D&D 3.5 Backpack' 
          text='A CRUD site and API for Dungeons and Dragons 3.5. Uses Express/Node, MongoDB for the database, Bcrypt for authentication and EJS for SSR and templating.' 
          button='Visit Site' 
          src='./1dde13259f2b23baa5eea5dd83dce5c8.png'
          siteLink='https://dnd-3-5-backpack.onrender.com/'
          gitLink='https://github.com/windikite/DnD-3.5-Backpack'
        />
        <SiteCard 
          title='D&D 3.5 Character Creator' 
          text='An app for creating characters in D&D 3.5 using data from my D&D 3.5 Backpack api. Built with React and Bootstrap, developed using JS.' 
          button='Visit Site' 
          src='./724c1ec5601ca501e3b0798f2bda8ca4.png'
          siteLink='https://dnd-3-5-character-creator.onrender.com/'
          gitLink='https://github.com/windikite/DnD-3.5-Character-Creator'
        />
      </Container>
    </Container>
    
  );
}

export default App;
