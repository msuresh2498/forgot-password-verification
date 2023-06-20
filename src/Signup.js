import { TextField } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { API } from './global';


const formValidationSchema = Yup.object({
    name: Yup.string().max(25).required("name is Required🙂"),
    email: Yup.string().min(6).required("Email is Required🙂"),
    password: Yup.string().min(8).required("Need bigger Password🙂"),
});

const Signup = () => {

    const navigate = useNavigate();

    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",

        },
        //User Registration
        validationSchema: formValidationSchema,
        onSubmit: data => {
            axios.post(`${API}/signup`, data)
                .then(res => navigate('/'))
                .catch(err => {
                    toast.error(err.response.data);
                })
        }
    })
    return (

        <div className='signup-form'>
            <form className='signup-container' onSubmit={handleSubmit}>
                <h1 className='signup-head'>Signup</h1>
                <TextField
                    id="filled-basic"
                    label="name"
                    variant="filled"
                    className='signup-textfield'
                    name='name'
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name ? errors.name : null} />
                <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    className='signup-textfield'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email ? errors.email : null} />
                <TextField
                    id="filled-basic"
                    label="password"
                    variant="filled"
                    className='signup-textfield'
                    name='password'
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password ? errors.password : null} />
                <button type='submit' className='form-btn'>Signup</button>
            </form>
            <p className='form-text'>Already have an account? <Link to='/' className='login-btn'>Login</Link> </p>
        </div>

    )
}

export default Signup