import React from 'react';
import './BoxComponent.css';

const BoxComponent = ({ width, height }) => {
  return <div className="BoxComponent" style={{ width, height }}></div>;
};

export default BoxComponent;