import React from "react";
import "./Loading.css";

function Loading(props: any) {
  return (
    <div className="display-card" style={{ padding: "24px", margin: "12px" }}>
      <div className="card-img-style"></div>
      <div className="loading-info">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loading;
