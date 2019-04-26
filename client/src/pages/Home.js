import React, { Component } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default class Home extends Component {
  state = {
    renderScroll: false
  };

  componentDidMount() {
    let height = document.getElementById('home');

    if (height.scroll) {
      this.setState(() => {
        return { renderScroll: true };
      });
    }

    if (height) {
      this.setState(() => {
        return { renderScroll: true };
      });
    }
  }

  render() {
    return (
      <div id='home'>
        <Header />
        <About />
        <Services />
        <Testimonial />
        <Footer />
        {this.state.renderScroll && <ScrollToTop />}
      </div>
    );
  }
}
