import React from "react";

import { useFetchApi } from "../../context/FetchApiContext";

import './DataContainer.css';

const DataContainer = ({ showData }) => {
  const { data, error, isLoading } = useFetchApi();

  if (!showData) {
    return null;
  }

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="DataContainer">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="item" key={index}>{item.name}</div>
        ))
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  );
};

export default DataContainer;