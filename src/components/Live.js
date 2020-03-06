import React from "react";
import _ErrorIcon from "@material-ui/icons/Error";
import { LiveProvider, LiveEditor, withLive } from "react-live";
import { EuiSpacer } from "@elastic/eui";
import styled from "styled-components";
import { UserContext } from "../porvider/userProvider";
import { firestore } from "../fbConfig";

const Container = styled.div`
  width: 80vw;
  margin: 1vh auto;
  min-height: calc(60vh);
  font-family: monospace;
  *:focus {
    outline: 2px solid rgb(226, 226, 226);
  }
  margin-bottom: 5vh;
  position: relative;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  height: 55vh;
  * {
    flex: 1;
  }
  positon: absolute;
`;

const StyledEditor = styled(LiveEditor)`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  color: inherit;
  box-sizeing: border-box;
`;

const LivePreview = styled.div`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  //   box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ErrorIcon = styled(_ErrorIcon)`
  float: right;
  // position: absolute;
  margin: auto 0px;
`;

const LiveError = styled.div`
  height: 20vh;
  box-sizing: border-box;
  padding: 8px;
  background-color: rgb(84, 26, 20);
  border: 2px solid rgb(212, 67, 51);
  color: rgb(226, 226, 226);
  position: relative;
`;

const Form = styled.div`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  height: 20vh;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  color: rgb(226, 226, 226);
  padding: 5vw;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 2px solid #777;
  outline: none;
  align-items: center;
  min-height: unset;
  min-width: 140px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: rgb(51, 51, 51);
  font-family: aktiv-grotesk, sans-serif;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  height: 4.5vh;
  line-height: 35px;
  -webkit-box-pack: center;
  text-align: center;
  :hover {
    cursor: pointer;
    // border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    // font: 400 11px system-ui;
    background-color: rgb(84, 84, 84);
  }
`;

const Input = styled.input`
  border: 2px solid #777;
  width: 50vw;
  background: transparent;
  height: 4.5vh;
  color: #eee;
  box-sizing: border-box;
  padding: 0 10px;
  ::-webkit-input-placeholder {
    /* Edge */
    color: #eee;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #eee;
  }

  ::placeholder {
    color: #eee;
  }
`;

const TestComponent = ({ live }) => {
  const user = React.useContext(UserContext);
  let email = null;
  if (user) email = user.email;
  // const { email } = user;
  const Result = live.element;
  const [desc, UpdateDesc] = React.useState("");
  // console.log(live);
  const Submit = async (d, code) => {
    if (email) {
      let item = { desc: d, code };
      item.email = email;
      console.log("item", item);

      try {
        const ref = await firestore.collection("Eui").add(item);
        console.log("ref", ref);
      } catch (error) {
        console.log("error", error);
      }
    } else alert("Please Login");
  };

  return (
    <Container>
      <Flex>
        <StyledEditor />
        <LivePreview>
          <Result />
        </LivePreview>
      </Flex>
      {live.error ? (
        <LiveError>
          {live.error}
          <ErrorIcon />
        </LiveError>
      ) : (
        <Form>
          <Input
            placeholder="Add some description"
            value={desc}
            onChange={e => UpdateDesc(e.target.value)}
          ></Input>
          <Button onClick={() => Submit(desc, live.code)}>Submit</Button>
        </Form>
      )}
    </Container>
  );
};
const LiveComponent = withLive(TestComponent);

const hooksExample = `
function LikeButton() {
  const [likes, increaseLikes] = React.useState(0)
  return (
    <>
      <p style={{widht:"10px"}}>{likes} likes</p>
      <button
      style={{widht:"10px"}}
        onClick={() => increaseLikes(likes + 1)} >button</button>
    </>
  )
}
`.trim();

export default class Live extends React.Component {
  render() {
    return (
      <>
        <LiveProvider code={hooksExample}>
          <LiveComponent />
        </LiveProvider>
        <EuiSpacer size="l" />
        <EuiSpacer size="l" />
      </>
    );
  }
}
