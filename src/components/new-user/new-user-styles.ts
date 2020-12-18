import { css } from 'react-emotion';

export const newUserWrapperStyles = css`
    width: 72.5%;
    height: 611px;
    padding: 52px 55px;
    border: 1px solid #E9E9E9;
`;

export const formStyles = css`
    width: 397px;
`;

export const choosePhotoBtnStyles = css`
    border: 1px solid #407EFF;
    border-radius: 4px;
    outline: none;
    padding: 12px 21px;
    background-color: #FFFFFF;
    margin-bottom: 17px;
    cursor: pointer;
    display: flex;
    align-items: center;
    > span {
        color: #407EFF;
        font-family: Roboto;
        font-size: 14px;
        margin-left: 13px;
    }
`;

export const saveBtnStyles = css`
    border: none;
    padding: 11px 44px;
    font-family: Roboto;
    font-size: 12px;
    outline: none;
    background-color: #407EFF;
    border-radius: 4px;
    color: #FFFFFF;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: no-drop;
    }
`;

export const fileInputStyles = css`
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
`;

export const inputStyles = css`
    display: block;
    width: 100%;
    font-family: Roboto;
    margin-bottom: 17px;
    border: 1px solid #E9E9E9;
    border-radius: 3px;
    padding: 11px 18px;
`;
