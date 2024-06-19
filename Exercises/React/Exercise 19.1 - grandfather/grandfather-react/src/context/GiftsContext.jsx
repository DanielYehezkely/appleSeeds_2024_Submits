import React, { createContext, useState } from 'react';
import { useContext } from 'react';

export const GiftsContext = createContext();

export const GiftsProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftsContext.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftsContext.Provider>
  );
};

export const useGifts = () => {
  const context = useContext(GiftsContext);
  return context;
};