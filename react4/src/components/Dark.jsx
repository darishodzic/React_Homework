import React, { useContext } from "react";
import { AppContext } from "..";

const Dark = () => {
  const value = useContext(AppContext);

  return (
    <div>
      Theme is : <b>{value.theme}</b>
    </div>
  );
};

export default Dark;
