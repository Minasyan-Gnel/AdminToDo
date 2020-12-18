import React, { FC, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserService from '../../../services/user-service';
import { Icon } from '../../shared/icon/icon';
import { UserModel } from '../../../models/UserResponseModel';
import {
  listRowStyles, listRowColStyles, checkboxColStyles, actionBtnStyles,
  trashBtnStyles, avatarStyles,
} from './list-row-styles';
import { UsersContext } from '../../../contexts/users-context';

type ListRowProps = {
    userData: UserModel,
};

type ColumnDefinitionType = {
  fieldName: string,
  shrink: number,
}

const columnDefinition: ColumnDefinitionType[] = [
  {
    fieldName: 'checkbox',
    shrink: 1.106,
  },
  {
    fieldName: 'photo',
    shrink: 1.112,
  },
  {
    fieldName: 'name',
    shrink: 1.007,
  },
  {
    fieldName: 'location',
    shrink: 0.965,
  },
  {
    fieldName: 'registeredDate',
    shrink: 1.009,
  },
  {
    fieldName: 'lastActiveDate',
    shrink: 0.812,
  },
  {
    fieldName: 'email',
    shrink: 1.044,
  },
  {
    fieldName: 'actions',
    shrink: 1.087,
  },
];

export const ListRow: FC<ListRowProps> = ({ userData }) => {
  const { orders, page, methods } = useContext(UsersContext);
  const history = useHistory();

  const handleRowClick = useCallback(() => {
    methods.selectUser(userData);
    history.push('/edit-user');
  }, []);

  const deleteUser = useCallback(async () => {
    await UserService.deleteUser(userData.id);
    const [data] = await UserService.getUsersList(page, 10, orders);
    methods.updateUsers(data);
  }, [page, orders]);

  const disableUser = useCallback(async () => {
    await UserService.editUser({
      ...userData,
      disabled: !userData.disabled
    });
    const [data] = await UserService.getUsersList(page, 10, orders);
    methods.updateUsers(data);
  }, [userData]);

  const getColContent = (col: ColumnDefinitionType, i: number) => {
    switch (col.fieldName) {
      case 'checkbox':
        return (
          <div className={`${listRowColStyles(col.shrink)} ${checkboxColStyles}`} key={i}>
            <input type="checkbox" />
          </div>
        );
      case 'photo':
        return (
          <div className={listRowColStyles(col.shrink)} key={i}>
            <img className={avatarStyles} alt="avatar" src={userData[col.fieldName]} />
          </div>
        );
      case 'email':
        return (
          <div className={listRowColStyles(col.shrink)} key={i}>
            <Icon icon={col.fieldName} size={20} />
          </div>
        );
      case 'actions':
        return (
          <div
            className={listRowColStyles(col.shrink)}
            key={i}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={actionBtnStyles} onClick={disableUser}><Icon icon={userData.disabled ? 'deactivatedSwitch' : 'aciveSwitch'} size={20} /></button>
            <button className={`${actionBtnStyles} ${trashBtnStyles}`} onClick={deleteUser}><Icon icon="trash" size={14} /></button>
          </div>
        );
      default:
        return (
          <div className={listRowColStyles(col.shrink)} key={i}>
            <span>{userData[col.fieldName]}</span>
          </div>
        );
    }
  };

  return (
    <div className={listRowStyles} onClick={handleRowClick}>
      {columnDefinition.map(getColContent)}
    </div>
  );
};
