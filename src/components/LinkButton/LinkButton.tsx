import React from "react";
import "./LinkButton.css";
function LinkButton(props: any) {
  function handleClick(event: any) {
    if (props.id == "View details") {
      props.onClick(event.target.value);
    } else {
      props.onClick(event.target.id);
    }
  }
  return (
    <React.Fragment>
      <button
        id={props.id}
        value={props.value}
        className="link-button"
        onClick={handleClick}
      >
        {props.id}
      </button>
    </React.Fragment>
  );
}
export default LinkButton;
