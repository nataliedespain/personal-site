import React from 'react';

import SectionHeader from './SectionHeader';

const Art = ({ pic1, pic2, pic3, toggleHeight, colorName }) => {
  return (
    <div className="section section--art" id="art">
      <div className="section--left">
        <h1>
          <SectionHeader text="Art" colorName={colorName} />
        </h1>
      </div>
      <div className="section--right">
        <div
          className="artimg artimg1"
          style={{ height: pic1 }}
          onClick={() => toggleHeight(1)}
        />
        <div
          className="artimg artimg2"
          style={{ height: pic2 }}
          onClick={() => toggleHeight(2)}
        />
        <div
          className="artimg artimg3"
          style={{ height: pic3 }}
          onClick={() => toggleHeight(3)}
        />
      </div>
    </div>
  );
};

export default Art;
