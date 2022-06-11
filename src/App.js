import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [f, setF] = useState();

  useEffect(() => {
    setInterval(() => {
      setF(Math.random());
    }, 100);
  }, []);

  let c = [];
  for (let i = 0; i < 100 * 1000; i++) {
    c.push(
      <div>
        {i} - {Math.random()}
      </div>,
    );
  }

  return <div className="App">{c}</div>;
}

export default App;
