import { css } from 'react-emotion';

export const usersListFooterStyles = css`
    display: flex;
    justify-content: space-between;
    height: 121px;
    margin-bottom: 25px;
    border: 1px solid #E9E9E9;
`;

export const paginationContainerStyles = css`
    display: flex;
    flex-direction: column;
    padding: 22px;
    > div {
        margin-top: auto;
    }
`;

export const paginationNumbersContainerStyles = css`
    display: flex;
    justify-content: space-between;
`;

export const paginationNumbersWrapperStyles = css`
    display: flex;
    justify-content: space-between;
    height: 28px;
    width: 100%;
    > button {
        width: 28px;
        margin: 0 4px;
        outline: none;
        border-radius: 4px;
        border: 1px solid #D9D9D9;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #FFFFFF;
        &:disabled {
            opacity: 0.5;
            cursor: default;
        }
    }
`;

export const rotatedArrowStyles = css`
    transform: rotate(180deg);
`;

export const selectedPageItemStyles = css`
    background-color: #407EFF !important;
    color: #FFFFFF;
    border: none;
`;

export const emptyPageItemStyles = css`
    width: 28px;
    margin: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
    cursor: default;
    > span {
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #CCCCCC;
        margin: 0 2.23px;    
    }
`;

export const usersTotalNumbersWrapperStyles = css`
    padding-right: 39px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > span {
        color: #407EFF;
        font-family: Roboto;
        font-size: 18px;
        font-weight: bold;
        margin-left: 16px;
    }
`;

export const pageRangeWrapperStyles = css`
    margin-left: 9px;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    background-color: #FFFFFF;
    outline: none;
    cursor: pointer;
    > option {
        cursor: pointer;
    }
`;
