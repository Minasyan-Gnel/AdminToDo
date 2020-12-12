import React, { FC } from 'react';

import { headerStyles, headerAvatarContainerStyles, avatarStyles, notificationStyles } from './header-styles';
import { Icon } from '../shared/icon/icon';

export const Header: FC = () => (
  <div className={headerStyles}>
    <div className={headerAvatarContainerStyles}>
      <Icon icon="search" size={19} />
      <Icon icon="notification" size={19} className={notificationStyles} />
      <div className={avatarStyles} />
    </div>
  </div>
);
