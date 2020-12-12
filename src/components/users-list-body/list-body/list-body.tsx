import React, { FC, useContext } from 'react';

import { UsersContext } from '../../../contexts/users-context';
import { ListRow } from '../list-row/list-row';

export const ListBody: FC = () => {
  const { usersData } = useContext(UsersContext);

  return (
    <React.Fragment>
      {usersData.map((user) => (<ListRow key={user.id} userData={user} />))}
    </React.Fragment>
  );
};
