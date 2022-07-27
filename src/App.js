import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect( () => {
    loadData();
    
  })

  const loadData = async () => {
   await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(recievedData => setData(recievedData))
  }

  return (
    <div className="App">
    
    <p>Fetch / Async / Await</p>
    {data.map(record =>(
        <div key = {record.id}>
           {record.name}
        </div>
    ))}
   
    </div>
  );
}

export default App;
