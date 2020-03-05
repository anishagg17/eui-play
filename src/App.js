import React, { Fragment } from "react";
import "./App.css";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import codes from "./constants/codes";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Store";
import Live from "./components/Live";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Fragment>
              {codes.map(code => (
                <Editor code={code} />
              ))}
            </Fragment>
          </Route>
          <Route path="/create" exact component={Live} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
