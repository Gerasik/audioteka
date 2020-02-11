import React from 'react';
import styles from './filter.module.scss';

const Filter = ({ data, action }) => (
  <select onChange={action} className={styles.item}>
    <option>All</option>
    {data.map((item, id) => <option key={id}>{item}</option>)}
  </select>
);

export default Filter;
