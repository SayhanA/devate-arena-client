import React from 'react';
import { Controller } from 'react-hook-form';

const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  control, 
  ...rest
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              className={`form-input ${error ? 'error' : ''}`}
              {...rest}
            />
            {error && <span className="error-message">{error.message}</span>}
          </>
        )}
      />
    </div>
  );
};

export default Input;