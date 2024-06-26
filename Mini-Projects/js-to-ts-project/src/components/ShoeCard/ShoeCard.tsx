import React from "react";
import { useNavigate } from "react-router";

import { truncateText } from "../../utils/limitWords";
import { useAdmin } from "../../context/CheckAdminContext";
import { Shoe } from "@/models/models";

import './ShoeCard.css';

interface ShoeCardProps {
  shoe: Shoe;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {

  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate(`/shoes/${shoe.id}`); 
  };

  return (
    <div className="ShoeCard" onClick={handleNavigate}>
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <div className="shoe-description">
        <h3 className="shoe-name">{shoe.name}</h3>
        <p className="shoe-info">{truncateText(shoe.info, 20)}</p>
        <p className="shoe-price">${shoe.price}</p>
      </div>
      <button className={`btn ${isAdmin ? 'details-button' : 'buy-button'}`}>{isAdmin ? 'Details' : 'Buy Now'}</button>
    </div>
  );
};

export default ShoeCard;