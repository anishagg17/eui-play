import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import _Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as _Link } from "react-router-dom";

import { EuiSpacer, EuiIcon } from "@elastic/eui";
const Link = styled(_Link)`
  * {
    text-decoration: none;
    text-decoration-color: transparent !important;
    * {
      text-decoration: none;
    }
  }

  color: #fff;
`;

const Divider = styled(_Divider)`
  background-color: rgba(255, 255, 255, 0.12);

  border-bottom: 1px solid rgb(255, 255, 255);
`;

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "rgb(66, 66, 66)",
    color: "#fff",
    height: "100%",
  },
  fullList: {
    width: "auto",
    backgroundColor: "rgb(66, 66, 66)",
    color: "#fff",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to={`/PureEui`}>
          <ListItem button>
            <ListItemIcon>
              <EuiIcon type="logoElastic" color="#ddd" size="l" />
            </ListItemIcon>
            <ListItem style={{ color: "#ddd" }}>PureEui</ListItem>
          </ListItem>
        </Link>
        <Link to={`/Community`}>
          <ListItem button>
            <ListItemIcon>
              <EuiIcon type="visTimelion" color="#ddd" size="l" />
            </ListItemIcon>
            <ListItem style={{ color: "#ddd" }}>Community</ListItem>
          </ListItem>
        </Link>
        <Link to={`/Create`}>
          <ListItem button>
            <ListItemIcon>
              <EuiIcon type="createAdvancedJob" color="#ddd" size="l" />
            </ListItemIcon>
            <ListItem style={{ color: "#ddd" }}>Create</ListItem>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </>
  );
}
