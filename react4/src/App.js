import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import CardList from "./components/CardList";
import "./components/CardList.css";
import Form from "./components/Form";
function App() {
  const [error, setError] = useState("");
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
      <Form
        setError={setError}
        formData={formData}
        setFormData={setFormData}
        setInputData={setInputData}
      />
      {error ? <p>{error}</p> : ""}
    </div>
  );
}

export default App;
