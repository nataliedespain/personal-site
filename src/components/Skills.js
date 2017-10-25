import React from 'react';
import FontAwesome from 'react-fontawesome';

import SectionHeader from './SectionHeader';
import UnderlinedText from './UnderlinedText';

const Skills = ({ colorName }) => {
  return (
    <div className="section section--skills">
      <div className="section--left">
        <h1>
          <SectionHeader text="Skills" colorName={colorName} />
        </h1>
      </div>
      <div className="section--right">
        <div className="section--right-column">
          <p>HTML</p>
          <p>CSS / SASS</p>
          <p>Javascript / ES6</p>
          <p>AJAX</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>PostgreSQL</p>
        </div>
        <div className="section--right-column">
          <p>React</p>
          <p>React Native</p>
          <p>Redux</p>
          <p>Vue</p>
          <p>Vuex</p>
          <p>jQuery</p>
        </div>
        <div className="section--right-column">
          <p>Git / Github</p>
          <p>Knex</p>
          <p>Photoshop</p>
          <p>Illustrator</p>
          <p>Experience Design</p>
          <p>Shopify</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
