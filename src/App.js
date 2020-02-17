import React from 'react';
import './App.css';

const ActionItems = () => {
  return (
    <ul>
      <li>
        Home
      </li>
      <li>
        TV Shows
      </li>
      <li>
        Movies
      </li>
      <li>
        Latest
      </li>
    </ul>
  )
}

const Nav = () => {
  return (
    <div className="nav">
      <h1>NIMFLIX</h1>
      <ActionItems />
    </div>
  )
}

const Content = () => {
  return <h1>CONTENT AYO WHAT UP</h1>
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
