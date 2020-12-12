import { css } from 'react-emotion';

export const listRowStyles = css`
    height: 59px;
    display: flex;
    align-items: stretch;
`;

export const listRowColStyles = (shrink: number) => css`
    display: flex;
    font-family: Roboto;
    align-items: center;
    width: 100%;
    flex-shrink: ${shrink};
    border-bottom: 1px solid #E9E9E9;
`;

export const avatarStyles = css`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 100%;
`;

export const checkboxColStyles = css`
    justify-content: center;
`;

export const actionBtnStyles = css`
    border: none;
    background-color: #FFFFFF;
    outline: none;
    cursor: pointer;
`;

export const trashBtnStyles = css`
    margin-left: 31px;
`;
