import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import DisplayTodos from './features/todo/displayTodo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayTodos/>
  


      </header>
    </div>
  );
}

export default App;
