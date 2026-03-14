import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import LocomotiveScrollProvider from '@/components/Helper/LocomotiveScrollProvider';
import ScrollToTop from '@/components/Helper/ScrollToTop';

const Home = () => {
    return (
        <div className="overflow-hidden ">
            <Hero />
            <About />
            <LocomotiveScrollProvider>
                <Experience />
            </LocomotiveScrollProvider>
            <Skills />
            <Project />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;
