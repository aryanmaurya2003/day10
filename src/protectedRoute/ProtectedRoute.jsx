import { Navigate } from 'react-router-dom';
import React, { Children } from 'react'

function ProtectedRoute({authenticated,children}) {
  
    if(!authenticated){
        return <Navigate to="/"/>
    }


  return children;
}

export default ProtectedRoute