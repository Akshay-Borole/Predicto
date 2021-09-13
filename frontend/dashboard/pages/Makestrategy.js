//import { ImageList } from '@material-ui/core';
//import React from 'react';
//import '/home/bsk/predicto-1-8/src/components/registeration/Form.css';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import signuppic from './images/register.png'
import './App.css';
//import {History} from 'react-router-dom'
import axios from "axios";
//import { Error } from 'mongoose';
//import registered from 'react'
//import submitStrategyForm from "react"



class App extends React.Component {
    constructor() {
      super();
      
      this.CriteriaList = [
        { value: "topgainers", label: "Top Gainers" },
        { value: "toploosers", label: "Top Loosers" }
       
      ];
      
      this.NumberList = [
        { value: "one", label: "1" },
        { value: "two", label: "2" },
        { value: "three", label: "3" },
        { value: "four", label: "4" },
        { value: "five", label: "5" }
      
       
      ];

      this.state = {


        fields: {},
        errors: {}
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.submitStrategyForm = this.submitStrategyForm.bind(this);
    

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }
    submitStrategyForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["criterialist"] = "";
          fields["numberlist"] = "";
          fields["amount"] = "";
          fields["fromdate"] = "";
          fields["todate"] = "";
          this.setState({fields:fields});
          alert(" Sumbitted Successfully !!!");
        
      }     

       const created = {
        criterialist:this.state.fields.criterialist,
        numberlist:this.state.fields.numberlist,
        amount:this.state.fields.amount,
        fromdate:this.state.fields.fromdate,
        todate:this.state.fields.todate,
        submitStrategyForm:this.submitStrategyForm,
        handleChange:this.submitStrategyForm,
        onSubmit:this.onSubmit,
      }

      /*axios.post("http://localhost:8000/api/register",created)
      .then(response =>console.group(response.data))

      window.location ="/login"*/

  }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      // if (!fields["criterialist"]) {
      //   formIsValid = false;
      //   errors["criterialist"] = "*Please Select Criteria !!!";
      // }

      // if (!fields["numberlist"]) {
      //   formIsValid = false;
      //   errors["numberlist"] = "*Please Select Number of Companies !!!";
      // }

        if (!fields["amount"]) {
        formIsValid = false;
        errors["amount"] = "*Please Enter Amount !!!";
      }

      if (typeof fields["amount"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/\-?\d*\.?\d{1,2}/);
        if (!pattern.test(fields["amount"])) {
          formIsValid = false;
          errors["amount"] = "*Please Enter Valid Amount !!!";  
        }
      }

      if (!fields["fromdate"]) {
        formIsValid = false;
        errors["fromdate"] = "*Please Enter Date !!!";
      }

      if (!fields["todate"]) {
        formIsValid = false;
        errors["todate"] = "*Please Enter Date !!!";
      }
      
      
      
    
      this.setState({
        errors: errors,
      
          criterialist:'',
          numberlist:'',
          amount:'',
          fromdate:'',
          todate:'',

          })
      
      return formIsValid;


    }
    
    
  render() {
    return (
      <div className='form-container'>
     <span className='close-btn'>×</span>
     <div className='form-content-left'>
        {/* <figure>
          {/* <img className='form-img' src={signuppic} alt='logo' /> */}
        
        
      </div>
      
    <div className="form-content-right">
      <div id="register">
        <h1><center>Create Strategy</center></h1>
          <form  name="strategyForm"  onSubmit= {this.submitStrategyForm} >
            {/* <div className="form-inputs">
            <label>Select Criteria</label>
              <sup>*</sup>
              <select ClassName="form-input" value={this.state.value} onChange={this.handleChange}>
                <option value="null">Select</option>
                <option value="topgainers">Top Gainers</option>
                <option value="toploosers">Top Loosers</option>
                <option value="activevolume">Most Active by Volume</option>
                <option value="52weekhigh">52-week High</option>
              </select >
          </div>

          <div className="form-inputs">
            <label>Select Number of companies</label>
              <sup>*</sup>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="null">Select</option>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
              </select >
          </div> */}

          <div className="form-inputs">
              <label>
                Select Criteria:
              </label>
              <sup>*</sup>
              <ReactSelect
                name="criteria"
                value={this.state.fields.criterialist}
                onChange={this.handleChange}
                options={this.CriteriaList}
              />
              <div className="errorMsg">{this.state.errors.criterialist}</div>
            </div>

            <div className="form-inputs">
              <label>
                Select number of Companies:
              </label>
              <sup>*</sup>
              <ReactSelect
                name="number"
                value={this.state.fields.numberlist}
                onChange={this.handleChange}
                options={this.NumberList}
              />
              <div className="errorMsg">{this.state.errors.numberlist}</div>
            </div>

            <div className="form-inputs">
              <label>Enter Amount</label>
              <sup>*</sup>
              <input className="form-input"
               type="number" name="amount"
                placeholder="Please Enter Amount in Rupees"
                 value={this.state.fields.amount}
                  onChange={this.handleChange} 
                />
              <div className="errorMsg">{this.state.errors.amount}</div>
            </div>


            <div className="form-inputs">
            <label>Select Date(From)</label>
            <sup>*</sup>
        <input className="form-input"
         type="date"
        name="fromdate"
        placeholder="Please Enter Date"
        value={this.state.fields.fromdate}
        onChange={this.handleChange}
         />
        <div className="errorMsg">{this.state.errors.fromdate}</div>
        </div>

            <div className="form-inputs">
            <label>Select Date(To)</label>
            <sup>*</sup>
        <input className="form-input"
         type="date"
          name="todate"
           placeholder="Please Enter Date"
            value={this.state.fields.todate}
             onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.todate}</div>
        </div>
            
            <button className='form-input-btn' type='submit' value='submit' >Submit</button>
             
          </form>
        </div>
    </div>
    </div>
      );
  }


}


export default App;

