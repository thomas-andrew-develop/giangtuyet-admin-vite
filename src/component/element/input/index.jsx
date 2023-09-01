import React from 'react';

const InputCustom = ({
  type = 'text',
  value,
  name = '',
  onChange,
  placeholder = 'Placeholder',
  className = '',
  minWidth,
  full = false,
  ...props
}) => {
  return (
    <div className={`form-panel-group ${className} ${full && 'full'}`}>
      <input
        type={type}
        value={value}
        name={name}
        style={{ minWidth }}
        className="form-panel-input"
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default InputCustom;
