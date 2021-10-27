import React from "react";

const Col = (props) => {
  const { children, justify } = props;

  return (
    <div
      style={{
        justifyContent: justify || "center",
        width: "900px",
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  );
};
export default Col;
