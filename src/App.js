import React from 'react';
import logo from './Logo.png';
import './App.css';
import Comp1 from './comp1';

function App() {
  return (

    <div >
      <Comp1 />
      <header className="App-header">
       <p>
         Why EMI when you are have 800 different way to finance your loan
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;