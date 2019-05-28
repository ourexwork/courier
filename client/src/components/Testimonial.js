import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-animated-slider';

const Testimonial = props => {
  const { testimonials } = props;
  console.log(testimonials);
  return (
    <section id='testimonial' className='testimonial'>
      <div className='container'>
        <div className='row'>
          <div className=' col-12'>
            <h3 className='title'>Customer Feedback</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <Slider
              autoplay
              duration={5000}
              infinite
              className='slider mx-auto testimonial__content'
            >
              {testimonials.map((testimonial, index) => (
                <div className='row' key={index}>
                  <span className='col-2 mr-4 quote'>&ldquo;</span>

                  <p className='col-9 testimonial__text'>{testimonial.text}</p>

                  <h3 className='col-12'>{testimonial.customer}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  testimonials: state.testimonials
});

export default connect(mapStateToProps)(Testimonial);
