import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { firstInput } from "../reducers/formSlice";

export default function Form() {
  const firstInputValue = useSelector((state) => state.form.value);
  const dispatch = useDispatch();
  console.log(firstInputValue);
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={() => {
            dispatch(firstInput);
          }}
          //   value={firstInputValue}
        />
      </form>
    </div>
  );
}
