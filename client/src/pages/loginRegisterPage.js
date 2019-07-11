import React from "react";
import Login from "./Login";
import Register from "./Register";
import Slider from "../components/Slider";

import { connect } from "react-redux";

class loginRegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: false
    };
    this.redirectToRegister = this.redirectToRegister.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  componentDidMount() {
    if (this.props.login === true) {
      this.showLogin();
    }

    if (this.props.register === true) {
      this.showRegister();
    }
  }

  showRegister() {
    this.setState({ login: false, register: true });
  }
  showLogin() {
    this.setState({ login: true, register: false });
  }

  redirectToRegister() {
    this.setState({ login: false, register: true });
  }

  redirectToLogin() {
    this.setState({ login: true, register: false });
  }

  render() {
    return (
      <div className="container-fluid align img">
        <div className="row align ">
          <div className="col-12 col-lg-7 col-md-12 col-sm-4 col-sm-3 col-xm-3 center hide-on-mobile">
            <Slider />
          </div>
          <div className="col-12 col-lg-5 col-md-12 col-sm-4 col-sm-3 col-xm-3  center">
            {this.state.register && (
              <Register
                login={this.redirectToLogin}
                history={this.props.history}
              />
            )}
            {this.state.login && (
              <Login
                {...this.props}
                {...this.setState}
                register={this.redirectToRegister}
              />
            )}

            {}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(loginRegisterPage);
