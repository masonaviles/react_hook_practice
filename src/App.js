// import useState so we can use this hook
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // assign the hook to a const and then pass in the initial value in useState
  // [ 0(initial value that is passed in useState), function ]
  const [ score, setScore ] = useState(0);
  const [ message ] = useState('Welcome!');
  const [ data, setData ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true);

   // ** State Hooks:
  // useState returns an array with two values
  // 1. The first array element is a variable with the current state value (0 in this case). similar to this.state
  // 2. The second element is a function to update that value, and it's similar to this.setState()

  // ** Lifecycle Hooks:
  // You'll most likely use the useEffect Hook to ***FETCH DATA from an API***, similar to how you'd use the componentDidMount method in a class.
  // If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined. -- React Docs
  // The effect happens after render, so it will run after state is changed each time like when the buttons are pressed
  useEffect(() => {
    document.title = `Your score is ${score}`;
  }, [ message, score ]); // pass an empty array to useEffect once done if nothing has changed, add dependencies when you have them

  // example of useEffect calling an API
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log('Oh noes!', err))
      .finally(() => setIsLoading(false))
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        {
          isLoading
            ? <p>Loading...</p>
            : <img src={data} alt="A random dog breed" />
        }
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
