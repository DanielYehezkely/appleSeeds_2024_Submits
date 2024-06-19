import React, { useContext } from 'react';
import { Son } from './Son';
import { useGifts } from '../context/GiftsContext';


export const Father = () => {
  const { setGifts } = useGifts();

  const gifts = ['Toy Car', 'Bicycle', 'Puzzle', 'Doll'];
  setGifts(gifts);

  return (
    <div>
      <h2>Father Component</h2>
      <Son />
    </div>
  );
};