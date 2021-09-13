//import { ImageList } from '@material-ui/core';
import React from 'react';
//import '/home/bsk/predicto-1-8/src/components/registeration/Form.css';
//import signuppic from '../images/register.png'
import '/home/bsk/sidebar-with-sub/src/App.css';
//import {History} from 'react-router-dom'
import axios from "axios";
//import registered from 'react'
//import submituserProfileForm from "react"
class ProfileForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserProfileForm = this.submituserProfileForm.bind(this);
    

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserProfileForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["accountno"] = "";
          fields["bankname"] = "";
          fields["branchaddress"] = "";
          fields["ifsccode"] = "";
          
          this.setState({fields:fields});
          alert(" Updated Successfully !!!");
      }     

       const registered = {
        accountno:this.state.fields.accountno,
        bankname:this.state.fields.bankname,
        bankaddress:this.state.fields.bankaddress,
        
        ifsccode:this.state.fields.ifsccode,
        
        
        onSubmit:this.onSubmit,
      }

      axios.post("http://localhost:8000/api/register",registered)
      .then(response =>console.group(response.data))

      //window.location ="/login"

    

  }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["accountno"]) {
        formIsValid = false;
        errors["accountno"] = "*Please Enter Your Account Number !!!";
      }

      if (typeof fields["accountno"] !== "undefined") {
        if (!fields["accountno"].match(/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/)) {
          formIsValid = false;
          errors["accountno"] = "*Please Enter Valid Account Number !!!";
        }
      }

      if (!fields["bankname"]) {
        formIsValid = false;
        errors["bankname"] = "*Please Enter Your Bank Name !!!";
      }

      if (typeof fields["bankname"] !== "undefined") {
        if (!fields["bankname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["bankname"] = "*Please Enter Alphabet Characters Only !!!";
        }
      }

      if (!fields["branchaddress"]) {
        formIsValid = false;
        errors["branchaddress"] = "*Please Enter Your Bank Address !!!";
      }

      if (typeof fields["branchaddress"] !== "undefined") {
        if (!fields["branchaddress"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["branchaddress"] = "*Please Enter Alphabet Characters Only !!!";
        }
      }
     
      if (!fields["ifsccode"]) {
        formIsValid = false;
        errors["ifsccode"] = "*Please Enter Your IFSC Code !!!";
      }

      if (typeof fields["ifsccode"] !== "undefined") {
        if (!fields["ifsccode"].match(/^[A-Z]{4}0[A-Z0-9]{6}$/)) {
          formIsValid = false;
          errors["ifsccode"] = "*Please Enter valid IFSC Code !!!";
        }
        }
        
         
      
    
      this.setState({
        errors: errors,
      
          accountno:'',
          bankname:'',
          branchaddress:'',
          ifsccode:'',
         
          })
      
      return formIsValid;


    }
    
    
  render() {
    return (
     
    <div className="form-content-right">
      <div id="register">
        <h1><center>Additional Information</center></h1>
          <form  name="userProfileForm"  onSubmit= {this.submituserProfileForm} >
            <div className="form-inputs">
              <label>Account Number</label>
              <input className="form-input" type="text" name="accountno" placeholder="Please Enter Your Account Number"  value={this.state.fields.accountno} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.accountno}</div>
            </div>
            <div className="form-inputs">
              <label>Bank Name</label>
              <input className="form-input" type="text" name="bankname" placeholder="Please Enter Your Bank Name" value={this.state.fields.bankname} onChange={this.handleChange}  />
              <div className="errorMsg">{this.state.errors.bankname}</div>
            </div>
            <div className="form-inputs">
            <label>Branch Address</label>
        <input className="form-input" type="text" name="branchaddress" placeholder="Please Enter Your Phone Number" value={this.state.fields.branchaddress} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.branchaddress}</div></div>
            <div className="form-inputs">
            <label>IFSC Code</label>
        <input className="form-input" type="text" name="ifsccode" placeholder="Please Enter Bank IFSC Code" value={this.state.fields.ifsccode} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.ifsccode}</div></div>
           
            <button className='form-input-btn' type='submit' value='submit' >Update </button>
           
          </form>
        </div>
  
    </div>
      );
  }


}


export default ProfileForm;
