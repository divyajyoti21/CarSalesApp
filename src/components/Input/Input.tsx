import React from "react";
function Input(props: any) {
  function handleChange(event: any) {
    props.onInputChange(event.target.value);
  }
  return (
    <input
      data-testid={props.testid}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={props.value}
      id="amount"
      type="number"
      onChange={handleChange}
    />
  );
}
export default Input;
