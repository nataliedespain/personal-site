import React from 'react';
import FontAwesome from 'react-fontawesome';

import SectionHeader from './SectionHeader';
import UnderlinedText from './UnderlinedText';

const About = ({ colorName }) => {
  return (
    <div className="section section--about" id="about">
      <div className="section--left">
        <h1>
          <SectionHeader text="About" colorName={colorName} />
        </h1>
      </div>
      <div className="section--right">
        <div className="side-img side-img--me" />
        <p className="bold">Natalie Despain</p>
        <br />
        <p>
          I am a full time student in the Galvanize Web Development immersive program, and a recent graduate from the University of Arizona with a BFA in Studio Art and a minor in Psychology. While in school, I started my journey as a hobbyist web developer with a focus on front end design interested in the creativity and challenges of coding. I am taking my skills to the next level and will be completing Galvanize's program in December, after which I plan to pursue a career as a full-stack web developer.
        </p>
        <br />
        <p>
          <a className="link arrow-move" href="mailto:despain.natalie@gmail.com">
            <UnderlinedText text="despain.natalie@gmail.com" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
