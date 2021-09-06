//import { ImageList } from '@material-ui/core';
import React from 'react';
//import '/home/bsk/predicto-1-8/src/components/registeration/Form.css';
import login from '../images/login.jpg'
import '../App.css';
//import {History} from 'react-router-dom'
import axios from "axios";
//import registered from 'react'
//import submituserRegistrationForm from "react"
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginForm = this.submituserLoginForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};

      fields["email"] = "";
      fields["password"] = "";

      this.setState({ fields: fields });
      alert(" Login Successfull !!!");
    }
    else {
      alert("Login unsuccesfull!!!");
    }
    const loggedin = {

      email: this.state.fields.email,

      password: this.state.fields.password,

      handleChange: this.submituserLoginForm,

    }


    axios.post("http://localhost:4000/api/login", loggedin)
      .then(response => console.group(response.data))

    //window.location = "/about"



  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please Enter Your Email Address !!!";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please Enter Valid Email Address !!!";
      }
    }


    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please Enter Your Password !!!";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please Enter Secure and Strong Password !!!";
      }
    }





    this.setState({
      errors: errors
    });
    return formIsValid;


  }


  render() {
    return (
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <figure>
            <img className='form-img' src={login} alt='logo' />
          </figure>
        </div>
        <div className="form-content-right">
          <div id="register">
            <h1><center>Login Here</center></h1>
            <form name="userLoginForm" onSubmit={this.submituserLoginForm} >

              <div className="form-inputs">
                <label>Email ID:</label>
                <input className="form-input" type="text" name="email" placeholder="Enter Your Registered Email Address" value={this.state.fields.email} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.email}</div>
              </div>

              <div className="form-content-right">
                <label>Password</label>
                <input className="form-input" type="password" name="password" placeholder="Please Enter Your Password" value={this.state.fields.password} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>

              <button className='form-input-btn' type='submit' value='submit' >Login</button>
              <div className='form-input-login'>Doesn't have an account? Register <a href='/register'>here</a></div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}


export default LoginForm;
