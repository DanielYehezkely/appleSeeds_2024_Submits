import React, { useState, useEffect } from 'react';
import BoxComponent from './components/BoxComponent/BoxComponent';


function App() {
  const [boxes, setBoxes] = useState([]);

  const boxSizes = [
    { id: 1, width: '20rem', height: '10rem' },
    { id: 2, width: '15rem', height: '8rem' },
    { id: 3, width: '25rem', height: '12rem' }
  ];

  useEffect(() => {
   
    const showBoxes = setTimeout(() => {
      setBoxes(boxSizes);
    }, 1000);

    const removeBoxes = setTimeout(() => {
      setBoxes([]);
    }, 4000);

    return () => {
      clearTimeout(showBoxes);
      clearTimeout(removeBoxes);
    };
  }, []);

  return (
    <div className="hero-container">
      <h1>Box Animation</h1>
      {boxes.map(box => (
        <BoxComponent key={box.id} width={box.width} height={box.height} />
      ))}
    </div>
  );
}

export default App;