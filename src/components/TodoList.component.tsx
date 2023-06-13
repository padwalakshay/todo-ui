import React from "react";
import { ListInputProps } from "../interfaces/CommonProps";
import { deleteList, doneList } from "../services/Api";


const TodoList:React.FC<ListInputProps> = ( {initialstate, statechanger, todoList}) => {
    const deleteRecord = async (id: number) => {
        await deleteList(id)
        statechanger(initialstate+1)
    }
    
    const doneRecord = async (id: number) => {
        await doneList(id)
        statechanger(initialstate+1)
    }

    const tmplt = (action:boolean, index:number, id:number, name:string) => {
        if(action) {
            return (<li key={index} className="checked">{name}<span className="close" onClick={() => deleteRecord(id)}>×</span></li>)
        }
        return (<li key={index} onClick={() => doneRecord(id)}>{name}<span className="close" onClick={() => deleteRecord(id)}>×</span></li>)
    }
    return (
        <>
        <div>
        <ul className="removebullets">
       {
        todoList.length && todoList.map(({id, name, action}, index) => {
            return (tmplt(action, index, id, name))
        })
       }
      </ul>
      </div>
        </>
    )
}

export default TodoList;