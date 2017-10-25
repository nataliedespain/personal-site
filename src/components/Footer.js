import React from 'react';
import FontAwesome from 'react-fontawesome';

import UnderlinedText from './UnderlinedText';

const Footer = ({ colorName }) => {
  return (
    <div className="footer">
      <div className="footer--container">
        <a href="https://www.linkedin.com/in/natalie-despain/">
          <div className={`icon-circle ${colorName}--circle`}>
            <FontAwesome name="linkedin" />
          </div>
        </a>
        <a href="https://github.com/nataliedespain">
          <div className={`icon-circle ${colorName}--circle`}>
            <FontAwesome name="github" />
          </div>
        </a>
        <a href="mailto:despain.natalie@gmail.com">
          <div className={`icon-circle ${colorName}--circle`}>
            <FontAwesome name="envelope" />
          </div>
        </a>
      </div>
      <a className="link link--footer" href="/">
        <UnderlinedText text="View Source Code" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
      </a>
    </div>
  );
};

export default Footer;
