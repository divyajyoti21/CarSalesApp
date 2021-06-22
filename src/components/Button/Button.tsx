import React from "react";
import "./Button.css";
function Button(props: any) {
  function handleClick(event: any) {
    props.onClick(event);
  }
  return (
    <React.Fragment>
      <button
        className="button"
        data-testid={props.testid}
        onClick={handleClick}
      >
        {props.name}
      </button>
    </React.Fragment>
  );
}
export default Button;
