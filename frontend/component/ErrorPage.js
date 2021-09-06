import React from 'react'
import {NavLink} from 'react-router-dom'

const ErrorPage = ()=>{
    return (
        <>
           <div id="notfound">
               <div className="notfound">
                   <div className="notfound-404">
              
                     <h1><center>404</center></h1>
                    </div>
           
                   <h2> SORRY ): !!! PAGE NOT FOUND !!!</h2>
                
                    <p className="mb-5">
                        <center> The page you are looking for might have been removed
                                 had its name changed or is temporarily unavailable.</center>  
                    </p>
                    <center><NavLink to="/"> Back To Homepage</NavLink></center>
              </div>
            </div>
       </>

    )
}




export default ErrorPage;
