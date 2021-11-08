import React, { useContext } from "react";

const Dark = () => {
  const value = useContext();

  return (
    <div>
      Theme is : <b>{value.theme}</b>
    </div>
  );
};

export default Dark;
