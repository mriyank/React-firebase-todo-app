import React,{useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const[input, setInput] = useState('');
  
  // when the app loads, we need to listen to the database and...
  // fetch todos as they get added/ removed


  useEffect(() => {
    // this code here... fires up when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);


  //console.log(input);
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //I will stop the refresh
    //console.log('*','I m workong');


    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })



    //setTodos([...todos, input]);
    setInput(''); // clear up input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>🚀 MY TODO LIST 🚀 </h1>
      <form>

        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          
        </FormControl>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        <Button disabled = {!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>

      </form>

        <ul>
          {todos.map(todo => (
            <Todo text={todo}/>
            //<li>{todo}</li>
          ))}
          
        </ul>
    </div>
  );
}

export default App;
