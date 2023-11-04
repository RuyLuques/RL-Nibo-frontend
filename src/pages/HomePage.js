import React from 'react';
import Home from '../components/Home/Home';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import SEO from '../components/SEO/Seo';

function HomePage () {
    return (
        <div>
            <Home />
            <Technologies />
            <Projects />
            <SEO />
            <Services />
        </div>
    );
};

export default HomePage;
