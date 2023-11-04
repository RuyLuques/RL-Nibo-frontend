import React from 'react';
import Home from '../components/Home/Home';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';

function HomePage () {
    return (
        <div>
            <Home />
            <Technologies />
            <Projects />
            <Services />
        </div>
    );
};

export default HomePage;
