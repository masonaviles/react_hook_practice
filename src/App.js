// import useState so we can use this hook
import React, { useState } from 'react';
import './App.css';

function App() {

  // assign the hook to a const and then pass in the initial value in useState
  // [ 0(initial value that is passed in useState), function ]
  const [ score, setScore ] = useState(0);
  const [ message, setMessage ] = useState('Welcome!');

  // useState returns an array with two values
  // 1. The first array element is a variable with the current state value (0 in this case). similar to this.state
  // 2. The second element is a function to update that value, and it's similar to this.setState()


  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        {/* use the new piece of state we made, called via variable name, score */}
        <h2>{ score }</h2>
        <button onClick={ () => setScore( prevScore => prevScore + 1 )}>
          +
        </button>
        <button onClick={ () => setScore(0)}>
          reset
        </button>
        <button onClick={ () => setScore( prevScore => prevScore - 1 )}>
          -
        </button>
      </header>
    </div>
  );
}

export default App;
