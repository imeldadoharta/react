import React from "react"
import {  Navigate} from "react-router-dom";

const SignOut = (props) => {
  
        localStorage.clear() 
   
  return (
    <div>
     
      <Navigate to='/login' />

    </div>
  )
};

export default SignOut;
