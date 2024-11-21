import Hero from './hero/Hero.js';
import NavigationBar from './navigation_bar/NavigationBar.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import Footer from './footer/Footer.js';

import './Main.css';

function Main() {
  return (
    <>
      <Hero />
      <NavigationBar />
      <div className="main-bg">
        <div className="canvas" />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
