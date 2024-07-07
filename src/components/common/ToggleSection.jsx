import React from 'react';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

const ToggleSection = ({ activeSection }) => {
    switch (activeSection) {
        case 'Experience':
            return <Experience />;
        case 'Projects':
            return <Projects />;
        case 'Contact':
            return <Contact />;
        default:
            return;
    }
}

export default ToggleSection;