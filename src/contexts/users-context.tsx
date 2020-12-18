import React, { FC, createContext, useState, useCallback, useMemo, useEffect } from 'react';

import { UserModel } from '../models/UserResponseModel';
import UserService from '../services/user-service';

type UsersTypes = {
    usersData: UserModel[],
    page: number,
    totalCount: number,
    orders: {[key: string]: string},
    selectedUser: UserModel | null,
    limit: number,
    methods: {
        updateUsers(data: UserModel[]): void,
        selectUser(user: UserModel | null): void,
        changePage(to: number): void,
        changeLimit(limit: number): void,
        setUsersTotalCount(count: number): void,
        setUsersOrders(orders: {[key: string]: string}): void
    }
};

export const UsersContext = createContext<UsersTypes>({
  usersData: [],
  page: 1,
  totalCount: 0,
  orders: {},
  limit: 10,
  selectedUser: null,
  methods: {
    updateUsers: () => {},
    changePage: () => {},
    changeLimit: () => {},
    setUsersTotalCount: () => {},
    setUsersOrders: () => {},
    selectUser: () => {},
  },
});


const UsersProvider: FC = ({ children }) => {
  const [usersData, setUsersData] = useState<UserModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [orders, setOrders] = useState({});
  const [limit, setLimit] = useState(10);
  const [selectedUser, setSelectedUser] = useState<UserModel | null>(null);

  const updateUsers = useCallback((data) => {
    setUsersData(data);
  }, []);

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  const setUsersTotalCount = useCallback((count) => {
    setTotalCount(count);
  }, []);

  const changeLimit = useCallback((limit) => {
    setLimit(limit);
  }, []);

  const setUsersOrders = useCallback((orders) => {
    setOrders(orders);
  }, []);

  const selectUser = useCallback((user: UserModel) => {
    setSelectedUser(user);
  }, []);

  const methods = useMemo(() => ({
    updateUsers,
    changePage,
    changeLimit,
    setUsersTotalCount,
    setUsersOrders,
    selectUser
  }), []);

  useEffect(() => {
    (async () => {
      const [data] = await UserService.getUsersList(page, limit, orders);
      methods.updateUsers(data);
    })();
  }, [page, orders, limit]);

  return (
    <UsersContext.Provider value={{
      usersData, page, totalCount, orders, methods, limit, selectedUser
    }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
