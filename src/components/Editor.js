import React, { Component } from "react";
import {
  LiveProvider,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError,
  LivePreview as _LivePreview,
} from "react-live";
import styled from "styled-components";
import scope from "../constants/scope";

const Container = styled.div`
  width: 90vh;
  margin: 1vh auto;
  min-height: calc(30vh);
  *:focus {
    outline: 2px solid rgb(226, 226, 226);
  }
  margin-bottom: 5vh;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  height: 40vh;
  * {
    flex: 1;
  }
  positon: absolute;
`;

const LivePreview = styled(_LivePreview)`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  display: flex;
  //   box-sizing: border-box;
  align-items: center;
  text-align: center;
`;
const LiveError = styled(_LiveError)`
  border: 2px solid rgb(51, 51, 51);
  height: 12vh;
  background-color: rgb(31, 31, 31);
`;
const LiveEditor = styled(_LiveEditor)`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  color: inherit;
  //   overflow: scroll;
  box-sizeing: border-box;
  //   position: absolute;
`;

export default class Editor extends Component {
  render() {
    let { code } = this.props;
    if (!code) code = "<strong>Hello World!</strong>";

    return (
      <Container>
        <LiveProvider code={code} scope={scope}>
          <Flex>
            <LiveEditor className="teset" />
            <LivePreview />
          </Flex>
          <LiveError />
        </LiveProvider>
      </Container>
    );
  }
}
