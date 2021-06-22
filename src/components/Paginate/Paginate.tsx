import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import "./Paginate.css";
function Paginate(props: any) {
  function handleClick(id: any) {
    props.onClick(id);
  }
  return (
    <React.Fragment>
      <div id="paginate" className="paginate">
        <div>
          <LinkButton id="First" onClick={handleClick}></LinkButton>
        </div>
        <div>
          <LinkButton id="Prev" onClick={handleClick}></LinkButton>
        </div>
        <div className="page-count">
          Page {props.currentPage} of {props.totalNumberOfPages}
        </div>
        <div>
          <LinkButton id="Next" onClick={handleClick}></LinkButton>
        </div>
        <div>
          <LinkButton id="Last" onClick={handleClick}></LinkButton>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Paginate;
