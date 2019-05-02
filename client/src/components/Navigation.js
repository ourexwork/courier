import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SearchTrack from './SearchTrack';

export default class Navigation extends Component {
  render() {
    return (
      // navigation components go in here
      <nav className='fixed-top'>
        <div className='container'>
          <div className='navigation'>
            <a className='navbar-brand' href='#Brand'>
              brand
            </a>

            <div className='track-shipment'>
              <SearchTrack />
            </div>

            <ul class='navigation__menu'>
              <li className='navigation__menu-item'>
                <a className='navigation__link ' href='#home'>
                  Home
                </a>
              </li>
              <li className='navigation__menu-item'>
                <a className='navigation__link' href='#about'>
                  About
                </a>
              </li>
              <li className='navigation__menu-item'>
                <a className='navigation__link' href='#services'>
                  Services
                </a>
              </li>
              <li className='navigation__menu-item'>
                <a className='navigation__link' href='#testimonial'>
                  Testimonial
                </a>
              </li>
              <li className='navigation__menu-item '>
                <NavLink className='loginButton' to='/login'>
                  Login
                </NavLink>
              </li>
              <li className='navigation__menu-item'>
                <NavLink className='registerButton' to='/register'>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
