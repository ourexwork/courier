const testimonialDefaultState = [
  {
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, excepturi rerum. Nulla aliquam,aperiam officiis repellendus laborum error possimus at?',
    customer: 'Segun Aribade'
  },
  {
    text:
      'Placed a shipment on Speedex for my parcel to be shipped to Amsterdarm, it got there in no time.',
    customer: 'Mike Phelan'
  },
  {
    text: 'Thumbs up to the brain behind Speedex, Fast Delivery Service.',
    customer: 'Afeez Lukman'
  }
];

const testimonialReducer = (state = testimonialDefaultState, action) => {
  switch (action.type) {
    case 'GET_TESTIMONIALS':
      return action.testimonial;
    default:
      return state;
  }
};

export default testimonialReducer;
