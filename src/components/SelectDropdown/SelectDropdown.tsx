import React from "react";
function SelectDropdown(props: any) {
  function handleChange(event: any) {
    props.onSelectChange(event);
  }
  return (
    <select data-testid={props.testid} id={props.id} onChange={handleChange}>
      {props.params.map((elem: any) => (
        <option value={elem}>{elem}</option>
      ))}
    </select>
  );
}
export default SelectDropdown;
