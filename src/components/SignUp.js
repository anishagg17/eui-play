import React, { Component } from "react";
import { auth } from "../fbConfig";
import { withRouter } from "react-router-dom";
import {
  EuiFieldText as _EuiFieldText,
  EuiSpacer,
  EuiButton,
} from "@elastic/eui";

import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 1vh auto;
  font-family: monospace;
  *:focus {
    outline: 2px solid rgb(226, 226, 226);
  }
  position: relative;
`;
const Form = styled.div`
  border: 2px solid #333;
  height: 60vh;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  // flex-bias: 50%;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const EuiFieldText = styled(_EuiFieldText)`
  background-color: #333;
  color: #ddd;
  :focus {
    background-color: rgb(19, 20, 24);
    color: rgb(27, 169, 245);
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2),
      0 4px 4px -2px rgba(0, 0, 0, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
`;

class SignUp extends Component {
  state = {
    semail: "",
    lemail: "",
    spassword: "",
    lpassword: "",
  };

  onChange = ({ target: { id, value } }) => {
    // console.log('e', id);
    this.setState({ [id]: value });
  };

  Sign = () => {
    auth
      .createUserWithEmailAndPassword(this.state.semail, this.state.spassword)
      .then(u => console.log("u", u));
    this.props.history.push("/");
  };

  Log = () => {
    auth
      .signInWithEmailAndPassword(this.state.lemail, this.state.lpassword)
      .then(u => console.log("u", u));
    this.props.history.push("/");
  };

  render() {
    let { semail, spassword, lemail, lpassword } = this.state;
    return (
      <Container>
        <Flex>
          <Form>
            <EuiFieldText
              placeholder="Email"
              id="semail"
              value={semail}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            <EuiSpacer />
            <EuiFieldText
              // className="euiFieldText"
              placeholder="Password"
              id="spassword"
              type="password"
              onChange={this.onChange}
              value={spassword}
              aria-label="Use aria labels when no actual label is in use"
            />
            <EuiSpacer />
            <EuiButton onClick={this.Sign}>Sign Up</EuiButton>
          </Form>

          <EuiSpacer />
          <Form>
            <EuiFieldText
              placeholder="Email"
              id="lemail"
              value={lemail}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            <EuiSpacer />
            <EuiFieldText
              // className="euiFieldText"
              placeholder="Password"
              id="lpassword"
              type="password"
              onChange={this.onChange}
              value={lpassword}
              aria-label="Use aria labels when no actual label is in use"
            />
            <EuiSpacer />
            <EuiButton onClick={this.Log}>Login</EuiButton>
          </Form>
        </Flex>
      </Container>
    );
  }
}

export default withRouter(SignUp);
