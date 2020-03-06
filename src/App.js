import React, { Fragment } from "react";
import "./App.css";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import codes from "./constants/codes";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Store";
import Live from "./components/Live";
import PureEui from "./components/PureEui";
import styled from "styled-components";
import { Typography as _Typography } from "@material-ui/core";
import { EuiSpacer } from "@elastic/eui";
import SignUp from "./components/SignUp";

const Typography = styled(_Typography)`
  width: 90vh;
  color: rgb(226, 226, 226);
  display: block;
  font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  system-ui,"helvetica neue",helvetica,arial,sans-serif.aifont-size: 28px;
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  margin: 1vh auto;
`;

const Full = styled.div`
  heigh: 100vh;
`;
function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route path="/create" exact component={Live} />
          <Route path="/Community">
            <Full>
              <Typography variant="h5"> Try out various components</Typography>
              {codes.map(code => (
                <Editor code={code} />
              ))}
              <EuiSpacer size="s" />
            </Full>
          </Route>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/" component={PureEui} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
