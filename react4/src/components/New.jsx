import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-11-08&sortBy=popularity&apiKey=718475c66d004ed2bf766bc4398a8e66"
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
  }, []);

  return (
    <div>
      {articles.map((el) => (
        <div
          style={{ border: "1px solid red", padding: "20px" }}
          key={el.title}
        >
          <h3 style={{ padding: "10px" }}>Author: {el.author}</h3>
          <h3 style={{ padding: "10px" }}>Title: {el.title}</h3>
          <p style={{ padding: "10px" }}>Content:{el.content}</p>
          <p style={{ padding: "10px" }}>Description:{el.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
