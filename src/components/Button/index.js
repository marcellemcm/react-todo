import React from 'react';

import { ButtonStyle } from './styles';

export default function Button({ type, label }) {
  return <ButtonStyle type={type}>{label}</ButtonStyle>;
}
