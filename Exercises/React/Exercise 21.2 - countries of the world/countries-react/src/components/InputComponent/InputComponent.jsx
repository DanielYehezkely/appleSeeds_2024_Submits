import React from "react";
import './InputComponent.css';

const InputComponent = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="InputComponent">
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      
    </div>
  );
};

export default InputComponent;