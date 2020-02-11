import React from 'react';
import styles from './pagination.module.scss';

const Pagination = ({ pagesSize, curentPage, action }) => {
  let arr = pagesSize;
  if (pagesSize.length > 7) {
    if (curentPage - 7 < 0) {
      arr = pagesSize.slice(0, 7);
    } else if (curentPage + 6 > pagesSize.length) {
      arr = pagesSize.slice(pagesSize.length - 7, pagesSize.length);
    } else {
      arr = pagesSize.slice(curentPage - 4, curentPage + 3);
    }
  }
  let first;
  let last;
  if (arr[0] !== 1) first = <button type="button" onClick={action}>First</button>;
  if (arr[6] !== pagesSize.length) last = <button type="button" onClick={action}>Last</button>;
  return (
    <ul className={styles.pagination}>
      {first}
      {arr.map((i) => (
        <li key={i}>
          <button
            type="button"
            onClick={action}
            className={curentPage === i ? styles.active : null}
          >
            {i}
          </button>
        </li>
      ))}
      {last}
    </ul>
  );
};
export default Pagination;
