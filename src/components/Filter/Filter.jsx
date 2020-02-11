import React from 'react';
import styles from './filter.module.scss';

const Filter = ({ data, action, name }) => (
  <select onChange={action} name={name} className={styles.item}>
    <option>All</option>
    {data.map((item) => <option key={item.id}>{item.item}</option>)}
  </select>
);

export default Filter;
