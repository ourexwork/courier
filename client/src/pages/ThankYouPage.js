import React from "react";
import { Link } from "react-router-dom";

const ThankyouPage = () => (
  <div className="container-fluid thankyou-background ">
    <div className="row center thank-you-align overlay">
      <div className="thankyou-text">
        {" "}
        Thank you for Registering with speedex{" "}
      </div>
      <div className="thankyou-text small">
        Please check your email to verify your account
      </div>

      <Link to="/">
        <div>
          <button className="thankyou-button">Go to HomePage</button>
        </div>
      </Link>
    </div>
  </div>
);

export default ThankyouPage;
