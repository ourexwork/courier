import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
// import el from "element-react";
// import Nav from "../components/nav";
import { Button } from "semantic-ui-react";
import { Menu, Segment, Responsive, Input, Icon } from "semantic-ui-react";
import {
  Collapse,
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
} from "reactstrap";
const Home = () => {
  const [activeItem, setActiveItem] = useState("HOME");
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
      </Head>

      <Segment className="bg-color m-0">
        {" "}
        <Navbar expand="md">
          <Menu.Menu position="left" className="logo p-0 m-0 my-auto ">
            <NavbarBrand href="/">rilxpress</NavbarBrand>
          </Menu.Menu>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Menu.Menu className="ml-auto" position="right">
              <Menu inverted pointing secondary>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Menu.Item
                      name="HOME"
                      active={activeItem === "HOME"}
                      onClick={handleItemClick}
                    />
                  </NavItem>
                  <NavItem>
                    <Menu.Item
                      name="ABOUT"
                      active={activeItem === "ABOUT"}
                      onClick={handleItemClick}
                    />
                  </NavItem>
                  <NavItem>
                    <Menu.Item
                      name="SERVICES"
                      active={activeItem === "SERVICES"}
                      onClick={handleItemClick}
                    />
                  </NavItem>
                  <NavItem>
                    <Menu.Item
                      name="TESTIMONIAL"
                      active={activeItem === "TESTIMONIAL"}
                      onClick={handleItemClick}
                    />
                  </NavItem>
                </Nav>
              </Menu>
            </Menu.Menu>
          </Collapse>
        </Navbar>
      </Segment>

      <div className="container-fluid pt-0 ril-bg-side p-5">
        <div className="row ">
          <div className="col ">
            <h1 className="margin-left-banner mb-2 text-white banner-text">
              Parcels Are Delivered
            </h1>
            <h1 className="margin-left-banner mb-2 text-white banner-text">
              On Time With No Hastle.
            </h1>
            <h5 className="mt-3 margin-left-banner">
              Easily track your courier, get courier courier within hours,
              efficiently and safely delivered.
            </h5>

            <Button className="margin-left-banner mb-5 px-5 x-3" primary>
              SIGN UP
            </Button>

            <div className="container-fluid m-0 pb-3  pt-4  p-0">
              <div className="row px-2">
                <div className="col-md-8 bg-search offset-md-2 mx-auto py-3 ">
                  <h5 className="text-white">
                    <span className="text-white">TRACK YOUR PRODUCT</span>
                  </h5>
                  <div className="d-flex">
                    <Input
                      loading
                      className="w-100 mr-2"
                      placeholder="Search..."
                    />
                    <Button className="flex-shrink-2 ">TRACK PRODUCT</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row d-flex w-100 justify-content-space-around text-center">
          <div>
            <div class="primary-bg p-5 m-3"></div>
            <h1 className="secondary advert-icon-text">1056+</h1>
            <h6 className="primary">Happy clients</h6>
          </div>

          <div>
            <div class="primary-bg p-5 m-3"></div>
            <h1 className="secondary advert-icon-text">7</h1>
            <h6 className="primary">Countries Covered</h6>
          </div>
          <div>
            <div class="primary-bg p-5 m-3"></div>
            <h1 className="secondary advert-icon-text">5</h1>
            <h6 className="primary">Parcels Delivered</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5 primary-light-bg">
        <div className="row ">
          <div className="col">
            <h3 className="p-5 learn-text">
              Nov 30, 2016 - 5 posts - ‎3 authors The Google Material UI Kit is
              great but could all the icons be in there please? ... Your email
              address ... Available in native XD format:
              http://www.xdguru.com/adobe-xd-icons-material/ ... 03 : Sharing on
              the web 178; 04 : Asset exporting 125; 05 : Extensibility 30; 06 :
              Integration with other tools 91; 07 : Mobile
            </h3>
          </div>
          <div className="col">
            <img src="/static/homepage/smile.png" className="img learn-img" />
          </div>
        </div>
      </div>

      <div className="container-fluid p-3 deliver-wrapper">
        <div className="row">
          <h1 className="text-white text-center mx-auto mt-5 ">
            What We Deliver
          </h1>
        </div>
        <div className="row m-3 p-md-2 mx-auto p-lg-5 d-flex w-100 justify-content-around">
          <div className="deliver-bg p-4 ">
            <img src="/static/homepage/gift.svg" className="img mx-auto p-3 " />
          </div>

          <div className="deliver-bg p-4 ">
            <img
              src="/static/homepage/necklace.svg"
              className="img mx-auto p-3 "
            />
          </div>

          <div className="deliver-bg p-4 ">
            <img
              src="/static/homepage/dress.svg"
              className="img mx-auto p-3 "
            />
          </div>

          <div className="deliver-bg p-4 ">
            <img
              src="/static/homepage/television.svg"
              className="img mx-auto p-3 "
            />
          </div>
          <div className="deliver-bg p-4 ">
            <img
              src="/static/homepage/signing-the-contract.svg"
              className="img mx-auto p-3 "
            />
          </div>
          <div className="deliver-bg p-4 ">
            <img src="/static/homepage/gift.svg" className="img mx-auto p-3 " />
          </div>
        </div>
        <div className="row p-5">
          <div className="col">
            <h6 className="p-2 text-white m-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              enim sapien, fermentum sit amet elit id, tincidunt eleifend elit.
              Donec at rhoncus leo. Vestibulum id urna vitae elit faucibus
              mattis nec sit amet libero. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse malesuada tristique
              sapien, eget mollis turpis varius id. Pellentesque venenatis
              hendrerit quam in vestibulum. Donec porttitor risus quis rutrum
              dapibus. Phasellus ultrices placerat nulla id posuere. Curabitur
              ut gravida ante, quis ultrices lorem. Mauris laoreet ultricies
              rhoncus. Nulla consequat libero ornare, pulvinar tellus eu,
              facilisis turpis. Vivamus in facilisis dui, sed efficitur arcu.
              Nulla vehicula interdum metus accumsan suscipit. Proin dignissim,
              enim vel feugiat malesuada, turpis odio gravida risus, at
              elementum urna justo tempor quams
            </h6>
          </div>
          <div className="col">
            <h6 className="p-2 text-white m-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              enim sapien, fermentum sit amet elit id, tincidunt eleifend elit.
              Donec at rhoncus leo. Vestibulum id urna vitae elit faucibus
              mattis nec sit amet libero. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse malesuada tristique
              sapien, eget mollis turpis varius id. Pellentesque venenatis
              hendrerit quam in vestibulum. Donec porttitor risus quis rutrum
              dapibus. Phasellus ultrices placerat nulla id posuere. Curabitur
              ut gravida ante, quis ultrices lorem. Mauris laoreet ultricies
              rhoncus. Nulla consequat libero ornare, pulvinar tellus eu,
              facilisis turpis. Vivamus in facilisis dui, sed efficitur arcu.
              Nulla vehicula interdum metus accumsan suscipit. Proin dignissim,
              enim vel feugiat malesuada, turpis odio gravida risus, at
              elementum urna justo tempor quams
            </h6>
          </div>
        </div>
      </div>

      <div className="container-fluid primary-light-bg p-5">
        <div className="row ">
          <div className="col"></div>
        </div>
      </div>

      <div className="container-fluid footer-bg  p-5">
        <div className="row text-white text-capitalize pl-5 pr-5">
          <div className="col">logo</div>
          <div className="col">
            {" "}
            <h6 className="">
              <strong>Company</strong>
            </h6>{" "}
            <br />
            <div>About Us</div> <br />
            <div>FAQs</div> <br />
            <div>Terms and Conditions</div> <br />
            <div>Privacy and Policy</div> <br />
          </div>
          <div className="col">
            {" "}
            <h6 className="">
              <strong>Company</strong>
            </h6>{" "}
            <br />
            <div>About Us</div> <br />
            <div>FAQs</div> <br />
            <div>Terms and Conditions</div> <br />
            <div>Privacy and Policy</div> <br />
          </div>
          <div className="col">
            {" "}
            <h6 className="">
              <strong>Company</strong>
            </h6>{" "}
            <br />
            <div>About Us</div> <br />
            <div>FAQs</div> <br />
            <div>Terms and Conditions</div> <br />
            <div>Privacy and Policy</div> <br />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-bg {
          background: #17252a 0% 0% no-repeat padding-box;
        }
        .deliver-bg {
          background: #2b7a78 0% 0% no-repeat padding-box;
          box-shadow: 0px 0px 35px #2b7a78;
          border-radius: 10px;
        }

        .deliver-wrapper {
          background: #17252a 0% 0% no-repeat padding-box;
        }
        .learn-text {
          letter-spacing: 0.87px;
        }

        .learn-img::before {
          content: "Learn A Few Things About Us";
          background: #3aafa9;
          padding: 10px;
        }
        .primary {
          color: #3aafa9;
        }

        .primary-bg {
          background: #3aafa9;
        }
        .secondary {
          color: #17252a;
        }

        .secondary-bg {
          background: #17252a;
        }
        .primary-light {
          color: #def2f1;
        }

        .primary-light-bg {
          background: #def2f1;
        }
        .advert-icon-text {
          font-weigth: 30px;
        }
        .justify-content-space-around {
          justify-content: space-around;
        }
        .bg-search {
          background: #17252a !important;
          opacity: 0.4 !important;
        }
        .banner-text {
          font: Black 68px NeoSans;
          font-sizez: 68px;
          letter-spacing: 0;
          color: #ffffff;
          opacity: 1;
          font-size: -webkit-xxx-large;
          font-weight: 900;
        }
        .margin-left-banner {
        }
        @media (min-width: 768px) {
          .margin-left-banner {
            margin-left: 150px !important;
          }
        }

        .margin-left-cancel {
          margin-left: -150px !important;
        }
        .logo {
          color: #fff !important;
        }
        .ril-bg-side {
          // height: 450px;
          background: #3aafa9 0% 0% no-repeat padding-box;
          opacity: 0.89;
        }
        .bg-color {
          background-color: #17252a !important;
        }
        .ui.primary.inverted.segment {
          background: #708ca9 !important;

          border: none;
          background: #17252a;
        }

        .nav-link {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Home;
