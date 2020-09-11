import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk','Take the rubbish out',"it's me Mriyank!!"]);
  const[input, setInput] = useState('');
  console.log(input);
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //I will stop the refresh
    console.log('*','I m workong');
    setTodos([...todos, input]);
    setInput(''); // clear up input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hello World </h1>
      <form>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      <Button type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>

      </form>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
