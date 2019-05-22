import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const Footer = () => (
  <ScrollableAnchor id={'footer'}>
    <footer>
      <Container>
        <Row className='justify-content-center'>
          <Col md='5'>
            <img src='' alt='speedex Brand' />
            <p>
              Our team is available to attend to your service need of your
              business and questions.
            </p>
            <h3 className='text-center'>Contact Info</h3>
            <p className='text-center'>
              (0888) 888-888 <br />
              contact@speedex.com
            </p>
          </Col>
        </Row>
      </Container>
      <hr className='socket' />
      <p className='text-center'>&copy; Speedex {moment().get('year')}</p>
    </footer>
  </ScrollableAnchor>
);
export default Footer;
