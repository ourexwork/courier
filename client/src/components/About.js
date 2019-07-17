import React from 'react';

const About = () => (
  <section id='about' className='about'>
    <div className='container'>
      <h3 className='title'>About Us</h3>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6 order-2 order-md-1 '>
          <p>
            Rilxpress is a courier service created to simplify movement of your
            goods all over the world. We operate base on integrity and trust,
            and our clients all over the world trust us to deliver quality
            services. Our team is available to attend to your service need of
            your business and questions.
          </p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 order-1'>
          <img
            className='img-fluid'
            src='/svgs/logistics.svg'
            alt='about us svg'
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
