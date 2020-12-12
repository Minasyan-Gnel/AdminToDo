import React, { FC, useState, useMemo, useCallback, useContext, useEffect } from 'react';

import { Icon } from '../shared/icon/icon';
import { UsersContext } from '../../contexts/users-context';
import { getNumbersFromRange } from '../../helpers';
import {
  usersListFooterStyles, paginationContainerStyles, paginationNumbersWrapperStyles,
  rotatedArrowStyles, selectedPageItemStyles, emptyPageItemStyles, usersTotalNumbersWrapperStyles,
  pageRangeWrapperStyles, paginationNumbersContainerStyles
} from './users-list-footer-styles';

export const UsersListFooter: FC = () => {
  const [pageRange, setPageRange] = useState([1, 10]);

  const { methods, page: selectedPage, totalCount } = useContext(UsersContext);

  const numberOfPage = useMemo((): number[] => (
    getNumbersFromRange(pageRange[0], pageRange[1])
  ), [pageRange, totalCount]);

  const totalPageCount = useMemo(() => (
    Math.ceil(totalCount / 10)
  ), [totalCount]);

  const changePageRange = useCallback((e) => {
    const [from, to] = e.target.value.split('/');
    setPageRange([parseInt(from), parseInt(to)]);
  }, []);

  const optionsList = useMemo(() => {
    const options = [];
    const a = totalCount / 10;
    let pageCount = a - (a % 10);

    while (pageCount >= 10) {
      const from = (pageCount - 10) || 1;
      const to = pageCount;
      options.push(<option value={`${from}/${to}`} key={from}>{`${from} / ${to}`}</option>);
      pageCount -= 10;
    }

    return options.reverse();
  }, [totalCount]);

  const pageChangeHandler = useCallback((page: number) => () => {
    methods.changePage(page);
  }, []);

  const getPageItem = useCallback((
    page: number,
    index: number,
    selectedPage: number,
    numbersRange: number[]
  ) => {
    const selectedPageIndex = numbersRange.indexOf(selectedPage);
    switch (true) {
      case selectedPageIndex >= 3 && index > 0 && index < 3:
      case selectedPageIndex < 3 && index > 6 && index < 9:
        if (index === 1 || index === 7) return;
        return (<div key={page} className={emptyPageItemStyles}><span /> <span /><span /></div>);
      default:
        return (
          <button
            key={page}
            onClick={pageChangeHandler(page)}
            className={selectedPage === page ? selectedPageItemStyles : ''}
          >
            {page}
          </button>
        );
    }
  }, []);

  useEffect(() => {
    if (selectedPage >= pageRange[1]) {
      if (selectedPage + 10 > totalPageCount) {
        return setPageRange([totalPageCount - 9, totalPageCount]);
      }
      setPageRange([selectedPage, selectedPage + 10]);
    }
  }, [selectedPage, totalCount, totalPageCount]);

  return (
    <div className={usersListFooterStyles}>
      <div className={paginationContainerStyles}>
        <span>Changer</span>
        <div className={paginationNumbersContainerStyles}>
          <div className={paginationNumbersWrapperStyles}>
            <button
              disabled={selectedPage === 1}
              onClick={pageChangeHandler(selectedPage - 1)}
            >
              <Icon icon="arrow" size={8} />
            </button>
            {numberOfPage.map((item, i) => (getPageItem(item, i, selectedPage, numberOfPage)))}
            <button
              disabled={selectedPage === totalPageCount}
              onClick={pageChangeHandler(selectedPage + 1)}
            >
              <Icon icon="arrow" size={8} className={rotatedArrowStyles} />
            </button>
          </div>
          <select className={pageRangeWrapperStyles} onChange={changePageRange}>
            {optionsList.length ? optionsList : <option>1 / 10</option>}
          </select>
        </div>
      </div>
      <div className={usersTotalNumbersWrapperStyles}>
        <p>Total number of users</p>
        <span>{totalCount}</span>
      </div>
    </div>
  );
};
