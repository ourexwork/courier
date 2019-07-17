import React, { Component, useState, useEffect } from "react";
//
import { fade, makeStyles } from "@material-ui/core/styles";
import { navigationStyle } from "../materialstyle/navigation.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Hidden from "@material-ui/core/Hidden";
//
import { connect } from "react-redux";
import { history } from "../routers/AppRouter";
import { NavLink } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from "prop-types";
import {
  //animateScroll,
  Link
} from "react-scroll";
import HomePageDrawer from "./HomePageDrawer";
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

// import SearchTrack from "./SearchTrack";

function Navigation(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  //
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropOpen] = useState(false);
  // const [leftDrawer, setLeftDrawer] = useState(false);
  // const [closeDrawer, setCloseDrawer] = useState(null);

  // sidebar Drawer State
  const [toggleDrawer, setToggleDrawer] = useState(false);

  // toggle the state of the navigation
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleDrawer = () => {
    setToggleDrawer(prevDrawerState => !prevDrawerState);
  };

  // const handleOpenDrawer = () => {
  //   setLeftDrawer(true);
  // };

  // const handleCloseDrawer = () => {
  //   setLeftDrawer(false);
  // };

  const toggleDropdown = () => {
    setDropOpen(!dropdownOpen);
  };

  const handleSetActive = () => {
    // Check if the isOpen state is true
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  };

  const addScroll = () => {
    // get the window scroll
    const offset = window.scrollY;
    if (offset > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function handleLogOut() {
    localStorage.removeItem("x-auth-token");
    history.push("/");
  }

  useEffect(() => {
    window.addEventListener("scroll", addScroll);
  }, []);

  useEffect(() => {
    window.removeEventListener("scroll", addScroll);
  }, [scroll]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          if (this.props.user && this.props.isAdmin) {
            history.push("/dashboard");
          } else {
            history.push("/user");
          }
        }}
      >
        Dashboard
      </MenuItem>
      <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {props.user ? (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="Account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Dashboard</p>
        </MenuItem>
      ) : (
        <div>
          <NavItem style={{ textAlign: "center" }}>
            <NavLink className="registerButton" to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem style={{ textAlign: "center" }}>
            <NavLink className="registerButton" to="/register">
              Register
            </NavLink>
          </NavItem>
        </div>
      )}
    </Menu>
  );
  const navScroll = scroll ? "nav--scroll" : "";
  const useStyles = makeStyles(navigationStyle);
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              // color="inherit"
              aria-label="Open drawer"
              onClick={handleToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <HomePageDrawer
            left={toggleDrawer}
            setToggleDrawer={setToggleDrawer}
            // close={closeDrawer}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
          />
          <Hidden mdUp>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Track your shipment..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "Search" }}
              />
            </div>
          </Hidden>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div>
              <Navbar expand="md" className={"nav fixed-top " + navScroll}>
                <NavbarBrand>
                  <Typography className={classes.title} variant="h6" noWrap>
                    RILXPRESS
                  </Typography>
                </NavbarBrand>
                <Container>
                  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Track your shipment..."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{ "aria-label": "Search" }}
                    />
                  </div>
                  <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="ml-auto ">
                      <NavItem>
                        <Link
                          className="navigation__link"
                          to="home"
                          spy
                          smooth="easeInOutQuart"
                          duration={2000}
                          activeClass="nav__linkActive"
                        >
                          Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          className="navigation__link"
                          to="about"
                          spy
                          smooth="easeInOutQuart"
                          duration={2000}
                          activeClass="nav__linkActive"
                          offset={-18}
                          onSetActive={handleSetActive}
                        >
                          About
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          className="navigation__link"
                          to="services"
                          spy
                          smooth="easeInOutQuart"
                          duration={2000}
                          activeClass="nav__linkActive"
                          onSetActive={handleSetActive}
                        >
                          Services
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          className="navigation__link"
                          to="testimonial"
                          spy
                          smooth="easeInOutQuart"
                          duration={2000}
                          activeClass="nav__linkActive"
                          onSetActive={handleSetActive}
                        >
                          Testimonial
                        </Link>
                      </NavItem>

                      {props.user ? (
                        <NavItem style={{ textAlign: "center" }}>
                          {props.user && props.isAdmin ? (
                            <div>
                              <Dropdown
                                isOpen={dropdownOpen}
                                toggle={toggleDropdown}
                              >
                                <DropdownToggle caret>
                                  name (Admin Dash...)
                                </DropdownToggle>
                                <DropdownMenu>
                                  <NavLink to="/dashboard">
                                    {" "}
                                    <DropdownItem>Dashboard</DropdownItem>{" "}
                                  </NavLink>
                                  <DropdownItem onClick={handleLogOut}>
                                    Log Out
                                  </DropdownItem>
                                  <DropdownItem disabled>
                                    Action (disabled)
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          ) : (
                            <div className="loginButton">
                              <Dropdown
                                isOpen={dropdownOpen}
                                toggle={toggleDropdown}
                              >
                                <DropdownToggle caret>
                                  name (Dashboard)
                                </DropdownToggle>
                                <DropdownMenu>
                                  <NavLink to="/user">
                                    {" "}
                                    <DropdownItem>Dashboard</DropdownItem>{" "}
                                  </NavLink>
                                  <DropdownItem>Log Out</DropdownItem>
                                  <DropdownItem disabled>
                                    Action (disabled)
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          )}
                        </NavItem>
                      ) : (
                        <React.Fragment>
                          <NavItem style={{ textAlign: "center" }}>
                            <NavLink className="loginButton" to="/login">
                              Login
                            </NavLink>
                          </NavItem>
                          <NavItem style={{ textAlign: "center" }}>
                            <NavLink className="registerButton" to="/register">
                              Register
                            </NavLink>
                          </NavItem>
                        </React.Fragment>
                      )}
                    </Nav>
                  </Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <NavbarBrand>
              <Typography className={classes.title} variant="h6" noWrap>
                RILXPRESS
              </Typography>
            </NavbarBrand>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

Navbar.propTypes = {
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
const mapStateToProps = state => {
  return {
    user: !!state.auth._id,
    isAdmin: !!state.auth.isAdmin
  };
};

export default connect(mapStateToProps)(Navigation);
