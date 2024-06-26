import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ShoeGenericForm, ErrorMessage, Loader } from "../../components";
import { useFetchShoes } from "../../context/FetchShoesContext";

import './EditPage.css';

const EditPage = () => {

  const { shoeId } = useParams();
  const { singleShoe, isSingleShoeLoading, singleShoeError, fetchShoeById } = useFetchShoes();

  useEffect(() => {
    if (shoeId) {
      fetchShoeById(shoeId);
    }

  }, [shoeId]);


  return (
    <div className="EditPage">
      {isSingleShoeLoading ? (
        <Loader />
      ) : singleShoeError ? (
        <ErrorMessage error={Error}/>
      ) : (
        <ShoeGenericForm shoe={singleShoe} />
      )}
    </div>
  );
};

export default EditPage;