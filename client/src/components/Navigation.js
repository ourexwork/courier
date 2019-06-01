import React, { Component } from 'react';
import {connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { animateScroll, Link } from 'react-scroll';

import PropTypes from 'prop-types';

import SearchTrack from './SearchTrack';

class Navigation extends Component {
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

  handleSetActive = () => {
    // Check if the isOpen state is true
    if (this.state.isOpen) {
      setTimeout(() => {
        this.setState(() => ({
          isOpen: false
        }));
      }, 1500);
    }
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
                <Link
                  className='navigation__link'
                  to='home'
                  spy
                  smooth='easeInOutQuart'
                  duration={2000}
                  activeClass='nav__linkActive'
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className='navigation__link'
                  to='about'
                  spy
                  smooth='easeInOutQuart'
                  duration={2000}
                  activeClass='nav__linkActive'
                  offset={-18}
                  onSetActive={this.handleSetActive}
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className='navigation__link'
                  to='services'
                  spy
                  smooth='easeInOutQuart'
                  duration={2000}
                  activeClass='nav__linkActive'
                  onSetActive={this.handleSetActive}
                >
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className='navigation__link'
                  to='testimonial'
                  spy
                  smooth='easeInOutQuart'
                  duration={2000}
                  activeClass='nav__linkActive'
                  onSetActive={this.handleSetActive}
                >
                  Testimonial
                </Link>
                
              </NavItem>
        
              {this.props.user ?  
                <NavItem style={{ textAlign: 'center' }}>
                <NavLink className='loginButton' to='/dashboard'>
                dashboard
                </NavLink>
              </NavItem>
                :
                <React.Fragment>
                <NavItem style={{ textAlign: 'center' }}>
                <NavLink className='loginButton' to='/login'>
                  Login
                </NavLink>
              </NavItem>
              <NavItem style={{ textAlign: 'center' }}>
                <NavLink className='registerButton' to='/register'>
                  Register
                </NavLink>
                </NavItem>
                </React.Fragment>
              }
             
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
const mapStateToProps= (state)=>{
  return{
    user : !!state.auth._id
  }
}

export default connect(mapStateToProps)(Navigation)