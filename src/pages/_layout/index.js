import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/index';
import Navbar from '../../components/Navbar/index';

import { Wrapper } from '../../styles/tasks';

export default function Layout({ children }) {
  return (
    <Wrapper>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
