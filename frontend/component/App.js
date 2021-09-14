import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/FormLogin'
import NavBar from './components/NavBar'
import Signup from './components/FormSignup'
import ErrorPage from './components/ErrorPage'
//import Axios from "axios";

function App() {


  return (
   <>
   <NavBar/>
   <Switch>
   <Route exact path="/" >
   <Home/>
   </Route>

   <Route path="/about">
   <About/>
   </Route>

   <Route path="/contact">
   <Contact/>
   </Route>

   <Route path="/login">
   <Login/>
   </Route>

   <Route path="/signup">
   <Signup/>
   </Route>
  
   <Route> 
   <ErrorPage/>
   </Route>
   </Switch>
   </>
  )
}

export default App
