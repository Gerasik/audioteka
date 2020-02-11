/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import styles from './App.module.scss';
import AudioList from './components/AudioList/AudioList';
import Filter from './components/Filter/Filter';
import Control from './components/Control/Control';
import soundList from './data/csvjson.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentList: soundList,
      sort: null,
      curentPage: 1,
      listSize: 5,
    };
  }

  static getUnique(attr) {
    const result = [];
    for (const str of soundList) {
      if (!result.includes(str[attr])) {
        result.push(str[attr]);
      }
    }
    return result.sort().map((item, id) => ({
      id,
      item,
    }));
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

  filterByType(event) {
    if (event.target.value === 'All') {
      this.setState({ currentList: soundList });
    } else {
      const newList = soundList.filter((item) => `${item[event.target.name]}` === event.target.value);
      this.setState({ currentList: newList });
    }
  }

  changeListSize(e) {
    this.setState({ listSize: +e.target.innerText });
  }

  changePage(e) {
    const { currentList, listSize } = this.state;
    switch (e.target.innerText) {
      case 'First':
        this.setState({ curentPage: 1 });
        break;
      case 'Last':
        this.setState({ curentPage: Math.ceil(currentList.length / listSize) });
        break;
      default:
        this.setState({ curentPage: +e.target.innerText });
        break;
    }
  }

  render() {
    const singers = this.constructor.getUnique('singer');
    const ganres = this.constructor.getUnique('ganre');
    const years = this.constructor.getUnique('year');
    const { currentList, curentPage, listSize } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.wrap}>
          <AudioList
            audioListData={currentList}
            curentPage={curentPage}
            listSize={listSize}
            sortAction={(e) => this.sortAction(e)}
          />
          <div className={styles.filters}>
            <p>Singer:</p>
            <Filter name="singer" data={singers} action={(e) => this.filterByType(e)} />
            <p>Ganre:</p>
            <Filter name="ganre" data={ganres} action={(e) => this.filterByType(e)} />
            <p>Year:</p>
            <Filter name="year" data={years} action={(e) => this.filterByType(e)} />
          </div>
        </div>
        <Control
          curentPage={curentPage}
          listSize={listSize}
          pagesSize={
            new Array(Math.ceil(currentList.length / listSize)).fill(1).map((i, id) => id + i)
          }
          changeListSize={(e) => this.changeListSize(e)}
          changePage={(e) => this.changePage(e)}
        />
      </div>
    );
  }
}

export default App;
