import React from "react";

const Col = (props) => {
  const { children, justify } = props;

  return (
    <div
      style={{
        justifyConten: justify || "center",
        width: "900px",
        border: "1px solid red",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};
export default Col;
