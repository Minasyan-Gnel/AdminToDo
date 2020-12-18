import React, { FC, FormEvent, useContext, useRef, useState, ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Icon } from '../shared/icon/icon';
import {
  newUserWrapperStyles,
  formStyles,
  choosePhotoBtnStyles,
  saveBtnStyles,
  inputStyles,
  fileInputStyles
} from './new-user-styles';

import UsersService from '../../services/user-service';
import { UsersContext } from '../../contexts/users-context';
import UserService from '../../services/user-service';
import { UserModel } from '../../models/UserResponseModel';

export const NewUser: FC = () => {
  const { selectedUser, methods, page, orders } = useContext(UsersContext);

  const [photoName, setPhotoName] = useState<string>('Photo');
  const [formData, setFormData] = useState(selectedUser as UserModel);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedUser) {
      await UsersService.editUser(formData as UserModel);
    } else {
      await UsersService.addUser(formData as UserModel);
    }
    const [data] = await UserService.getUsersList(page, 10, orders);
    methods.updateUsers(data);
    history.push('/');
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoName(e.target.files[0].name);
      const form = new FormData();
      form.append('file', e.target.files[0]);

      const [data] = await UsersService.uploadImage(form);
      if (data) {
        setFormData({
          ...formData,
          photo: data.url
        });
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => () => {
    methods.selectUser(null);
  }, []);


  return (
    <div className={newUserWrapperStyles}>
      <form className={formStyles} onSubmit={handleSubmit}>
        <input type="text" placeholder="User name" name="name" className={inputStyles} onChange={handleInputChange} value={formData?.name} />
        <button className={choosePhotoBtnStyles} type="button" onClick={handleButtonClick}>
          <Icon icon="photo" size={18} />
          <span>{photoName}</span>
        </button>
        <input
          type="file"
          name="photo"
          ref={fileInputRef}
          className={fileInputStyles}
          onChange={handleFileChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className={inputStyles}
          onChange={handleInputChange}
          value={formData?.email}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          className={inputStyles}
          onChange={handleInputChange}
          value={formData?.location}
        />
        <button
          type="submit"
          className={saveBtnStyles}
          disabled={!formData?.photo}
        >{selectedUser && !!Object.values(selectedUser).length ? 'Edit' : 'Save'}
        </button>
      </form>
    </div>
  );
};
