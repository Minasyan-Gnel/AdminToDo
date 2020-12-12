import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersProvider from '../../contexts/users-context';
import { RightMenu } from '../../components/right-menu/right-menu';
import { Header } from '../../components/header/header';
import { UsersList } from '../users-list/users-list';
import { layoutStyles, layoutBodyStyles } from './layout-styles';

export const Layout: FC = () => (
  <UsersProvider>
    <Router>
      <div className={layoutStyles}>
        <RightMenu />
        <div className={layoutBodyStyles}>
          <Header />
          <Switch>
            <Route path="/"><UsersList /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  </UsersProvider>

);
