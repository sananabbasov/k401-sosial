import React, { useEffect } from 'react'
import Login from '../components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { authLogin } from '../redux/actions/AuthAction';

function AuthPage() {

 

  return (
    <div>
        <Login />
    </div>
  )
}

export default AuthPage