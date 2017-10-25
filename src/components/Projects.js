import React from 'react';
import FontAwesome from 'react-fontawesome';

import SectionHeader from './SectionHeader';
import UnderlinedText from './UnderlinedText';

const About = ({ colorName }) => {
  return (
    <div className="section section--projects" id="projects">
      <div className="section--left">
        <h1>
          <SectionHeader text="Projects" colorName={colorName} />
        </h1>
      </div>
      <div className="section--right">
        <div className="section--right-desc">
          <div className="side-img side-img--flow" />
          <p className="bold">Flow</p>
          <br />
          <p>
            Mobile application created with React Native that allows users to log in and record habits they want to perform daily and check them off when completed. The dashboard shows visual data about the user’s progress for the current day and the past week, while the individual habit page presents the past week and the current month’s data.
          </p>
          <br />
          <p>
            <a className="link arrow-move" href="https://github.com/nataliedespain/flow" target="_blank" rel="noopener noreferrer">
              <UnderlinedText text="View on Github" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
            </a>
          </p>
          <p>
            <a className="link arrow-move" href="https://www.youtube.com/watch?v=pFiC-lqSnIg" target="_blank" rel="noopener noreferrer">
              <UnderlinedText text="Watch Demo" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
            </a>
          </p>
        </div>
        <div className="section--right-desc">
          <div className="side-img side-img--petsit" />
          <p className="bold">petSit</p>
          <br />
          <p>
            Interactive platform where users can either request for their pet to be watched or log on and watch another user's pet and see a dashboard of requests. Users can also view and leave ratings and reviews for other pet sitters or pets they have watched.  (Group project)
          </p>
          <br />
          <p>
            <a className="link arrow-move" href="https://github.com/nataliedespain/petsit" target="_blank" rel="noopener noreferrer">
              <UnderlinedText text="View on Github" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
            </a>
          </p>
          <p>
            <a className="link arrow-move" href="https://www.youtube.com/watch?v=kw90Z45LPsI" target="_blank" rel="noopener noreferrer">
              <UnderlinedText text="Watch Demo" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
            </a>
          </p>
        </div>
        <div className="section--right-desc">
          <div className="side-img side-img--eatapp" />
          <p className="bold">EatApp!</p>
          <br />
          <p>
            A way to search for recipes based on the ingredients you already have in your kitchen. Input a few ingredients and recipes pulled from an API will be shown that use those ingredients.
          </p>
          <br />
          <p>
            <a className="link arrow-move" href="https://github.com/nataliedespain/q1-project" target="_blank" rel="noopener noreferrer">
              <UnderlinedText text="View on Github" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
            </a>
          </p>
          <p>
            <a className="link arrow-move" href="http://eatapp.surge.sh/" target="_blank" rel="noopener noreferrer">
              <UnderlinedText text="View Live" colorName={colorName} small /><FontAwesome className="arrow-icon" name="long-arrow-right" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
