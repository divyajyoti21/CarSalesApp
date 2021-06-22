import MultiFilter from "../../components/MultiFilter/MultiFilter";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
import { withRouter } from "react-router-dom";
import "./Favorites.css";
import React, { useEffect, useState } from "react";
function Favorites(props: any) {
  const [favorites, updateFavorites] = useState([]);
  function handleClick(id: any) {
    props.onClick(id);
  }
  function onViewDetails(id: any) {
    props.onViewDetails(id);
  }
  function removeFavorite(event: any) {
    console.log(event.target.value);
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
      let favoritesParsed = JSON.parse(favorites);
      favoritesParsed.splice(event.target.value, 1);
      localStorage.setItem("favorites", JSON.stringify(favoritesParsed));
      updateFavorites(favoritesParsed);
    }
  }
  useEffect(() => {
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
      let favoritesParsed = JSON.parse(favorites);
      updateFavorites(favoritesParsed);
    }
  }, []);
  return (
    <div className="home-grid">
      <div style={{ width: "60%", margin: "auto" }}>
        <div
          className="available-cars"
          style={{ padding: "12px", margin: "12px" }}
        >
          Favorite cars
        </div>
        {favorites.map((car: any, index: number) => (
          <div
            className="display-card"
            style={{ padding: "24px", margin: "12px" }}
          >
            <div className="card-img-style"></div>
            <div className="car-info">
              <div className="car-name">
                {car.manufacturerName}&nbsp;{car.modelName}
              </div>
              <div className="car-details">
                Stock&nbsp;#&nbsp;{car.stockNumber}&nbsp;-&nbsp;
                {car.mileage.number}&nbsp;{car.mileage.unit}
                &nbsp;-&nbsp;
                {car.fuelType}&nbsp;-&nbsp;{car.color}
              </div>
              <div className="link-details">
                <button
                  className="link-button"
                  value={index}
                  onClick={removeFavorite}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Favorites);
