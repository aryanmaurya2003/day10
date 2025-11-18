import { Navigate } from 'react-router-dom';
import React, { Children } from 'react'

function ProtectedRoute({authenticated,children}) {
  
    if(!authenticated){
        alert("please login first");  
        return <Navigate to="/login"/>
    }


  return children;
}

export default ProtectedRoute