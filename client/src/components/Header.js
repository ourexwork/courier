import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import Navigation from './Navigation';
import ScrollableAnchor from 'react-scrollable-anchor';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

class Header extends Component {
  state = {
    content: [
      {
        title: 'Let Us Help you Ship Your Goods ',
        description:
          'We transfer goods as soon as you tell us to , we are at your service , lets put a smile on your face',
        button: 'Make A Shipment Order',
        image: '/images/slider/moving-truck.jpg'
        // image: 'https://i.imgur.com/ZXBtVw7.jpg',
        // user: 'Luan Gjokaj',

        // userProfile: 'https://i.imgur.com/JSW6mEk.png'
      },
      {
        title:
          'Our Staffs Get Right To Work As Soon As Your Cargo Order Is Confirmed ',
        description:
          'We understand the value of time, so we try to get to to work as soon as possible',
        button: 'Make A Shipment Order',
        image: '/images/slider/person-moving.jpg'
        // image: 'https://i.imgur.com/DCdBXcq.jpg',
        // user: 'Erich Behrens',
        // userProfile: 'https://i.imgur.com/0Clfnu7.png'
      },
      {
        title: 'Your Cargo Is Always Safe With Us',
        description:
          'Security of your goods is top priority, sit back and Relax',
        button: 'Make A Shipment Order',
        image: '/images/slider/plane.jpg'
        // image: 'https://i.imgur.com/DvmN8Hx.jpg',
        // user: 'Bruno Vizovskyy',
        // userProfile: 'https://i.imgur.com/4KeKvtH.png'
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
                  <button>{item.button}</button>
                </div>
              </div>
            ))}
          </Slider>
          <a href='#about'>
            <KeyboardArrowDownIcon className={classes.icon + ' arrow-down '} />
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
export default withStyles(styles)(Header);

// <section>
// <img src={item.userProfile} alt={item.user} />
// <span>
//   Posted by <strong>{item.user}</strong>
// </span>
// </section>
