import "./App.css";
import { useState, useEffect } from "react";
import happy from "./emoji/happy.jpeg";
import lovely from "./emoji/lovely.jpeg";
import crazy from "./emoji/crazy.jpeg";

function App() {
  const data = [happy, lovely, crazy];
  let counter = 0;
  const [emoji, setEmoji] = useState();
  useEffect(() => {
    let interval = setInterval(() => {
      setEmoji(data[counter % 3]);
      counter++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <img src={emoji} alt="" />
    </div>
  );
}

export default App;
