import React from 'react';
import './App.scss'
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
        <SearchBox data-testid="searchbox" requestSearch={console.log} />
      </header>
    </div>
  );
}

export default App;
