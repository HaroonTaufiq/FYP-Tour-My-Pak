import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoutes({children}) {
return(
 localStorage.getItem('user')?
 children:
 <Navigate to="/" replace />
   )
  }
export default ProtectedRoutes