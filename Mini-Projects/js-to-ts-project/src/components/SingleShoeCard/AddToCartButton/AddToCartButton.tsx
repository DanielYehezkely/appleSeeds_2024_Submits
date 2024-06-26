import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from 'react-toastify';

import { useCart } from "../../../context/CartContext";
import Loader from "../../Loader/Loader";

import './AddToCartButton.css'
import { Shoe } from "@/models/models";

interface Props {
  shoeItem: Shoe;
}

const AddToCartButton: React.FC<Props> = ({shoeItem}) => {

  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

  const handleAddToCartClick = ():void => {
    setIsAddingToCart(true);
    toast.success(`Adding ${shoeItem.name} to the cart ... `)
    addToCart(shoeItem);

    setTimeout(() => {
      navigate('/shoes');
    }, 4000);
  }

  return (
    <>
      {isAddingToCart ? (<Loader />) : <button className="btn buy-button" onClick={handleAddToCartClick} >Add to Cart</button>}
    <ToastContainer className="toast"/>
    </>
  );
};

export default AddToCartButton;
