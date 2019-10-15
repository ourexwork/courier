import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Container,
  Row,
  Col
} from 'reactstrap';

const items = [
  {
    name: 'Hugo Hernandes',
    quote:
      'lorem ipsum dolor sit amet, dutan savic de roma an esquero di munich,aquila, tremos and vincent',
    src: '/static/homepage/testimonial/image-1.jpg'
  },
  {
    name: 'Hugo Hernandes',
    quote:
      'lorem ipsum dolor sit amet, dutan savic de roma an esquero di munich,aquila, tremos and vincent',
    src: '/static/homepage/testimonial/image-2.jpg'
  },
  {
    name: 'Hugo Hernandes',
    quote:
      'lorem ipsum dolor sit amet, dutan savic de roma an esquero di munich,aquila, tremos and vincent',
    src: '/static/homepage/testimonial/image-3.jpg'
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <Container>
        <Row>
          <Col>
            <p>{item.quote}</p>
          </Col>
        </Row>
      </Container>
    </CarouselItem>
  ));

  return (
    <div>
      <Carousel
        className='my-5'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default Testimonial;
