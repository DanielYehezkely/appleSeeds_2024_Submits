import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  shoeId: string;
}

const EditButton: React.FC<Props> = ({ shoeId }) => {
  const navigate = useNavigate();

  const handleEditClick = (): void => {
    navigate(`/shoes/${shoeId}/edit`);
  };

  return (
    <button className="btn EditButton" onClick={handleEditClick}>
      Edit Shoe
    </button>
  );
};

export default EditButton;