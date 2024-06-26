import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getShoes,
  getShoeById,
  addShoe,
  updateShoe,
  deleteShoe,
} from "../api/shoeApi";
import { ContextProviderProps, Shoe } from "@/models/models";

interface FetchShoeProps {
  error: string | null | { message: string };
  isLoading: boolean;
  shoes: Shoe[];
  fetchShoes: () => Promise<void>;
  fetchShoeById: (shoeId: string) => Promise<void>;
  isSingleShoeLoading: boolean;
  singleShoeError: string | null | { message: string };
  singleShoe: Shoe | null;
  addNewShoe: (shoeData: Shoe) => Promise<void>;
  updateExistingShoe: (shoeData: Shoe) => Promise<void>;
  deleteExistingShoe: (shoeId: string) => Promise<void>;
}

const FetchShoesContext = createContext<FetchShoeProps | undefined>(undefined);

export const FetchShoesProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState<string | null | { message: string }>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [singleShoe, setSingleShoe] = useState<Shoe | null>(null);
  const [isSingleShoeLoading, setIsSingleShoeLoading] =
    useState<boolean>(false);
  const [singleShoeError, setSingleShoeError] = useState<
    string | null | { message: string }
  >(null);

  const fetchShoes = async (): Promise<void> => {
    setError(null);
    setIsLoading(true);
    try {
      const shoesData = await getShoes();
      setShoes(shoesData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchShoeById = async (shoeId: string): Promise<void> => {
    setSingleShoeError(null);
    setIsSingleShoeLoading(true);
    try {
      const shoeData = await getShoeById(shoeId);
      setSingleShoe(shoeData);
    } catch (error: any) {
      setSingleShoeError(error.message);
    } finally {
      setIsSingleShoeLoading(false);
    }
  };

  const addNewShoe = async (shoeData: Shoe): Promise<void> => {
    try {
      await addShoe(shoeData);
      fetchShoes();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const updateExistingShoe = async (shoeData: Shoe): Promise<void> => {
    try {
      await updateShoe(shoeData);
      fetchShoes();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const deleteExistingShoe = async (shoeId: string): Promise<void> => {
    setError(null);
    setIsLoading(true);
    try {
      await deleteShoe(shoeId);
      fetchShoes();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  return (
    <FetchShoesContext.Provider
      value={{
        error,
        isLoading,
        shoes,
        fetchShoes,
        fetchShoeById,
        isSingleShoeLoading,
        singleShoeError,
        singleShoe,
        addNewShoe,
        updateExistingShoe,
        deleteExistingShoe,
      }}
    >
      {children}
    </FetchShoesContext.Provider>
  );
};

export const useFetchShoes = (): FetchShoeProps => {
  const context = useContext(FetchShoesContext);
  if (!context) {
    throw new Error("useFetchShoes must be used within a FetchShoesProvider");
  }
  return context;
};
