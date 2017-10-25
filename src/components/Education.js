import React from 'react';

import SectionHeader from './SectionHeader';
import UnderlinedText from './UnderlinedText';

const Education = ({ colorName }) => {
  return (
    <div className="section section--education" id="education">
      <div className="section--left">
        <h1>
          <SectionHeader text="Education" colorName={colorName} />
        </h1>
      </div>
      <div className="section--right">
        <div className="section--right-desc">
          <p className="bold">Galvanize</p>
          <p><UnderlinedText text="Web Development Student" colorName={colorName} small /></p>
          <br />
          <p>
            Taught by industry-aligned, full-time faculty, Galvanize’s 24-week in-person immersive program is an intense, hands-on coding and interactive classroom instruction, based upon the foundation of computer science theory, statistics, and software engineering.
          </p>
        </div>
        <div className="section--right-desc">
          <p className="bold">University of Arizona</p>
          <p><UnderlinedText text="Bachelor of Fine Arts" colorName={colorName} small /></p>
          <br />
          <p>
            Major - Studio Art
          </p>
          <p>
            Minor - Psychology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
