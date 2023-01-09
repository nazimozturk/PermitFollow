import React from 'react';
import { useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="formInput">
        <label className="formLabel">{label}</label>
        <input
          className="formInput2"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === 'confirmPassword' && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span className="formSpan">{errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;
