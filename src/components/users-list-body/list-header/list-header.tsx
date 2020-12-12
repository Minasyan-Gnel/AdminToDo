import React, { FC, useCallback, useContext } from 'react';
import { UsersContext } from '../../../contexts/users-context';
import { Icon } from '../../shared/icon/icon';
import {
  headerStyles, sortIcnRotatedStyles, sortIconsContainerStyles, colStyles,
  checkboxColStyles,
} from './list-header-styles';

const columnDefinition = [
  {
    name: 'Photo',
    fieldName: 'photo',
    sort: true,
    shrink: 1.112,
  },
  {
    name: 'Name',
    fieldName: 'name',
    sort: true,
    shrink: 1.007,
  },
  {
    name: 'Location',
    fieldName: 'location',
    sort: true,
    shrink: 0.965,
  },
  {
    name: 'Registered date',
    fieldName: 'registeredDate',
    sort: true,
    shrink: 1.009,
  },
  {
    name: 'Last Active Date',
    fieldName: 'lastActiveDate',
    sort: true,
    shrink: 0.812,
  },
  {
    name: 'Email',
    fieldName: 'email',
    sort: false,
    shrink: 1.044,
  },
  {
    name: 'Actions',
    fieldName: 'actions',
    sort: false,
    shrink: 1.087,
  }
];

export const ListHeader: FC = () => {
  const { page, orders, methods } = useContext(UsersContext);

  const onSort = useCallback((fieldName) => async () => {
    const order = orders[fieldName];
    const finalOrders = {
      ...orders,
      [fieldName]: order === 'asc' ? 'desc' : 'asc',
    };
    methods.setUsersOrders(finalOrders);
  }, [page, orders]);

  return (
    <div className={headerStyles}>
      <div className={checkboxColStyles(1.106)} style={{ 'flexShrink': 1.106 }}>
        <input type="checkbox" />
      </div>
      {columnDefinition.map((col, i) => (
        <div key={i} className={colStyles(col.sort, col.shrink)} onClick={onSort(col.fieldName)}>
          <span>{col.name}</span>
          {col.sort ? (
            <div className={sortIconsContainerStyles}>
              <Icon icon="rectangle" size={8} />
              <Icon icon="rectangle" size={8} className={sortIcnRotatedStyles} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );

};
