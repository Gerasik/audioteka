import React from 'react';
import './App.css';
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
      <table>
        {
          soundList.map((item)=>
            <tr key={item.id}>
              <td>{item.singer}</td>
              <td>{item.song}</td>
              <td>{item.ganre}</td>
              <td>{item.year}</td>
            </tr>
          )
        }
      </table>
      <ul>
        {singers.map(item=> <li>{item}</li>)}
      </ul>
      <ul>
        {ganres.map(item=> <li>{item}</li>)}
      </ul>
      <ul>
        {years.map(item=> <li>{item}</li>)}
      </ul>
      {/* <select onChange={this.handleChange}> */}
      <select>
        <option>All</option> 
        {singers.map(item=> <option>{item}</option>)}
      </select>
    </div>
  );
}

export default App;
