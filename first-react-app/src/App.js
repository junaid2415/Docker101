import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from'react';

function App() {

  const [msg, SetMsg] = useState();
  useEffect(() => {
    console.log('App is mounted');
  }, []);

  async function getBackendMsg(msg) {
    // http://backend:8000/
    let apiUrl1 = 'http://localhost:8000/'

    fetch(apiUrl1)
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data1 => {
    // Process data from the first API
    console.log('Data from API 1:', data1);
    SetMsg(data1);
  });

    // console.log(res)
    // res = await res.json()    
    // console.log(res)
    // SetMsg(res.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's Learn Docker!!  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={ () => getBackendMsg()}> Lets Connect to Backend</button>
        {msg}
      </header>
    </div>
  );
}

export default App;
