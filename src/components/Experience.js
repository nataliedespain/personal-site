import React from 'react';

import SectionHeader from './SectionHeader';
import UnderlinedText from './UnderlinedText';

const Experience = ({ colorName }) => {
  return (
    <div className="section section--projects" id="experience">
      <div className="section--left">
        <h1>
          <SectionHeader text="Experience" colorName={colorName} />
        </h1>
      </div>
      <div className="section--right">
        <div className="section--right-desc">
          <p className="bold">Axiom Coding</p>
          <p><UnderlinedText text="Intern" colorName={colorName} small /></p>
          <br />
          <p>
            Assisted the CEO for computer programming education company designed to teach middle and high school students full-stack application development
          </p>
          <p>
            Edited and provided feedback for all instructional materials including  tutorials, code challenges, and testing files
          </p>
          <p>
            Created code challenges written in Ruby, HTML, and CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
