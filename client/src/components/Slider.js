import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
class Slider extends React.Component {
  state = {
    auto: true,
    intervalTime: 10000,
    setinterval: undefined
  };

  componentDidMount() {
    const prev = document.querySelector("#left");
    prev.addEventListener("click", e => {
      this.myPrevslide();
    });

    // const next = document.querySelector("#right");
    // next.addEventListener("click", e => {
    //   this.myNextslide();
    // });

    if (this.state.auto) {
      this.state.setinterval = setInterval(
        this.myslide,
        this.state.intervalTime
      );
    }
  }

  myNextslide() {
    //get current myslide
    const current = document.querySelector(".current");
    // const myslide = document.querySelector('.myslide');
    const myslides = document.querySelectorAll(".myslide");
    //remove current class

    if (myslides.length > 1) {
      if (current.nextElementSibling) {
        // current.classList.remove('current');
        current.nextElementSibling.classList.add("current");
      } else {
        myslides[0].classList.add("current");
      }
      setTimeout(() => {
        current.classList.remove("current");
      });
    }
  }
  myPrevslide() {
    //get current myslide
    const current = document.querySelector(".current");
    const myslides = document.querySelectorAll(".myslide");
    console.log(myslides);
    //remove current class

    if (current.previousElementSibling) {
      current.classList.remove("current");
      current.previousElementSibling.classList.add("current");
      //   current.previousElementSibling.classList.add('current');
    } else {
      myslides[myslides.length - 1].classList.add("current");
    }
    setTimeout(() => {
      current.classList.remove("current");
    });
  }

  render() {
    return (
      <>
        <div className="myslider">
          <div className="myslide current">
            <div className="content">
              <h1>Speedex brings love to your doorsteps</h1>
              <p>We connect you and your loved ones</p>
            </div>
          </div>

          <div className="myslide current">
            <div className="content">
              <h1>Quick delivery </h1>
              <p>we get right to work on your jobs</p>
            </div>
          </div>
        </div>
        <div id="left" />
      </>
    );
  }
}

export default Slider;
