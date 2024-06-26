import React from "react";

import './ErrorMessage.css'

interface Prop {
  error: any;
}

const ErrorMessage: React.FC<Prop> = ({error}) => {
  return <div className="ErrorMessage">{`Error: ${error}`}</div>;
};

export default ErrorMessage;
