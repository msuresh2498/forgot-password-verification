import { TextField } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';
import { API } from './global';

const formValidationSchema = Yup.object({
    email: Yup.string().min(6).required("Email is Required🙂"),
    password: Yup.string().min(8).required("Need bigger Password🙂"),
});


const Login = () => {
    const navigate = useNavigate();

    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        //Login Authendication
        validationSchema: formValidationSchema,
        onSubmit: async (data) => {
            await axios.post(`${API}/login`, data)
                .then(res => {
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    alert('login successfully')
                    navigate('/userinfo')
                })
                .catch(err => {
                    toast.error(err.response.data)
                })

        },
    })

    return (
        <div>
            <div className='signup-form'>
                <form className='signup-container' onSubmit={handleSubmit}>
                    <h1 className='signup-head'>Login</h1>
                    <TextField label="Email"
                        variant='filled'
                        name='email'
                        className="signgup-textfield"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                        helperText={touched.email && errors.email ? errors.email : null} />
                    <TextField
                        label="password"
                        variant="filled"
                        name="password"
                        className='signup-textfield'
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                        helperText={touched.password && errors.password ? errors.password : null} />
                    <Link to='/forgotpassword' className='forgot-btn'>forgot password?</Link>
                    <button type='submit' className='form-btn'>Login</button>
                </form>
                <p className='form-text'>New Here <Link to='/signup' className='login-btn'>Signup</Link> </p>
            </div>
        </div>
    )
}

export default Login