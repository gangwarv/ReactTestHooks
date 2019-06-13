import React, { Component } from 'react';
import List from './components/todos-list'
// import { appContext } from './context/app-context';
import './App.css';



class App extends Component {
  //static contextType = appContext;
  render() {
    return (
      <div>
        <header className="App">
          <button onClick={console.log}>Load</button>
        </header>
        <main>
          <List/>
        </main>
      </div>
    );
  }
}

export default App;
