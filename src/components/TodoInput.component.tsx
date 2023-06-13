import React, { useState } from 'react';
import { addList } from '../services/Api';
import { Inputprops } from '../interfaces/CommonProps';

let TodoInput:React.FC<Inputprops> = ({initialstate, statechanger}: React.ComponentState) => {
    let [textval, nextval] = useState("")
    const add = async () => {
        const sendData = {
          id: Math.floor(Math.random() * 10),
          name: textval,
          action: false
        }
        await addList(sendData)
        nextval("")
        statechanger(initialstate+1)
      }

    return(
        <>
        <div className="header">
        <h2>My To Do List</h2>
        <input type="text" placeholder='Enter ToDo' value={textval} onChange={(e) => nextval(e.target.value)}></input>
        <div><span className="addBtn" onClick={add}>Add</span></div>
        </div>
        </>
    )

}

export default TodoInput