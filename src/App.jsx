import React from 'react';
import styles from './App.module.scss';
import AudioList from './components/AudioList/AudioList';
import Filter from './components/Filter/Filter';
import soundList from './data/csvjson.json';

function App() {
  function getUnique(arr, attr) {
    const result = [];
    for (const str of arr) {
      if (!result.includes(str[attr])) {
        result.push(str[attr]);
      }
    }
    return result.sort();
  }
  const singers = getUnique(soundList, 'singer');
  const ganres = getUnique(soundList, 'ganre');
  const years = getUnique(soundList, 'year');
  return (
    <div className={styles.main}>
      <AudioList audioListData={soundList} />
      <div className={styles.filters}>
        <p>Singer:</p>
        <Filter data={singers} />
        <p>Ganre:</p>
        <Filter data={ganres} />
        <p>Year:</p>
        <Filter data={years} />
      </div>
    </div>
  );
}

export default App;
