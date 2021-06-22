// app.test.js
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Details from "./app/Details/Details";
import PageNotFound from "./app/PageNotFound/PageNotFound";
import Favorites from "./app/Favorites/Favorites";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/Available/i)).toBeInTheDocument();
});

test("landing on details page", () => {
  const history = createMemoryHistory();
  history.push("/details");
  render(
    <Router history={history}>
      <Details />
    </Router>
  );
  expect(screen.getByText(/current/i)).toBeInTheDocument();
});

test("landing on a favorites page", () => {
  const history = createMemoryHistory();
  history.push("/favorites");
  render(
    <Router history={history}>
      <Favorites />
    </Router>
  );
  expect(screen.getByText(/favorite cars/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/detadfsss");
  render(
    <Router history={history}>
      <PageNotFound />
    </Router>
  );
  expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
});
