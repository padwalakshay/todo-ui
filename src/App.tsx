import React, {useEffect, useState } from 'react';
import { getList } from './services/Api';
import { List } from './interfaces/CommonProps';
import './App.css';
import TodoList from './components/TodoList.component';
import TodoInput from './components/TodoInput.component';

const App: React.FC = () => {
  const [itemlist, Additemlist] = useState<List[]>([])
  let [count, nextcount] = useState(0)
  
  useEffect(() => {
    (async () => {
      Additemlist(await getList());
    })()
  }, [count])

  return (
    <div className="App"> 
      <TodoInput initialstate={count} statechanger={nextcount}/>
      <TodoList initialstate={count} statechanger={nextcount} todoList={itemlist}/>
    </div>
  );
}

export default App;


