import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Details.css";
import React from "react";
import Button from "../../components/Button/Button";

function Details(props: any) {
  useEffect(() => {
    if (props.location.state) {
      updateCarDetails(
        props.location.state.carList[parseInt(props.location.state.id)]
      );
      getCarDetails();
    }
  }, []);

  const [carDetails, updateCarDetails] = useState({
    manufacturerName: "",
    modelName: "",
    mileage: { number: "", unit: "" },
    stockNumber: "",
    fuelType: "",
    color: "",
  });
  function saveDetails() {
    let favorites: any = localStorage.getItem("favorites");
    if (favorites) {
      let parsedFav = JSON.parse(favorites);
      console.log(typeof parsedFav);
      let count = 0;
      for (let i = 0; i < parsedFav.length; i++) {
        if (
          parsedFav[i].stockNumber == carDetails.stockNumber &&
          parsedFav[i].modelName == carDetails.modelName
        ) {
          count++;
        }
      }
      if (count == 0) parsedFav.push(carDetails);
      localStorage.setItem("favorites", JSON.stringify(parsedFav));
    } else {
      localStorage.setItem("favorites", JSON.stringify([carDetails]));
    }
  }
  function getCarDetails() {
    if (props.location.state) {
      localStorage.setItem(
        "carList",
        JSON.stringify(props.location.state.carList)
      );
      localStorage.setItem("state", JSON.stringify(props.location.state));
      let stat: any = localStorage.getItem("state");
      let carList: any = localStorage.getItem("carList");
      let parsedStat = JSON.parse(stat);
      let parsedCarList = JSON.parse(carList);
      if (parsedCarList) {
        updateCarDetails(parsedCarList[parseInt(parsedStat.id)]);
      }
    }
  }
  return (
    <div>
      <div className="car-details-img"></div>
      <div className="car-details-content">
        {carDetails && (
          <div id="carDetailsInfo" style={{ width: "30%" }}>
            <div>
              {carDetails.manufacturerName}&nbsp;{carDetails.modelName}
            </div>
            <div>
              Stock&nbsp;#&nbsp;{carDetails.stockNumber}&nbsp;-&nbsp;
              {carDetails.mileage.number}&nbsp;{carDetails.mileage.unit}
              &nbsp;-&nbsp;{carDetails.fuelType}&nbsp;-&nbsp;{carDetails.color}
            </div>
            <div>
              The car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions
            </div>
          </div>
        )}
        <div id="saveCarDetails">
          <div>
            If you like this car, click the button
            <br /> and save it in your collection of favourite items.
          </div>
          <div className="save-details-button">
            <Button name="Save" onClick={saveDetails}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(withRouter(Details));
