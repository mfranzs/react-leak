import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [done, setDone] = useState(false);
  const [f, setF] = useState();

  useEffect(() => {
    let i = 0;
    const int = setInterval(() => {
      setF(Math.random());
      i += 1;
      if (i == 20) {
        clearInterval(int);
        setDone(true);
      }
    }, 100);
  }, []);

  let c = [];
  for (let i = 0; i < (done ? 1 : 100 * 1000); i++) {
    c.push(
      <div>
        {i} - {Math.random()}
      </div>
    );
  }

  return (
    <div className="App">
      Memory Test
      <br />
      {done ? null : c}
    </div>
  );
}

export default App;
