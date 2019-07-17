import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link as ScrollLink } from "react-scroll";

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden"
    }
  },
  list: {
    width: 250,
    [theme.breakpoints.up("md")]: {
      visibility: "hidden"
    }
  },
  links: {
    textDecoration: "none",
    color: "inherit"
  }
}));

export default function MobileDrawer(props) {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    setDrawerState(props.left);
  }, [props.left]);

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  // The Sidebar Nav
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Home", "About", "Services", "Testimonial"].map((text, index) => (
          <ListItem button key={text}>
            <ScrollLink
              to={text.toLowerCase()}
              spy
              smooth="easeInOutQuart"
              duration={2000}
              offset={-18}
            >
              <ListItemText>{text}</ListItemText>
            </ScrollLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Register", "Login"].map((text, index) => (
          <NavLink
            className={classes.links}
            to={`/${text.toLowerCase()}`}
            key={text}
          >
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText> {text} </ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      className={classes.drawer}
      open={drawerState}
      onClose={() => {
        toggleDrawer("left", false);
        props.setToggleDrawer(prevDrawerState => !prevDrawerState);
      }}
    >
      {sideList("left")}
    </Drawer>
  );
}
