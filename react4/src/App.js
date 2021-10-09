import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import "./components/CardList.css";
function App() {
  const [num, setNum] = useState(1);
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `https://catfact.ninja/facts?limit=${num}`
    );
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, [num]);

  const inputHandler = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="App">
      <input type="number" value={num} onChange={inputHandler} />
      <div className="cardlist">
        <CardList data={data} />
      </div>
    </div>
  );
}

export default App;
