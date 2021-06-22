import React, { useState } from "react";
import Button from "../Button/Button";
import "./MultiFilter.css";
function MultiFilter(props: any) {
  const [colorSelected, updateColorSelected] = useState("allcolors");
  const [manufacturerSelected, updateManufacturerSelected] =
    useState("allmanufacturers");
  function filterCars() {
    props.onClick(colorSelected, manufacturerSelected);
  }
  function handleColorChange(event: any) {
    console.log(event.target.value);
    updateColorSelected(event.target.value);
  }
  function handleManufacturerChange(event: any) {
    console.log(event.target.value);
    updateManufacturerSelected(event.target.value);
  }
  return (
    <div className="multi-filter" style={{ padding: "24px", margin: "12px" }}>
      <label>Color</label>
      <select id="colors" onChange={handleColorChange}>
        <option value="allcolors">All colors</option>
        {props.colors.map((color: any) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <label>Manufacturer</label>
      <select id="country" onChange={handleManufacturerChange}>
        <option value="allmanufacturers">All Manufacturers</option>
        {props.manufacturers.map((manufacturer: any) => (
          <option value={manufacturer.name}>{manufacturer.name}</option>
        ))}
      </select>
      <p className="align-button">
        <Button name="Filter" id="btn-filter" onClick={filterCars}></Button>
      </p>
    </div>
  );
}
export default MultiFilter;
