import axios from 'axios';

const getTestimonials = testimonials => ({
  type: 'GET_TESTIMONIALS',
  testimonials
});

const startGetTestimonials = () => {
  return dispatch => {
    // make a call to the server
    axios.get('/api/testimonial').then(testimonials => {
      // fetch all the testimonials and dispatch to the reduxStore
      dispatch(getTestimonials(testimonials));
    });
  };
};

export { getTestimonials, startGetTestimonials };
