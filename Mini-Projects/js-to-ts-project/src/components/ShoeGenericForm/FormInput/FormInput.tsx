import React from "react";
import "./FormInput.css";

interface Props {
  label: string;
  id: string;
  type?: string; 
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
}

const FormInput: React.FC<Props> = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  className,
}) => (
  <div className="input-group">
    <label htmlFor={id}>{label}:</label>
    {type === "textarea" ? (
      <textarea id={id} value={value} onChange={onChange} />
    ) : (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={className}
      />
    )}
  </div>
);

export default FormInput;
