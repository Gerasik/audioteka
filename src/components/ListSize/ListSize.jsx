import React from 'react';
import styles from './listsize.module.scss';

const ListSize = ({ listSizeArray, listSize, action }) => (
  <ul className={styles.list}>
    {listSizeArray.map(({ id, item }) => (
      <li key={id}>
        <button
          type="button"
          onClick={action}
          className={listSize === item ? styles.active : null}
        >
          {item}
        </button>
      </li>
    ))}
  </ul>
);

export default ListSize;
