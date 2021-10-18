import React from "react";

const inputList = [
  { name: "text1", type: "text" },
  { name: "text2", type: "text" },
  { name: "text3", type: "text" },
  { name: "text4", type: "text" },
];

const Form = () => {
  const inputHandler = (e) => {};

  return (
    <form>
      {inputList.map((el) => {
        return (
          <input
            type={el.type}
            id={el.name}
            key={el.name}
            onChange={inputHandler}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
