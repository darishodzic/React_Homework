import "./App.css";
import { useState } from "react";
import happy from "./emoji/happy.jpeg";
import lovely from "./emoji/lovely.jpeg";
import crazy from "./emoji/crazy.jpeg";

function App() {
  const data = [happy, lovely, crazy];
  let counter = 0;
  const [emoji, setEmoji] = useState();
  const counterr = () => {
    counter++;
    console.log(counter % 3);

    clearInterval(interval);
  };
  let interval = setInterval(() => {
    setEmoji(data[counter % 3]);
    counterr();
  }, 2000);
  return (
    <div className="App">
      <img src={emoji} alt="" />
    </div>
  );
}

export default App;
