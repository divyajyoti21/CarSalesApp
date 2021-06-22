import MultiFilter from "../../components/MultiFilter/MultiFilter";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
import Paginate from "../../components/Paginate/Paginate";
import { withRouter } from "react-router-dom";
import "./Home.css";
import Loading from "../../components/Loading/Loading";
import React from "react";
function Home(props: any) {
  function handleClick(id: any) {
    props.onClick(id);
  }
  function onViewDetails(id: any) {
    props.onViewDetails(id);
  }
  function handleFilterClick(color: string, manufacturer: string) {
    props.onHandleFilter(color, manufacturer);
  }
  return (
    <div className="home-grid">
      <div style={{ width: "30%", float: "left" }}>
        <MultiFilter
          colors={props.colors}
          manufacturers={props.manufacturers}
          onClick={handleFilterClick}
        ></MultiFilter>
      </div>
      <div style={{ width: "70%", float: "right" }}>
        <div className="available-cars">Available cars</div>
        <div className="car-count-display">
          Showing {props.carCountPerPage} of {props.totalCarCount} results
        </div>
        {props.loading ? (
          <React.Fragment>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index: number) => (
              <Loading key={index} />
            ))}
          </React.Fragment>
        ) : (
          props.cars.map((car: any, index: number) => (
            <DisplayCard
              key={index}
              car={car}
              onViewDetails={onViewDetails}
              index={index}
            ></DisplayCard>
          ))
        )}
        <Paginate
          onClick={handleClick}
          currentPage={props.currentPageNumber}
          totalNumberOfPages={props.totalPages}
        />
      </div>
    </div>
  );
}

export default withRouter(Home);
