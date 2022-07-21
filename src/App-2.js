// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.LastName}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  )
}

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // setCounter(100);
    console.log("You've changed the counter to " + counter);
  }, [counter]); // dependency array
  const name = 'Olusola'
  // const isNameShowing = true;
  return (
    <div className="App">
      <div>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      </div>


      <h1>Hello, {2 + 2}!</h1>
      {
        name ? (
          <>{name}</>
        ) : (
          <>
            <h1>Test</h1>
            <h2>There is no name</h2>
          </>
        )
      }
      <Person name={'Olusola'} LastName={'Joe'} Age={25} />
      {/* <Person name='Ade' LastName={'Oye'} Age={30} />
      <Person name="Naomi" LasName={'Adekunle'} Age={30} /> */}
    </div >
  );
}

export default App;
