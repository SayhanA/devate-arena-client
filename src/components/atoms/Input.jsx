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
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm text-text-lite font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
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
              className={`border text-text-dark py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-text-lite/50 ${
                error ? 'border-red-500' : 'border-border'
              }`}
              {...rest}
            />
            {error && (
              <span className="text-sm text-red-500 mt-1">{error.message}</span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Input;
