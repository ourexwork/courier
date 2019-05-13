import React, { Component } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default class Home extends Component {
   state = {
    scroll: false
  };

  Scroll =() =>{

    const offset = window.scrollY;
    if (offset > 400) {
      this.setState(() => ({
        scroll:  true
      }));
    } else {
      this.setState(() => ({ scroll: false }));
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.Scroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.Scroll)
  }

  render() {
    const scrollTo = this.state.scroll ? '': 'hide' ;
    return (
      <div>
        <Header />
        <About />
        <Services />
        <Testimonial />
        <Footer />
       <div className={scrollTo}> <ScrollToTop  /></div> 
      </div>
    );
  }
}