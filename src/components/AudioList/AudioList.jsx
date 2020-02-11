import React from 'react';
import styles from './audiolist.module.scss';

const AudioList = ({ audioListData }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Singer</th>
        <th>Song</th>
        <th>Ganre</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {
        audioListData.slice(0, 5).map((item) => (
          <tr key={item.id}>
            <td>{item.singer}</td>
            <td>{item.song}</td>
            <td>{item.ganre}</td>
            <td>{item.year}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default AudioList;
