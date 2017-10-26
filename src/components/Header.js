import React from 'react';
import Scroll from 'react-scroll';

const Header = () => {
  return (
    <div className="header">
      <div className="header--container">
        <Scroll.Link to="about" spy smooth duration={500}>
          ABOUT
        </Scroll.Link>
        <Scroll.Link to="projects" spy smooth duration={500}>
          PROJECTS
        </Scroll.Link>
        <Scroll.Link to="experience" spy smooth duration={500}>
          EXPERIENCE
        </Scroll.Link>
        <Scroll.Link to="education" spy smooth duration={500}>
          EDUCATION
        </Scroll.Link>
        <Scroll.Link to="art" spy smooth duration={500}>
          ART
        </Scroll.Link>
      </div>
    </div>
  );
};

export default Header;
