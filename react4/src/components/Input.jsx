import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState([]);

  const inputHandler = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.length > 10) {
      setError((prev) => {
        return [...prev, "Your text must be less than 10 ."];
      });
      return;
    }
    if (email.length < 4) {
      setError((prev) => {
        return [...prev, "Your text must be more than 4 ."];
      });
      return;
    } else {
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={text} onChange={inputHandler} />
        <input type="email" value={email} onChange={emailHandler} />

        <button type="submit">Submit</button>
      </form>
      {error[0] && <p>{error[0]}</p>}
      {error[1] && <p>{error[1]}</p>}
    </>
  );
};

export default Input;
