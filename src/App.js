import React, { Component, Suspense } from 'react';
import Navbar from './components/navbar';
// import List from './components/todos-list';
// import { appContext } from './context/app-context';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default App;
