import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import Navigation from './Navigation';
import ScrollableAnchor from 'react-scrollable-anchor';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PropTypes from 'prop-types';

// Style for the svg icon

class Header extends Component {
  state = {
    content: [
      {
        title: 'Let Us Help you Ship Your Goods ',
        description:
          'We transfer goods as soon as you tell us to , we are at your service , lets put a smile on your face',
        button: 'Make A Shipment Order',
        image: '/images/slider/moving-truck.jpg'
      },
      {
        title:
          'Our Staffs Get Right To Work As Soon As Your Cargo Order Is Confirmed ',
        description:
          'We understand the value of time, so we try to get to to work as soon as possible',
        button: 'Make A Shipment Order',
        image: '/images/slider/person-moving.jpg'
      },
      {
        title: 'Your Cargo Is Always Safe With Us',
        description:
          'Security of your goods is top priority, sit back and Relax',
        button: 'Make A Shipment Order',
        image: '/images/slider/plane.jpg'
      }
    ]
  };

  render() {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id={'home'}>
        <div className='header'>
          <Navigation />
          <Slider
            previousButton
            nextButton
            autoplay={5000}
            className='slider-wrapper'
          >
            {this.state.content.map((item, index) => (
              <div
                key={index}
                className='slider-content'
                style={{
                  background: `url('${item.image}') no-repeat center center`
                }}
              >
                <div className='inner'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>

          <a href='#about' className='arrow-down'>
            <KeyboardArrowDownIcon className={classes.icon} />
          </a>
        </div>
      </ScrollableAnchor>
    );
  }
}

// Style for the svg icon
const styles = theme => ({
  icon: {
    spacing: theme.spacing.unit,
    fontSize: 32
  }
});

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

// <section>
// <img src={item.userProfile} alt={item.user} />
// <span>
//   Posted by <strong>{item.user}</strong>
// </span>
// </section>
