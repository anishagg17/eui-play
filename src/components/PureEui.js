import React, { Component } from "react";
import styled from "styled-components";
import {
  EuiButton,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiSwitch,
  EuiBadge,
  EuiCodeEditor,
} from "@elastic/eui";
import { Typography as _Typography } from "@material-ui/core";
import EditModal from "./EditModal";
import codes from "../constants/codes";

import "brace/mode/javascript";
import "brace/theme/github";

const Typography = styled(_Typography)`
  width: 75%;
  color: rgb(226, 226, 226);
  display: block;
  font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  system-ui,"helvetica neue",helvetica,arial,sans-serif.aifont-size: 28px;
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  margin: 1vh auto;
  margin-bottom: 2vh;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  //   background: yellow;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  width: 75%;
  display: flex;
  height: ${props => props && (props.height ? props.height : "100%")};
  //   background: white;
  border-bottom: ${props =>
    props && (props.border ? "1px solid #444" : "none")};
  justify-content: ${props => props.justify && "flex-start"};
  //   align-items: flex-start;
  color: rgb(223, 229, 239);

  margin-bottom: 2vh;
  * {
  }
`;

const Height = styled.div`
  height: 75vh;
  width: 75%;
`;

const View = styled.div`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  read-only: true;
  height: 100%;
  width: 100%;
`;

const FlexItem = styled.div`
  width: 90px;
  //   height: 29px;
  //   margin-bottom: -1px;
  positon: relative;
  //   box-sizeing: border-box;
  padding: 12px 12px 2px 12px;
  cursor: pointer;
  color: ${props => props && (props.change ? "#1BA9F5" : "inherit")};
  border-bottom: ${props =>
    props && (props.change ? "2px solid #1BA9F5" : "none")};
`;

export default class PureEui extends Component {
  state = { showCode: false, showDemo: true, showEditor: false };
  toggle = () => {
    this.setState(prevState => ({
      showCode: !prevState.showCode,
      showDemo: !prevState.showDemo,
    }));
  };

  componentDidMount() {
    // this.setState(prevState => ({
    //   showCode: !prevState.showCode,
    //   showDemo: !prevState.showDemo,
    // }));
  }

  closeModal = () => {
    this.setState({ showEditor: false });
  };

  render() {
    const { showCode, showEditor, showDemo } = this.state;
    return (
      <Container>
        <Typography variant="h5"> Tried to make similar to Eui-docs</Typography>

        <Flex height="48px" border>
          <FlexItem change={showDemo} onClick={this.toggle}>
            Demo
          </FlexItem>
          <FlexItem change={showCode} onClick={this.toggle}>
            Demo JS
          </FlexItem>
          <FlexItem onClick={() => this.setState({ showEditor: true })}>
            Edit Js
          </FlexItem>
        </Flex>
        <Height>
          {showEditor ? (
            <EditModal closeModal={this.closeModal} />
          ) : (
            <>
              {showDemo ? (
                <EuiButton onClick={() => window.alert("Button clicked")}>
                  Primary
                </EuiButton>
              ) : (
                <>
                  <EuiCodeEditor
                    mode="javascript"
                    theme="github"
                    width="100%"
                    value={codes[0]}
                    isReadOnly
                    setOptions={{
                      fontSize: "14px",
                      enableBasicAutocompletion: true,
                      enableSnippets: true,
                      enableLiveAutocompletion: true,
                    }}
                    onBlur={() => {
                      console.log("blur");
                    }} // eslint-disable-line no-console
                    aria-label="Code Editor"
                  />
                </>
              )}
            </>
          )}
        </Height>
      </Container>
    );
  }
}
