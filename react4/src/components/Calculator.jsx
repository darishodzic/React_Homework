import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const data = [
    { content: "7" },
    { content: "8" },
    { content: "9" },
    { content: "/" },
    { content: "4" },
    { content: "5" },
    { content: "6" },
    { content: "*" },
    { content: "1" },
    { content: "2" },
    { content: "3" },
    { content: "-" },
    { content: "0" },
    { content: "." },
    { content: "+" },
    { content: "=" },
  ];

  const [inputValue, setInputValue] = useState("");

  const btnHandler = (e) => {
    setInputValue((prev) => {
      return prev + e.target.innerText;
    });
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const equalHandler = () => {
    const finish = eval(inputValue);
    setInputValue(finish);
  };

  return (
    <div className="Calculator">
      <input type="text" value={inputValue} onChange={inputHandler} />
      <div className="digits">
        {data.map((btn) => {
          return (
            <button
              onClick={btn.content === "=" ? equalHandler : btnHandler}
              key={btn.content}
            >
              {btn.content}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
