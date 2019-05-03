import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => (
  <ScrollableAnchor id={'about'}>
    <section className='about'>
      <div className='container'>
        <h3 className='about__title'>About</h3>
        <div className='about__content'>
          <p>
            Speedex is a courier service created to simplify movement of your
            goods all over the world. We operate base on integrity and trust,
            and our clients all over the world trust us to deliver quality
            services. Our team is available to attend to your service need of
            your business and questions.
          </p>
          <img src='/svgs/logistics.svg' alt='about us svg' />
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default About;
