import React from "react";

const InputField = ({ className, label, name, value, setValue }: any) => {
  return (
    <span className={`inputField ${className}`}>
      <label htmlFor={label}>{label}</label>
      <input
        placeholder="Inserisci qui..."
        type="text"
        required
        name={name}
        value={value}
        onChange={setValue}
      />
    </span>
  );
};

export default InputField;
