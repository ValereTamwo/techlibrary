import './App.css';
import React from 'react';
import Header from './components/Header';
import CardItem from './components/CardItem';
import CardList from './components/CardList';
function App() {
  return (
    <div>
      <Header/>
      {/* <CardItem /> */}
      <CardList/>
    </div>
  );
}

export default App;
