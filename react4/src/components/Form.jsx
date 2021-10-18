import React from "react";

const Form = ({ setError, formData, setFormData, setInputData }) => {
  const inputHandler = (e) => {
    const value = e.target.value;
    const type = e.target.type;
    if (type === "email") {
      if (value.length > 10) {
        setError((prev) => {
          return prev + " Email must contain less than 10 chars!";
        });
      }
    }
  };

  return (
    <form>
      <label htmlFor="first">Firstname</label>
      <input type="text" id="first" onChange={inputHandler} />
      <label htmlFor="last">Lastname</label>
      <input type="text" id="last" onChange={inputHandler} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onSubmit={inputHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
