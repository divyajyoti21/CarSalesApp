import React from "react";
import Button from "../Button/Button";
import "./DisplayCard.css";
import LinkButton from "../LinkButton/LinkButton";
function DisplayCard(props: any) {
  function handleClick(id: any) {
    props.onViewDetails(id);
  }
  return (
    <div className="display-card" style={{ padding: "24px", margin: "12px" }}>
      <div className="card-img-style"></div>
      <div className="car-info">
        <div className="car-name">
          {props.car.manufacturerName}&nbsp;{props.car.modelName}
        </div>
        <div className="car-details">
          Stock&nbsp;#&nbsp;{props.car.stockNumber}&nbsp;-&nbsp;
          {props.car.mileage.number}&nbsp;{props.car.mileage.unit}&nbsp;-&nbsp;
          {props.car.fuelType}&nbsp;-&nbsp;{props.car.color}
        </div>
        <div className="link-details">
          <LinkButton
            id="View details"
            value={props.index}
            onClick={handleClick}
          ></LinkButton>
        </div>
      </div>
    </div>
  );
}
export default DisplayCard;
