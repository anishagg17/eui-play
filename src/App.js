import React, { Fragment } from "react";
import "./App.css";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import codes from "./constants/codes";

function App() {
  return (
    <Fragment>
      <NavBar />
      {codes.map(code => (
        <Editor code={code} />
      ))}
    </Fragment>
  );
}

export default App;
