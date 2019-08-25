import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import reducers from "./store/reducers";
import Home from "./pages/home";
import AllBooks from "./pages/all_books";
import SearchBooks from "./pages/search_book";
import CreateBook from "./pages/create_book";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Home path="/" />
      <AllBooks path="/all" />
      <SearchBooks path="/search/:filter" />
      <CreateBook path="/create" />
    </Router>
  </Provider>,
  document.getElementById("main")
);
