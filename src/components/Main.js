import React from 'react';
import Scroll from 'react-scroll';

import Header from './Header';
import UnderlinedText from './UnderlinedText';

const Main = ({ colorName, changeColor }) => {
  return (
    <div className="main">
      <Header />
      <div className="main--container">
        <div className="main--left">
          <h1>
            Hi!
          </h1>
          <h1>
            I’m <UnderlinedText text="Natalie Despain" colorName={colorName} />, a full-stack web developer with a passion for <UnderlinedText text="clean" colorName={colorName} />, <UnderlinedText text="beautiful" colorName={colorName} /> code and finding creative solutions to <UnderlinedText text="challenging" colorName={colorName} /> problems.
          </h1>
        </div>
        <div className="main--right">
          <div className="colors">
            <div
              onClick={() => changeColor('turquoise')}
              className={colorName === 'turquoise' ? 'color color-turquoise color-outline' : 'color color-turquoise'}
              role="button"
            />
            <div
              onClick={() => changeColor('pink')}
              className={colorName === 'pink' ? 'color color-pink color-outline' : 'color color-pink'}
              role="button"
            />
            <div
              onClick={() => changeColor('yellow')}
              className={colorName === 'yellow' ? 'color color-yellow color-outline' : 'color color-yellow'}
              role="button"
            />
            <div
              onClick={() => changeColor('blue')}
              className={colorName === 'blue' ? 'color color-blue color-outline' : 'color color-blue'}
              role="button"
            />
          </div>
          <Scroll.Link to="about" spy smooth duration={500}>
            <div className="arrow" />
          </Scroll.Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
