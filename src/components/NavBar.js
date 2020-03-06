import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import styled from "styled-components";
import TemporaryDrawer from "./SideDrawer";
import { Link as _Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { auth } from "../fbConfig";
import { UserContext } from "../porvider/userProvider";

const Link = styled(_Link)`
  text-decoration: none;
  color: #fff;
`;

const Button = styled(_Link)`
  border: 2px solid #777;
  outline: none;
  text-decoration: none;
  align-items: center;
  min-height: unset;
  min-width: 140px;
  // padding-right: 10px;
  // padding-left: 10px;
  background-color: rgb(51, 51, 51);
  font-family: aktiv-grotesk, sans-serif;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  overflow: hidden;
  color: #ffffff;
  height: 9vh;
  border-bottom: 1px solid rgb(41, 41, 41);
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
  margin-bottom: 7vh;import { provider } from '../fbConfig';

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

const ButtonAppBar = props => {
  const classes = useStyles();
  const options = {};
  return (
    <AppBar position="static" {...options}>
      <TemporaryDrawer />
      <Typography variant="h6" className={classes.title}>
        <Link to="">Eui-Play</Link>
      </Typography>
      <UserContext.Consumer>
        {user =>
          user ? (
            <Button color="inherit" to="/">
              LogOut
            </Button>
          ) : (
            <Button color="inherit" to="/login">
              LogIn
            </Button>
          )
        }
      </UserContext.Consumer>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(ButtonAppBar);
