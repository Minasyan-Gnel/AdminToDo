import { css } from 'react-emotion';

export const usersListHeaderStyles = css`
    display: flex;
    align-items: center;
    height: 87px;
    > span {
        font-family: Roboto;
        font-size: 18px;
    }
    > div {
        width: calc(100% - 230px);
        border-bottom: 1px solid #E1E6EC;
        margin-left: 16px;
    }
    > a {
        margin-left: 36px;
        font-family: Roboto;
        font-size: 12px;
        outline: none;
        text-decoration: none;
        padding: 11px 32px;
        background-color: #407EFF;
        border-radius: 4px;
        color: #FFFFFF;
        &:active {
            box-shadow: inset 0 0 10px #000000;
        }
    }
`;
