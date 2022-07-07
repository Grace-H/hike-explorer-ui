import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ActivityList from './components/ActivityList'

function App() {
  return (
    <div className="App">
      <Header />
      <ActivityList />
    </div>
  );
}

export default App;
