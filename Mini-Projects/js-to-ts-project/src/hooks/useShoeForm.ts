import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchShoes } from "../context/FetchShoesContext";
import { validateImageUrl } from "../utils/validateImageUrl";
import { FORM_INPUTS_EMPTY_MESSAGE } from "../models/constants";
import { Shoe } from "@/models/models";

interface ShoeFormHook {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  error: string | null;
  invalidImage: boolean;
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const useShoeForm = (initialShoe?: Shoe | null): ShoeFormHook => {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [invalidImage, setInvalidImage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { addNewShoe, updateExistingShoe } = useFetchShoes();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialShoe) {
      setName(initialShoe.name);
      setPrice(initialShoe.price.toString());
      setImage(initialShoe.image);
      setInfo(initialShoe.info);
      setId(initialShoe.id);
    }
  }, [initialShoe]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
    const url = e.target.value;
    setImage(url);
    setInvalidImage(!validateImageUrl(url)); 
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (
      !name.trim() ||
      !id.trim() ||
      !info.trim() ||
      !price.trim() ||
      !image.trim()
    ) {
      setError(FORM_INPUTS_EMPTY_MESSAGE);
      return;
    }

    if (invalidImage) {
      setError("Invalid image URL.");
      return;
    }

    setIsLoading(true);
    const shoeData: Shoe = { name, id, price: parseFloat(price), info, image };

    try {
      if (initialShoe) {
        await updateExistingShoe(shoeData);
        navigate(`/shoes/${initialShoe.id}`);
      } else {
        await addNewShoe(shoeData);
        navigate("/shoes");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    setName,
    info,
    setInfo,
    id,
    setId,
    price,
    setPrice,
    image,
    setImage,
    isLoading,
    error,
    invalidImage,
    handleImageChange,
    handleSubmit,
  };
};

export default useShoeForm;
