import React from "react";

const ListItem = ({ icon, text }) => {
  return (
    <li style={{ border: "1px solid black" }}>
      <div
        style={{
          minWidth: "400px",
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={icon}
          alt=" "
          style={{ width: "50px", height: "50px", margin: "0rem 2rem" }}
        />
        <h1 style={{ margin: "auto" }}>{text}</h1>
      </div>
    </li>
  );
};

export default ListItem;
