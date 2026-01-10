import Hero from './hero/Hero.tsx';
import NavigationBar from './navigation_bar/NavigationBar.tsx';
import Projects from './projects/Projects.tsx';
import Contact from './contact/Contact.tsx';
import Footer from './footer/Footer.tsx';

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
