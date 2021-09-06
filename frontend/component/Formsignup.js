//import { ImageList } from '@material-ui/core';
import React from 'react';
//import '/home/bsk/predicto-1-8/src/components/registeration/Form.css';
import signuppic from '../images/register.png'
import '../App.css';
//import {History} from 'react-router-dom'
import axios from "axios";
//import { Error } from 'mongoose';
//import registered from 'react'
//import submituserRegistrationForm from "react"
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);


  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["email"] = "";
      fields["mobileno"] = "";
      fields["altmobileno"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";
      this.setState({ fields: fields });
      alert(" Registration Successfull !!!");

    }

    const registered = {
      username: this.state.fields.username,
      email: this.state.fields.email,
      mobileno: this.state.fields.mobileno,
      altmobileno: this.state.fields.altmobileno,
      password: this.state.fields.password,
      confirmpassword: this.state.fields.confirmpassword,
      submituserRegistrationForm: this.submituserRegistrationForm,
      handleChange: this.submituserRegistrationForm,
      onSubmit: this.onSubmit,
    }

    /*axios.post("http://localhost:8000/api/register",registered)
    .then(response =>console.group(response.data))

    window.location ="/login"*/

    axios
      .post("http://localhost:4000/api/register", registered)

      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((error) => {
        console.log("AXIOS ERROR: ", error);
      });

    //  window.location = "/login";

    /* axios
     .post(
       "http://localhost:4000/api/signup",
       {
         registered: {
       username:this.state.fields.username,
       email:this.state.fields.email,
       mobileno:this.state.fields.mobileno,
       altmobileno:this.state.fields.altmobileno,
       password:this.state.fields.password,
       confirmpassword:this.state.fields.confirmpassword,
         }
       },
       { withCredentials: true }
     )
     .then(response => {
       if (response.data.status === "created") {
         this.props.handleSuccessfulAuth(response.data);
       }
     })
     .catch(error => {
       console.log("registration error", error);
     });
   
    // window.location = "/login";*/

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please Enter Your Name !!!";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please Enter Alphabet Characters Only !!!";
      }
    }

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

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please Enter Your Phone Number !!!";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please Enter Valid Phone Number !!!";
      }
    }

    // if (!fields["altmobileno"]) {
    //   formIsValid = false;
    //   errors["altmobileno"] = "*Please Enter Your Alternate Phone Number !!!";
    // }

    /* if (fields["altmobileno"]===fields["mobileno"]){
      formIsValid = false;
      errors["altmobileno"] ="*Alternate Phone Number is Same as Phone Number !!!"
    }*/


    if (typeof fields["altmobileno"] !== "undefined") {
      if (!fields["altmobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["altmobileno"] = "*Please Enter Valid Alternate Phone Number !!!";
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
    if (!fields["confirmpassword"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Please Enter Your Confirm Password !!!";
    }

    if (fields["confirmpassword"] !== fields["password"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Password Does Not Matched !!!"
    }

    if (typeof fields["confirmpassword"] !== "undefined") {
      if (!fields["confirmpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["confirmpassword"] = "*Please Enter Secure and Strong Password !!!";
      }
    }



    this.setState({
      errors: errors,

      fullName: '',
      email: '',
      mobileNo: '',
      altMobile: '',
      password: '',
      confirmpassowrd: '',
    })

    return formIsValid;


  }


  render() {
    return (
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <figure>
            <img className='form-img' src={signuppic} alt='logo' />
          </figure>
        </div>
        <div className="form-content-right">
          <div id="register">
            <h1><center>Register Here</center></h1>
            <form name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
              <div className="form-inputs">
                <label>Full Name</label>
                <sup>*</sup>
                <input className="form-input" type="text" name="username" placeholder="Please Enter Your Name" value={this.state.fields.username} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.username}</div>
              </div>
              <div className="form-inputs">
                <label>Email ID</label>
                <sup>*</sup>
                <input className="form-input" type="text" name="email" placeholder="Please Enter Your Email Address" value={this.state.fields.email} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.email}</div>
              </div>
              <div className="form-inputs">
                <label>Phone Number</label>
                <sup>*</sup>
                <input className="form-input" type="text" name="mobileno" placeholder="Please Enter Your Phone Number" value={this.state.fields.mobileno} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.mobileno}</div></div>
              <div className="form-inputs">
                <label>Alternate Phone Number</label>
                <input className="form-input" type="text" name="altmobileno" placeholder="Please Enter Your Alternate Phone No." value={this.state.fields.altmobileno} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.altmobileno}</div></div>
              <div className="form-inputs">
                <label>Password</label>
                <sup>*</sup>
                <input className="form-input" type="password" name="password" placeholder="Please Enter Your Password" value={this.state.fields.password} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>
              <div className="form-inputs">
                <label>Confirm Password</label>
                <sup>*</sup>
                <input className="form-input" type="password" name="confirmpassword" placeholder="Please Enter Your Confirm Password" value={this.state.fields.confirmpassword} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.confirmpassword}</div>
              </div>
              <button className='form-input-btn' type='submit' value='submit' >Sign up</button>
              <div className='form-input-login'>Already have an account? Login <a href='/login'>here</a></div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}


export default RegisterForm;
