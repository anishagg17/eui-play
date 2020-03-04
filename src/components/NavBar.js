import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

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
  height: 40px;
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

const AppBar = styled.div`
  width: 100% !important;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: rgb(31, 31, 31);

  color: #ffffff;
  height: 9vh;
  padding: 2vw;
  line-height: 26px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: flex !important;
  box-sizing: border-box;
  align-items: center !important;
  -webkit-box-pack: justify !important;
  justify-content: space-between !important;
  margin-bottom: 7vh;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const options = {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
  };

  return (
    <AppBar position="static" color="white" {...options}>
      {/* <Toolbar> */}
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Eui-Play
      </Typography>
      <Button color="inherit">Login</Button>
      {/* </Toolbar> */}
    </AppBar>
  );
}
