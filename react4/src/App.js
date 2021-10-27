import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import CardList from "./components/CardList";
import "./components/CardList.css";
import Form from "./components/Form";
import Col from "./components/Col";
import Dark from "./components/Dark";
import List from "./components/List.jsx";
import Calculator from "./components/Calculator";
import ListItem from "./components/ListItem.jsx";
function App() {
  const [inputData, setInputData] = useState();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
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
      {/* <input type="number" value={num} onChange={inputHandler} />
      <div className="cardlist">
        <CardList data={data} />
      </div> */}
      <List>
        <ListItem icon="./ninae7.jpg" text="Goood morning" />
        <ListItem icon="./ninae7.jpg" text="Hello world" />

        <ListItem icon="./ninae7.jpg" text="Cao" />

        <ListItem icon="./ninae7.jpg" text="Bok" />

        <ListItem icon="./ninae7.jpg" text="Hi" />
      </List>
    </div>
  );
}

export default App;
