import React from "react";

const List = (props) => {
  const { children } = props;
  return (
    <ul
      style={{
        listStyleType: "none",
        backgroundColor: "hotpink",
        marginTop: "3rem",
      }}
    >
      {children}
    </ul>
  );
};

export default List;
