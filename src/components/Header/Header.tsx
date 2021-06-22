import React from "react";
import { withRouter, Link, Route } from "react-router-dom";
function Header(props: any) {
  return (
    <React.Fragment>
      <nav>
        <ul id="navbar">
          <li style={{ float: "left" }}>
            <a href="/home">
              <img
                className="logo"
                src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"
              ></img>
            </a>
          </li>
          <li style={{ float: "right" }}>
            <a href="/favorites">Favorites</a>
          </li>
          <li style={{ float: "right" }}>
            <a href="">Purchase</a>
          </li>
          <li style={{ float: "right" }}>
            <a href="">My Orders</a>
          </li>
          <li style={{ float: "right" }}>
            <a href="">Sell</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default withRouter(Header);
