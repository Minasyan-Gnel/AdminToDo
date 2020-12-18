import React, { FC, useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserService from '../../services/user-service';
import { UsersContext } from '../../contexts/users-context';
import { UsersListHeader } from '../../components/users-list-header/users-list-header';
import { UsersListBody } from '../../components/users-list-body/users-list-body';
import { UsersListFooter } from '../../components/users-list-footer/users-list-footer';
import { NewUser } from '../../components/new-user/new-user';
import { usersListStyles } from './users-list-styles';

export const UsersList: FC = () => {
  const { methods } = useContext(UsersContext);

  useEffect(() => {
    (async () => {
      // this call for getting users total count because api dosn`t have that route
      const [count] = await UserService.getUsersCount();
      methods.setUsersTotalCount(count);
    })();
  }, []);

  return (
    <div className={usersListStyles}>
      <UsersListHeader />
      <Switch>
        <Route path="/new-user">
          <NewUser />
        </Route>
        <Route path="/edit-user">
          <NewUser />
        </Route>
        <Route path="/">
          <UsersListBody />
          <UsersListFooter />
        </Route>
      </Switch>
    </div>
  );
};
