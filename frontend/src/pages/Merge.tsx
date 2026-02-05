import Home from './Home';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Certificate from './Certificate';
import Contact from './Contact';

const Merge = () => {
  return (
    <div className="flex flex-col w-full bg-[#1a1a1a]">
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certificate">
        <Certificate />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Merge;