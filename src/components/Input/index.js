import React from 'react';

import { InputStyle } from './styles';

export default function Input({
  onChange,
  value,
  name,
  checked,
  placeholder,
  type,
}) {
  return (
    <InputStyle
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      checked={checked}
      placeholder={placeholder}
    />
  );
}
