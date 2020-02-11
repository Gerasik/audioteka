import React from 'react';
import styles from './audiolist.module.scss'

const AudioList = ({audioListData}) => (
    <table>
        {
          audioListData.map((item)=>
            <tr key={item.id}>
              <td>{item.singer}</td>
              <td>{item.song}</td>
              <td>{item.ganre}</td>
              <td>{item.year}</td>
            </tr>
          )
        }
      </table>
)

export default AudioList