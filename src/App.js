import React, { useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
// import codes from "./constants/codes";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Store";
import Live from "./components/Live";
import PureEui from "./components/PureEui";
import styled from "styled-components";
import { Typography as _Typography } from "@material-ui/core";
import {
  EuiSpacer,
  EuiLoadingSpinner as _EuiLoadingSpinner,
} from "@elastic/eui";
import SignUp from "./components/SignUp";
// import { auth } from "./fbConfig";
import { CodeContext } from "./porvider/codeProvider";

const EuiLoadingSpinner = styled(_EuiLoadingSpinner)`
  // height: 20%;
  // width: 20%;
  display: block;
  margin: 30% auto;
`;

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
  heigh: 100%;
`;
const App = props => {
  useEffect(() => {
    // console.log("props", props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const user = React.useContext(UserContext);

  let codes = React.useContext(CodeContext);
  let dsa = null;
  if (codes && codes.items) {
    dsa = codes.items;
  }
  // console.log("dsa", dsa);

  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route path="/create" exact component={Live} />
          <Route path="/Community">
            <Full>
              <Typography variant="h5">
                Several componets created by Community
              </Typography>
              <EuiSpacer size="s" />
              {dsa && Array.isArray(dsa) && dsa.length > 0 ? (
                dsa.map(({ id, code, desc, email }) => (
                  <div key={id}>
                    <Typography variant="h6">
                      {desc && desc.length > 0 ? desc : "No description"}
                    </Typography>
                    <Editor code={code} />
                  </div>
                ))
              ) : (
                <EuiLoadingSpinner size="xl" />
              )}
              <EuiSpacer size="s" />
            </Full>
          </Route>
          <Route path="/login" component={SignUp} />
          <Route path="/" component={PureEui} />
        </Switch>
      </Provider>
    </Router>
  );
};

// export default connect(null, { auth })(App);
export default App;
