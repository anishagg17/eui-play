import React, { Component } from "react";
import {
  LiveProvider,
  LiveEditor as _LiveEditor,
  LiveError as _LiveError,
  LivePreview as _LivePreview,
} from "react-live";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import styled from "styled-components";
import codes from "../constants/codes";

import {
  EuiButton,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiSwitch,
  EuiBadge,
} from "@elastic/eui";

const scope = {
  styled,
  EuiButton,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiSwitch,
  EuiBadge,
};

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  position: relative;
`;

const LivePreview = styled(_LivePreview)`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  display: flex;
  //   width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const LiveError = styled(_LiveError)`
  border: 2px solid rgb(51, 51, 51);
  height: 12vh;
  //   width: 100%;
  //   line-break: strict;
  //   overflow: scroll;
  background-color: rgb(84, 26, 20);
  border: 2px solid rgb(212, 67, 51);
  color: rgb(226, 226, 226);
  word-wrap: break-word;
  display: block;

  overflow-y: scroll;
  //   background-color: rgb(31, 31, 31);
`;
const LiveEditor = styled(_LiveEditor)`
  border: 2px solid rgb(51, 51, 51);
  background-color: rgb(31, 31, 31);
  color: inherit;
  height: 80vh;
  flex-basis: 60%;
  flex-grow: 0;
  flex-shrink: 0;

  //   width: 60%;
  //   box-sizeing: border-box;
`;

const Flexr = styled.div`
  width: 100%;
  display: flex;
  //   height: 100%;
`;

const Flexc = styled.div`
  flex-basis: 40%;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  flex-flow: column;
`;

const EditModal = ({ closeModal }) => {
  const classes = useStyles();

  const handleClose = () => {
    closeModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Container>
            <LiveProvider code={codes[0]} scope={scope}>
              <Flexr>
                <LiveEditor />
                <Flexc>
                  <LivePreview />
                  <LiveError />
                </Flexc>
              </Flexr>
            </LiveProvider>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditModal;
