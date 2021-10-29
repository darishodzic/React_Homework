import React, { useState } from "react";
import "./Table.css";
const Table = () => {
  const DUMMY_DATA = [
    { name: "Frozen yoghurt", calories: 159, fat: 6, carbs: 24, protein: 4 },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4.3,
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16,
      carbs: 24,
      protein: 6,
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16,
      carbs: 49,
      protein: 3.9,
    },
  ];
  const [data, setData] = useState(DUMMY_DATA);
  const [input, setInput] = useState({
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });
  return (
    <>
      <table>
        <tr>
          <th>Dessert(100g serving)</th>
          <th>Calories</th>
          <th>Fat(g)</th>
          <th>Carbs(g)</th>
          <th>Protein(g)</th>
        </tr>
        {data.map((el) => (
          <tr key={el.name}>
            <td>{el.name}</td>
            <td>{el.calories}</td>
            <td>{el.fat}</td>
            <td>{el.carbs}</td>
            <td>{el.protein}</td>
            <button
              onClick={(e) => {
                data.map((a) => {
                  if (el.name === a.name) {
                    setData((prev) => {
                      const var1 = [...prev];
                      var1.splice(data.indexOf(a), 1);
                      return var1;
                    });
                  }
                });
              }}
            >
              Delete
            </button>
          </tr>
        ))}
      </table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData((prev) => [...prev, input]);
          setInput({
            name: "",
            calories: "",
            fat: "",
            carbs: "",
            protein: "",
          });
        }}
      >
        <input
          type="text"
          value={input.name}
          placeholder="name"
          onChange={(e) => {
            setInput((prev) => {
              return {
                name: e.target.value,
                calories: prev.calories,
                fat: prev.fat,
                carbs: prev.carbs,
                protein: prev.protein,
              };
            });
          }}
        />
        <input
          type="text"
          value={input.calories}
          placeholder="calories"
          onChange={(e) => {
            setInput((prev) => {
              return {
                name: prev.name,
                calories: e.target.value,
                fat: prev.fat,
                carbs: prev.carbs,
                protein: prev.protein,
              };
            });
          }}
        />
        <input
          type="text"
          value={input.fat}
          placeholder="fat"
          onChange={(e) => {
            setInput((prev) => {
              return {
                name: prev.name,
                calories: prev.calories,
                fat: e.target.value,
                carbs: prev.carbs,
                protein: prev.protein,
              };
            });
          }}
        />
        <input
          type="text"
          value={input.carbs}
          placeholder="carbs"
          onChange={(e) => {
            setInput((prev) => {
              return {
                name: prev.name,
                calories: prev.calories,
                fat: prev.fat,
                carbs: e.target.value,
                protein: prev.protein,
              };
            });
          }}
        />
        <input
          type="text"
          value={input.protein}
          placeholder="protein"
          onChange={(e) => {
            setInput((prev) => {
              return {
                name: prev.name,
                calories: prev.calories,
                fat: prev.fat,
                carbs: prev.carbs,
                protein: e.target.value,
              };
            });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Table;
