import React, { FC } from 'react';

import { ListBody } from './list-body/list-body';
import { ListHeader } from './list-header/list-header';
import { usersListBodyStyles } from './users-list-body-styles';

export const UsersListBody: FC = () => (
  <div className={usersListBodyStyles}>
    <ListHeader />
    <ListBody />
  </div>
);
