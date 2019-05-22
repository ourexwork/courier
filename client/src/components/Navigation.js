import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RsNavLink,
  Row,
  Col
} from 'reactstrap';
import PropTypes from 'prop-types';

import SearchTrack from './SearchTrack';

export default class Navigation extends Component {
  state = {
    scroll: false,
    isOpen: false
  };

  // toggle the state of the navigation
  toggleNavbar = () => {
    this.setState(() => ({
      isOpen: !this.state.isOpen
    }));
  };

  addScroll = () => {
    // get the window scroll
    const offset = window.scrollY;
    if (offset > 100) {
      this.setState(() => ({
        scroll: true 
      }));
    } else {
      this.setState(() => ({ scroll: false }));
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.addScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.addScroll);
  }

  render() {
    const navScroll = this.state.scroll ? 'nav--scroll' : '';
    return (
      // navigation components go in here
      <Navbar expand='md' className={'nav fixed-top ' + navScroll}>
        <Container>
          <NavbarBrand>brand</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />

          <Collapse isOpen={this.state.isOpen} navbar>
            <SearchTrack />

            <Nav navbar className='ml-auto '>
              <NavItem>
                <RsNavLink className='navigation__link' href='#home'>
                  Home
                </RsNavLink>
              </NavItem>
              <NavItem>
                <RsNavLink className='navigation__link' href='#about'>
                  About
                </RsNavLink>
              </NavItem>
              <NavItem>
                <RsNavLink className='navigation__link' href='#services'>
                  Services
                </RsNavLink>
              </NavItem>
              <NavItem>
                <RsNavLink className='navigation__link' href='#testimonial'>
                  Testimonial
                </RsNavLink>
              </NavItem>
              <NavItem>
                <NavLink className='loginButton' to='/login'>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='registerButton' to='/register'>
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Navbar.propTypes = {
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
