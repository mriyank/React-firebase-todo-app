import React,{useState} from 'react';
import './App.css';

function App() {
  const [todos, seTodos] = useState(['Take dogs for a walk','Take the rubbish out',"it's me Mriyank!!"]);
  const[input, setInput] = useState('');
  console.log(input);
  const addTodo = (event) => {
    // this will fire off when we click the button
    console.log('*','I m workong');
  }

  return (
    <div className="App">
      <h1>Hello World </h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
