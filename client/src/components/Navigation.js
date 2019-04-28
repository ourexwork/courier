import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      // navigation components go in here
      <nav className='navigation navbar navbar-expand-lg fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#Brand'>
            brand
          </a>

          {/* navigation menu */}
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#services'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#testimonial'>
                Testimonial
              </a>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
