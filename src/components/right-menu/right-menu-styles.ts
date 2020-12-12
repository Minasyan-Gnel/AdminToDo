import { css } from 'react-emotion';

export const rightMenuStyles = css`
    width: 12.5%;
`;

export const rightMenuHeaderStyles = css`
    height: 70px;
    background-color: #272D3E;
`;

export const rightMenuItemsContainerStyles = css`
    height: calc(100% - 70px);
    background-color: #2D3347;
    padding-top: 48px;
    list-style-type: none;
`;

export const rightMenuItemStyles = css`
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 32px;
    color: #788195;
    font-family: Roboto;
    cursor: pointer;
    > svg > path {
        fill: #788195;
    }
    > span {
        margin-left: 31px;
    }
    &:hover {
        background-color: #1F2430;
        color: #FFFFFF;
        > svg > path {
            fill: #FFFFFF;
        };
    }
`;

export const rightMenuItemActiveStyles = css`
    background-color: #1F2430;
    color: #FFFFFF;
    > svg > path {
        fill: #FFFFFF;
    };
`;
