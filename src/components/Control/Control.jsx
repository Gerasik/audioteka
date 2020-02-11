import React from 'react';
import styles from './control.module.scss';
import Pagination from '../Pagination/Pagination';
import ListSize from '../ListSize/ListSize';

const Control = ({
  curentPage, listSize, pagesSize, changeListSize, changePage,
}) => {
  const listSizeArray = [5, 10, 25, 50, 100].map((i, id) => ({ id, item: i }));
  return (
    <div className={styles.main}>
      <Pagination pagesSize={pagesSize} curentPage={curentPage} action={changePage} />
      <ListSize listSizeArray={listSizeArray} listSize={listSize} action={changeListSize} />
    </div>
  );
};

export default Control;
