import React from 'react';
import './App.css';
import AudioList from './components/AudioList/AudioList'
import Filter from './components/Filter/Filter';
import soundList from './data/csvjson.json'

function App() {
  function getUnique(arr, attr) {
    let result = [];
    for (let str of arr) {
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
    <div className="App">
      {/* <ul>
        {singers.map(item=> <li>{item}</li>)}
      </ul>
      <ul>
        {ganres.map(item=> <li>{item}</li>)}
      </ul>
      <ul>
        {years.map(item=> <li>{item}</li>)}
      </ul> */}
      {/* <select onChange={this.handleChange}> */}
      <Filter data={singers}/>
      <Filter data={ganres}/>
      <Filter data={years}/>
      <AudioList audioListData={soundList}/>
    </div>
  );
}

export default App;
