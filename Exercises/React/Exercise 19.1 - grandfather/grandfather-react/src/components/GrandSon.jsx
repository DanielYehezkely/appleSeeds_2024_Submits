
import { useGifts } from '../context/GiftsContext';

export const Grandson = () => {
  const { gifts } = useGifts();

  return (
    <div>
      <h4>Grandson Component</h4>
      <h5>Gifts:</h5>
      <ul>
        {gifts.map((gift, index) => (
          <li key={index}>{gift}</li>
        ))}
      </ul>
    </div>
  );
};