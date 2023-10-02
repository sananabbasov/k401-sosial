import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authLogin } from '../redux/actions/AuthAction';
import LoadingButton from '@mui/lab/LoadingButton';
function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate();

    const { user } = useSelector(x => x.auth)
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authLogin(email,password))
        
    }


    let d = localStorage.getItem("token")
    if (d != null) {
        navigate("/home")
    }

    useEffect(() =>{
        if(user.success){
            console.log("Qonce",user);
            localStorage.setItem("token",user.message)
            navigate("/home")
        }
    },[user])


    return (
        <div className='w-2/5 m-auto mt-32 border-white shadow-lg '>
            <div className='p-10'>
                <div>
                    <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </div>
                <div className='my-10'>
                    <TextField onChange={(e) => setPassword(e.target.value)} type='password' id="outlined-basic" label="Password" variant="outlined" fullWidth />
                </div>
                <div>
                    {
                        !user.isLoading ?
                            (
                                <Button onClick={() => loginHandler()} color='success' variant="contained">Login</Button>

                            )
                            :
                            (
                                <LoadingButton color='info' loading variant="outlined">
                                    Submit
                                </LoadingButton>
                            )
                    }

                </div>
                <div className='flex justify-between mt-10'>
                    <p>
                        <Link to="register">
                            Register
                        </Link>
                    </p>
                    <p>Forget password?</p>
                </div>
            </div>
        </div>
    )
}

export default Login