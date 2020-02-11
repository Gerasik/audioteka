/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import styles from './App.module.scss';
import AudioList from './components/AudioList/AudioList';
import Filter from './components/Filter/Filter';
import soundList from './data/csvjson.json';

// function App() {
//   function getUnique(arr, attr) {
//     const result = [];
//     for (const str of arr) {
//       if (!result.includes(str[attr])) {
//         result.push(str[attr]);
//       }
//     }
//     return result.sort();
//   }
//   const singers = getUnique(soundList, 'singer');
//   const ganres = getUnique(soundList, 'ganre');
//   const years = getUnique(soundList, 'year');
//   return (
//     <div className={styles.main}>
//       <AudioList audioListData={soundList} />
//       <div className={styles.filters}>
//         <p>Singer:</p>
//         <Filter data={singers} />
//         <p>Ganre:</p>
//         <Filter data={ganres} />
//         <p>Year:</p>
//         <Filter data={years} />
//       </div>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentList: soundList,
      sortby: {
        type: null,
        order: null,
      },
      sort: null,
    };
  }

  filterByType(event) {
    if (event.target.value === 'All') {
      this.setState({ currentList: soundList });
    } else {
      const newList = soundList.filter((item) => `${item[event.target.name]}` === event.target.value);
      this.setState({ currentList: newList });
    }
  }

  sortAction(event) {
    let sortBy;
    switch (event.target.innerText) {
      case 'Singer':
        sortBy = 'singer';
        break;
      case 'Song':
        sortBy = 'song';
        break;
      case 'Ganre':
        sortBy = 'ganre';
        break;
      case 'Year':
        sortBy = 'year';
        break;
      default:
        sortBy = null;
        break;
    }
    const { currentList, sort } = this.state;
    // let sortedList;
    if (sortBy !== sort) {
      const sortedList = currentList.sort((a, b) => {
        const textA = a[sortBy];
        const textB = b[sortBy];
        if (textA < textB) return -1;
        if (textA > textB) return 1;
        return 0;
      });
      this.setState({ currentList: sortedList, sort: sortBy });
    } else if (sortBy === sort) {
      const sortedList = currentList.reverse();
      this.setState({ currentList: sortedList });
    }
  }

  render() {
    function getUnique(arr, attr) {
      const result = [];
      for (const str of arr) {
        if (!result.includes(str[attr])) {
          result.push(str[attr]);
        }
      }
      return result.sort().map((item, id) => ({
        id,
        item,
      }));
    }
    const singers = getUnique(soundList, 'singer');
    const ganres = getUnique(soundList, 'ganre');
    const years = getUnique(soundList, 'year');
    const { currentList } = this.state;
    return (
      <div className={styles.main}>
        <AudioList audioListData={currentList} sortAction={(e) => this.sortAction(e)} />
        <div className={styles.filters}>
          <p>Singer:</p>
          <Filter name="singer" data={singers} action={(e) => this.filterByType(e)} />
          <p>Ganre:</p>
          <Filter name="ganre" data={ganres} action={(e) => this.filterByType(e)} />
          <p>Year:</p>
          <Filter name="year" data={years} action={(e) => this.filterByType(e)} />
        </div>
      </div>
    );
  }
}

export default App;
