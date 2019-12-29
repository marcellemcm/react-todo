import React from 'react';

import GlobalStyle from './styles/global';
import TaskList from './components/TaskList/index';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <TaskList />
    </>
  );
}
