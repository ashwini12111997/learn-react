import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Ashu");
  return (
    <div className='App'>
      {name}
    </div>
  );
}

export default App;
