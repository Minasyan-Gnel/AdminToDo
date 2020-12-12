import React, { FC, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Icon } from '../shared/icon/icon';
import {
  rightMenuStyles, rightMenuHeaderStyles, rightMenuItemsContainerStyles, rightMenuItemStyles,
  rightMenuItemActiveStyles,
} from './right-menu-styles';

export const RightMenu: FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const menuItemClickHandler = useCallback(() => (
    history.push('/')
  ), []);

  return (
    <div className={rightMenuStyles}>
      <div className={rightMenuHeaderStyles} />
      <ul className={rightMenuItemsContainerStyles}>
        <li
          onClick={menuItemClickHandler}
          className={`${rightMenuItemStyles} ${pathname === '/' ? rightMenuItemActiveStyles : ''}`}
        >
          <Icon icon="users" size={17} />
          <span>Users</span>
        </li>
      </ul>
    </div>
  );
};
