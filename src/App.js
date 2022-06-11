import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [i, setI] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setI((curI) => (curI += 1));
    }, 100);
  }, []);

  let c = [];
  if (i > 2 && i < 50) {
    for (let j = 0; j < 100 * 1000; j++) {
      c.push(
        <div>
          {j} - {Math.random()}
        </div>
      );
    }
  }

  return (
    <div className="App">
      Memory Test - {i}
      <br />
      {c}
    </div>
  );
}

export default App;
