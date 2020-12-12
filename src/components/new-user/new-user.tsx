import React, { FC, FormEvent, useRef, useState } from 'react';
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

export const NewUser: FC = () => {
  const [fileName, setFileName] = useState('Photo');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.values(e.target)
      .filter(target => (target.tagName === 'INPUT' && target.name !== 'photo'))
      .forEach(target => {
        formData.append(target.name, target.value);
      });

    await UsersService.addUser(formData);
    history.push('/');
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      const formData = new FormData();
      formData.append('file', e.target.files[0]);

      UsersService.uploadImage(formData);
    }
  };

  return (
    <div className={newUserWrapperStyles}>
      <form className={formStyles} onSubmit={handleSubmit}>
        <input type="text" placeholder="User name" name="name" className={inputStyles} />
        <button className={choosePhotoBtnStyles} type="button" onClick={handleButtonClick}>
          <Icon icon="photo" size={18} />
          <span>{fileName}</span>
        </button>
        <input type="file" name="photo" ref={fileInputRef} className={fileInputStyles} onChange={handleFileChange} />
        <input type="text" placeholder="Email" name="email" className={inputStyles} />
        <input type="text" placeholder="Location" name="location" className={inputStyles} />
        <button type="submit" className={saveBtnStyles}>Save</button>
      </form>
    </div>
  );
};
