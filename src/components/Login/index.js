import "./index.css";

import { Component } from "react";

import Cookies from "js-cookie";
// import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (jwtTkoken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtTkoken, {
      expires: 1
    });
    history.replace("/");
  };

  onSubmitFailure = () => {
    this.setState({ showSubmitError: true});
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if(username==="prathap" && password === "prathap123"){
        const jwt_token = 'hjhdedbkjdbhbdj'
        this.onSubmitSuccess(jwt_token);
    }
    else{
        this.onSubmitFailure();
    }

    // const userDetails = { username, password };
    
    // const url = "http://localhost:3000/login";
    // const options = {
    //   method: "POST",
    //   body: JSON.stringify(userDetails),
    // };
    // const response = await fetch(url, options);
    // const data = await response.json();
    // if (response.ok === true) {
    //   this.onSubmitSuccess(data.jwt_token);
    // } else {
    //   this.onSubmitFailure();
    // }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    const { showSubmitError} = this.state;

    // const jwtToken = Cookies.get("jwt_token");
    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />;
    // }

    return (
        
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div>
          <button type="submit" className="login-button">
            Login
          </button>
          </div>
          {showSubmitError && <p className="error-message">* Username and password are wrong</p>}
        </form>
      </div>
    )
  }
}

export default Login