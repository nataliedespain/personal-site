import React from 'react';

const SectionHeader = ({ text, colorName }) => {
  return (
    <div className="section--header">
      <span className={`${colorName} ${colorName}--header`}>
        {text}
      </span>
    </div>
  );
};

export default SectionHeader;
