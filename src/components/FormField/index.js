import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>
        {label}:
        <input
          type={type}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
