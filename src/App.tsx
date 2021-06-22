import React, { useEffect, useState } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./app/Home/Home";
import Details from "./app/Details/Details";
import { createBrowserHistory } from "history";
import PageNotFound from "./app/PageNotFound/PageNotFound";
import Favorites from "./app/Favorites/Favorites";

function App() {
  const [carList, updateCarList] = useState([]);
  const [loading, updateLoading] = useState(true);
  const [colors, updateColors] = useState([]);
  const [manufacturers, updateManufacturers] = useState([]);
  const [totalPages, updateTotalPages] = useState(0);
  const [carsPerPage, updateCarsPerPage] = useState(0);
  const [currentPageNumber, updateCurrentPageNumber] = useState(1);
  const [filterColor, updateFilterColor] = useState(undefined);
  const [filterManufacturer, updateFilterManufacturer] = useState(undefined);
  const [totalCarCount, updateTotalCarCount] = useState(0);

  const history: any = createBrowserHistory({ forceRefresh: true });

  const getCarList = (page: any, color: any, manufacturer: any) => {
    let url = "https://auto1-mock-server.herokuapp.com/api/cars?page=" + page;
    if (color && manufacturer) {
      url =
        "https://auto1-mock-server.herokuapp.com/api/cars?manufacturer=" +
        manufacturer +
        "&color=" +
        color +
        "&sort=asc&page=" +
        page;
    }
    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          console.log(response);
          updateCarList(response.cars);
          updateTotalPages(response.totalPageCount);
          updateCarsPerPage(response.cars.length);
          updateTotalCarCount(response.totalCarsCount);
          updateLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getColors = () => {
    let url = "https://auto1-mock-server.herokuapp.com/api/colors";
    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          localStorage.setItem("colors", JSON.stringify(response.colors));
          updateColors(response.colors);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getManufacturers = () => {
    let url = "https://auto1-mock-server.herokuapp.com/api/manufacturers";
    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          localStorage.setItem(
            "manufacturers",
            JSON.stringify(response.manufacturers)
          );
          updateManufacturers(response.manufacturers);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getCarList(1, filterColor, filterManufacturer);
    getColors();
    getManufacturers();
  }, []);

  function handleClick(id: any) {
    if (id == "Next") {
      if (currentPageNumber < totalPages) {
        updateCurrentPageNumber(currentPageNumber + 1);
        getCarList(currentPageNumber, filterColor, filterManufacturer);
      }
    } else if (id == "Prev") {
      if (currentPageNumber !== 1) {
        updateCurrentPageNumber(currentPageNumber - 1);
        getCarList(currentPageNumber - 1, filterColor, filterManufacturer);
      }
    } else if (id == "First") {
      updateCurrentPageNumber(1);
      getCarList(1, filterColor, filterManufacturer);
    } else if (id == "Last") {
      updateCurrentPageNumber(totalPages);
      getCarList(totalPages, filterColor, filterManufacturer);
    } else {
    }
  }

  const onViewDetails = (id: any) => {
    history.push({
      pathname: "/details",
      state: { carList: carList, id: id },
    });
  };

  const handleFilter = (color: any, manufacturer: any) => {
    updateFilterColor(color);
    updateFilterManufacturer(manufacturer);
    if (color == "allcolors") {
      color = undefined;
    }
    if (manufacturer == "allmanufacturers") {
      manufacturer = undefined;
    }
    getCarList(1, color, manufacturer);
  };

  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>

      <Router history={history}>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  colors={colors}
                  loading={loading}
                  totalCarCount={totalCarCount}
                  manufacturers={manufacturers}
                  cars={carList}
                  carCountPerPage={carsPerPage}
                  totalPages={totalPages}
                  currentPageNumber={currentPageNumber}
                  onClick={handleClick}
                  onViewDetails={onViewDetails}
                  onHandleFilter={handleFilter}
                />
              )}
            ></Route>
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                  colors={colors}
                  loading={loading}
                  totalCarCount={totalCarCount}
                  manufacturers={manufacturers}
                  cars={carList}
                  carCountPerPage={carsPerPage}
                  totalPages={totalPages}
                  currentPageNumber={currentPageNumber}
                  onClick={handleClick}
                  onViewDetails={onViewDetails}
                  onHandleFilter={handleFilter}
                />
              )}
            ></Route>
            <Route
              exact
              path="/favorites"
              render={() => <Favorites onViewDetails={onViewDetails} />}
            ></Route>
            <Route exact path="/details" component={Details}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </div>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default withRouter(App);
