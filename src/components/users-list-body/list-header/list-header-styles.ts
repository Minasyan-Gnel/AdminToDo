import { css } from 'react-emotion';

export const headerStyles = css`
    display: flex;
    align-items: stretch;
    height: 54px;
    background-color: #F1F3F5;
    border-radius: 4px;
`;

export const sortIcnRotatedStyles = css`
    transform: rotate(180deg);
`;

export const sortIconsContainerStyles = css`
    margin-left: 11px;
    > svg {
        display: block !important;
    }
`;

export const checkboxColStyles = (shrink: number) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: ${shrink};
`;

export const colStyles = (isSortable: boolean, shrink: number) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: ${shrink};
    cursor: ${isSortable ? 'pointer' : 'default'};
`;
