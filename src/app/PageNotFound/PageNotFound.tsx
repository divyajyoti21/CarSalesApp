import { withRouter, Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div>
        <img
          style={{ height: "40px" }}
          src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"
        ></img>
      </div>
      <div>404 - Not Found</div>
      <div>Sorry, the page you are looking for does not exist</div>
      <div>
        You can always go back to the{" "}
        <Link className="redirectHome" to="/home">
          homepage
        </Link>
      </div>
    </div>
  );
}

export default withRouter(PageNotFound);
