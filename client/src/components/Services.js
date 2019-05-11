import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Services = () => (
  <ScrollableAnchor id={'services'}>
    <section className='services'>
      <div className='container'>
        <h3 className='title'>Services</h3>
        <div className='row'>
          <div className='col-xs-12 col-md-4 mb-4'>
            <div className='services__box shadow'>
              <img
                src='/svgs/deliveries.svg'
                alt='deliveries'
                className='img-fluid'
              />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className='col-xs-12 col-md-4 mb-4'>
            <div className='services__box shadow'>
              <img
                src='/svgs/container-ship.svg'
                alt='deliveries'
                className='img-fluid'
              />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className='col-xs-12 col-md-4 mb-4'>
            <div className='services__box shadow'>
              <img
                src='/svgs/aircraft.svg'
                alt='deliveries'
                className='img-fluid'
              />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Services;
