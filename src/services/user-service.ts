import { Api } from './api';
import { UserModel } from '../models/UserResponseModel';
import { NewUserResponseModel } from '../models/NewUserResponseModel';
import { NewImageResponseModel } from '../models/NewImageResponseModel';
import { UserRequestModel } from '../models/UserRequestModel';

class UserService {
  getUsersList = async (
    page: number,
    limit: number,
    orders: {[key: string]: string},
  ): Promise<[UserModel[], Error | null]> => {
    try {
      const sortNames = Object.keys(orders).join();
      const sortOrders = Object.values(orders).join();
      const data = await Api.get<UserModel[]>(`/users?_page=${page}&_limit=${limit}&_sort=${sortNames}&_order=${sortOrders}`);
      return [data, null];
    } catch (e) {
      return [[], e];
    }
  }

  getUsersCount = async (): Promise<[number, Error | null]> => {
    try {
      const data = await Api.get<UserModel[]>('/users');
      return [data.length, null];
    } catch (e) {
      return [0, e];
    }
  }

  deleteUser = async (id: number): Promise<[number | null, Error | null]> => {
    try {
      await Api.delete(`/users/${id}`);
      return [id, null];
    } catch (e) {
      return [null, e];
    }
  }

  editUser = async(
    data: UserModel
  ): Promise<[number | null, Error | null]> => {
    try {
      await Api.put(`/users/${data.id}`, JSON.stringify(data));
      return [data.id, null];
    } catch (e) {
      return [null, e];
    }
  }

  addUser = async (
    formData: UserRequestModel
  ): Promise<[NewUserResponseModel | null, Error | null]> => {
    try {
      const data = await Api.post<NewUserResponseModel>('/users', JSON.stringify(formData));
      return [data, null];
    } catch (e) {
      return [null, e];
    }
  }

  uploadImage = async (
    formData: FormData
  ): Promise<[NewImageResponseModel | null, Error | null]> => {
    try {
      const data = await Api.upload<NewImageResponseModel>('/images', formData);
      return [data, null];
    } catch (e) {
      return [null, e];
    }
  }
}

export default new UserService();
