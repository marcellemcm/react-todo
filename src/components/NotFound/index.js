import React from 'react';
import page404 from '../../assets/page_not_found.png';

import { ContainerImg } from '../../styles/tasks';

export default function NotFound() {
  return (
    <ContainerImg>
      <img src={page404} alt="Page Not Found" />
    </ContainerImg>
  );
}
