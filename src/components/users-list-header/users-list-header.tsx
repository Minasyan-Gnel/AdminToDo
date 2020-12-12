import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { usersListHeaderStyles } from './users-list-header-styles';

export const UsersListHeader: FC = () => {
  const { pathname } = useLocation();

  const inNewUserPage = useMemo(() => (
    pathname === '/new-user'
  ), [pathname]);

  return (
    <div className={usersListHeaderStyles}>
      <span>{inNewUserPage ? 'New User' : 'All users'}</span>
      <div />
      {!inNewUserPage ? <Link to="/new-user">New user</Link> : null}
    </div>
  );
};
