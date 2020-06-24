import React from 'react';
import './App.css'
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;
