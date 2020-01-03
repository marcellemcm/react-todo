import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TasksAdd from './pages/TasksAdd/index';
import TasksAll from './pages/TasksAll/index';
import NotFound from './components/NotFound/index';
import Layout from './pages/_layout/index';

export default function Routes({ component: Component, ...rest }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Layout>
                <TasksAdd {...props} />
              </Layout>
            )}
          />
          <Route
            path="/tasks"
            render={props => (
              <Layout>
                <TasksAll {...props} />
              </Layout>
            )}
          />
          <Route
            path="*"
            render={props => (
              <Layout>
                <NotFound {...props} />
              </Layout>
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
