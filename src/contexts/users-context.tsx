import React, { FC, createContext, useState, useCallback, useMemo, useEffect } from 'react';

import { UserModel } from '../models/UserResponseModel';
import UserService from '../services/user-service';

type UsersTypes = {
    usersData: UserModel[],
    page: number,
    totalCount: number,
    orders: {[key: string]: string}
    methods: {
        updateUsers(data: UserModel[]): void,
        changePage(to: number): void,
        setUsersTotalCount(count: number): void,
        setUsersOrders(orders: {[key: string]: string}): void
    }
};

export const UsersContext = createContext<UsersTypes>({
  usersData: [],
  page: 1,
  totalCount: 0,
  orders: {},
  methods: {
    updateUsers: () => {},
    changePage: () => {},
    setUsersTotalCount: () => {},
    setUsersOrders: () => {},
  },
});


const UsersProvider: FC = ({ children }) => {
  const [usersData, setUsersData] = useState<UserModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [orders, setOrders] = useState({});

  const updateUsers = useCallback((data) => {
    setUsersData(data);
  }, []);

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  const setUsersTotalCount = useCallback((count) => {
    setTotalCount(count);
  }, []);

  const setUsersOrders = useCallback((orders) => {
    setOrders(orders);
  }, []);

  const methods = useMemo(() => ({
    updateUsers,
    changePage,
    setUsersTotalCount,
    setUsersOrders,
  }), []);

  useEffect(() => {
    (async () => {
      const [data] = await UserService.getUsersList(page, 10, orders);
      methods.updateUsers(data);
    })();
  }, [page, orders]);

  return (
    <UsersContext.Provider value={{ usersData, page, totalCount, orders, methods }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
