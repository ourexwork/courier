import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// styles
import '../styles/app.scss';
// import el from "element-react";
// import Nav from "../components/nav";
import { Button } from 'semantic-ui-react';
import {
  Menu,
  Segment,
  Responsive,
  Input,
  Icon,
  Search
} from 'semantic-ui-react';
import {
  Collapse,
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Testimonial from '../components/Testimonial';

const Home = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const [isOpen, setIsOpen] = useState(false);
  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <style></style>
      </Head>

      <div className='bg-color py-3 m-0'>
        <Container>
          <Navbar expand='md'>
            <NavbarBrand href='/'>rilxpress</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className='main-nav mr-auto' navbar>
                <NavItem>
                  <Link href='/'>
                    <NavLink>HOME </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='#about'>
                    <NavLink>ABOUT </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='#services'>
                    <NavLink>SERVICES </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='#testimonial'>
                    <NavLink>TESTIMONIAL </NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href='/track'>
                    <NavLink>TRACK SHIPMENT </NavLink>
                  </Link>
                </NavItem>
              </Nav>

              <Nav className='ml-auto' navbar>
                <NavItem className='button button--outline'>
                  <Link href='/login'>
                    <NavLink className='px-4'>Sign in </NavLink>
                  </Link>
                </NavItem>
                <NavItem className='button'>
                  <Link href='/register'>
                    <NavLink className='px-4'>Register </NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>

      <section className='landing-bg mt-5 pb-5'>
        <Container>
          <Row className='py-5 mb-5'>
            <Col xs='12' sm='6' className='pl-3'>
              <div>
                <h1 className='mb-2  landing-text'>
                  Parcels Are Delivered
                  <br />
                  On Time With No Hastle.
                </h1>
                <h5 className='mt-3 landing-text-secondary'>
                  Easily track your courier, get courier courier within hours,
                  efficiently and safely delivered.
                </h5>

                <button className='button mt-3 px-5 '>Register</button>
              </div>

              <div
                className='row pl-3  justify-content-space-between text-center'
                style={{ marginTop: '100px' }}
              >
                <div className='mr-3'>
                  <h1 className='secondary '>1056+</h1>
                  <h6 className='primary'>Happy clients</h6>
                </div>

                <div className='mx-3'>
                  <h1 className='secondary '>7</h1>
                  <h6 className='primary'>Countries Covered</h6>
                </div>
                <div className='mx-3'>
                  <h1 className='secondary '>5</h1>
                  <h6 className='primary'>Parcels Delivered</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='section-bg pt-5 pl-5 pr-5'>
        <Row className='mt-5'>
          <Col className='mt-5'>
            <img src='/static/homepage/smile.png' className='img img-fluid' />
          </Col>
          <Col>
            <h3 className='text-center display-3 about-text'>About</h3>
            <p className='p-5 learn-text'>
              Nov 30, 2016 - 5 posts - ‎3 authors The Google Material UI Kit is
              great but could all the icons be in there please? ... Your email
              address ... Available in native XD format:
              http://www.xdguru.com/adobe-xd-icons-material/ ... 03 : Sharing on
              the web 178; 04 : Asset exporting 125; 05 : Extensibility 30; 06 :
              Integration with other tools 91; 07 : Mobile
            </p>
          </Col>
        </Row>
      </section>

      <section className='p-3 deliver-wrapper'>
        <Container fluid>
          <div className='row'>
            <h1 className='text-white text-center mx-auto mt-5 display-3 '>
              What We Deliver
            </h1>
          </div>
          <div className='row m-3 p-md-2 mx-auto p-lg-5 d-flex w-100 justify-content-around'>
            <div className='deliver-bg p-4 '>
              <img
                src='/static/homepage/gift.svg'
                className='img mx-auto p-3 '
              />
            </div>

            <div className='deliver-bg p-4 '>
              <img
                src='/static/homepage/necklace.svg'
                className='img mx-auto p-3 '
              />
            </div>

            <div className='deliver-bg p-4 '>
              <img
                src='/static/homepage/dress.svg'
                className='img mx-auto p-3 '
              />
            </div>

            <div className='deliver-bg p-4 '>
              <img
                src='/static/homepage/television.svg'
                className='img mx-auto p-3 '
              />
            </div>
            <div className='deliver-bg p-4 '>
              <img
                src='/static/homepage/signing-the-contract.svg'
                className='img mx-auto p-3 '
              />
            </div>
            <div className='deliver-bg p-4 '>
              <img
                src='/static/homepage/gift.svg'
                className='img mx-auto p-3 '
              />
            </div>
          </div>
          <div className='row p-5'>
            <div className='col'>
              <h6 className='p-2 text-white m-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                enim sapien, fermentum sit amet elit id, tincidunt eleifend
                elit. Donec at rhoncus leo. Vestibulum id urna vitae elit
                faucibus mattis nec sit amet libero. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse malesuada tristique
                sapien, eget mollis turpis varius id. Pellentesque venenatis
                hendrerit quam in vestibulum. Donec porttitor risus quis rutrum
                dapibus. Phasellus ultrices placerat nulla id posuere. Curabitur
                ut gravida ante, quis ultrices lorem. Mauris laoreet ultricies
                rhoncus. Nulla consequat libero ornare, pulvinar tellus eu,
                facilisis turpis. Vivamus in facilisis dui, sed efficitur arcu.
                Nulla vehicula interdum metus accumsan suscipit. Proin
                dignissim, enim vel feugiat malesuada, turpis odio gravida
                risus, at elementum urna justo tempor quams
              </h6>
            </div>
            <div className='col'>
              <h6 className='p-2 text-white m-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                enim sapien, fermentum sit amet elit id, tincidunt eleifend
                elit. Donec at rhoncus leo. Vestibulum id urna vitae elit
                faucibus mattis nec sit amet libero. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse malesuada tristique
                sapien, eget mollis turpis varius id. Pellentesque venenatis
                hendrerit quam in vestibulum. Donec porttitor risus quis rutrum
                dapibus. Phasellus ultrices placerat nulla id posuere. Curabitur
                ut gravida ante, quis ultrices lorem. Mauris laoreet ultricies
                rhoncus. Nulla consequat libero ornare, pulvinar tellus eu,
                facilisis turpis. Vivamus in facilisis dui, sed efficitur arcu.
                Nulla vehicula interdum metus accumsan suscipit. Proin
                dignissim, enim vel feugiat malesuada, turpis odio gravida
                risus, at elementum urna justo tempor quams
              </h6>
            </div>
          </div>
        </Container>
      </section>

      <section className='primary-light-bg'>
        <div className='container'>
          <h2 className='py-5 text-center'>Our Client's Feedback</h2>
        </div>
        <Testimonial />
      </section>

      <footer className='footer-bg py-5 '>
        <Container>
          <Row>
            <Col md='3'>
              <p className='brand'>Rilxpress</p>
            </Col>
            <Col md='3'>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href='#about'>About us</a>
                </li>
                <li>
                  <a href='/frequently-asked-questions'>FAQs</a>
                </li>
                <li>
                  <a href='/terms'>Terms and Condition</a>
                </li>
                <li>
                  <a href='/policy'>Privacy policy</a>
                </li>
              </ul>
            </Col>
            <Col md='3'>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href='/login'>Login</a>
                </li>
                <li>
                  <a href='/regiser'>Register</a>
                </li>
                <li>
                  <a href='/terms'>Services</a>
                </li>
              </ul>
            </Col>
            <Col md='3'>
              <h3>Supports</h3>
              <div className='phone'>
                <p>+(234) 8534-2553-214</p>
                <p>+(234) 8534-2553-214</p>
              </div>
              <div className='email'>
                <p>Info@rilxpress.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
