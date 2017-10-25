import React from 'react';

const UnderlinedText = ({ text, colorName, small }) => {
  return (
    <span className={small ? colorName + ` ${colorName}--p` : colorName}>
      {text}
    </span>
  );
};

export default UnderlinedText;
