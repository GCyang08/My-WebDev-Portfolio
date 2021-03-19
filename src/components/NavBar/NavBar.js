import React, { useState, useEffect } from "react";
import "./NavBar.css";

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const [navLinks] = useState([
    { label: "HOME", href: "home" },
    { label: "ABOUT", href: "about" },
    { label: "PROJECTS", href: "projects" },
  ]);

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 760
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const navBarLinks = navLinks.map((link, i) => {
    return (
      <li key={i}>
        <Link
          to={link.href}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          activeClass="Active"
        >
          {link.label}
        </Link>
      </li>
    );
  });

  const useStyles = makeStyles(() => ({
    toolbar: {
      backgroundColor: "#822659",
      borderBottom: "3px solid #364f6b ",
      color: "#f6f6f6",
    },
  }));

  const { toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <nav className="NavbarListItemsDesktop">
          <ul>{navBarLinks} </ul>
        </nav>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={toolbar}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={handleDrawerClose}
          transitionDuration={700}
        >
          <nav className="NavbarListItemsMobile">
            <ul>{navBarLinks} </ul>
          </nav>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <AppBar position="sticky">
      <header>{mobileView ? displayMobile() : displayDesktop()}</header>
    </AppBar>
  );
}

export default NavBar;
