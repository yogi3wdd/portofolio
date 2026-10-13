import Home from './Home';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Certificate from './Certificate';
import Contact from './Contact';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SectionWrapper = ({ children, id, setActiveSection }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            setActiveSection(id);
            window.history.replaceState(null, '', `#${id}`);
        }
    }, [isInView, id, setActiveSection]);

    return (
        <section id={id} ref={ref}>
            {children}
        </section>
    );
};

const Merge = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const frameId = requestAnimationFrame(() => {
            document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                block: 'start',
            });
        });

        return () => cancelAnimationFrame(frameId);
    }, [hash]);

    const handleSetActive = (id: string) => {
        const event = new CustomEvent('sectionChange', { detail: id });
        window.dispatchEvent(event);
    };

    return (
        <div className="flex flex-col w-full bg-[#1A1A1A]">
            <SectionWrapper id="home" setActiveSection={handleSetActive}><Home /></SectionWrapper>
            <SectionWrapper id="about" setActiveSection={handleSetActive}><About /></SectionWrapper>
            <SectionWrapper id="skill" setActiveSection={handleSetActive}><Skill /></SectionWrapper>
            <SectionWrapper id="project" setActiveSection={handleSetActive}><Projects /></SectionWrapper>
            <SectionWrapper id="certificate" setActiveSection={handleSetActive}><Certificate /></SectionWrapper>
            <SectionWrapper id="contact" setActiveSection={handleSetActive}><Contact /></SectionWrapper>
        </div>
    );
};

export default Merge;