import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@mui/material';
import { API } from './global';

const PasswordReset = () => {

    const { id, token } = useParams();

    const history = useNavigate();

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const userValid = async () => {
        const res = await fetch(`${API}/forgotpassword/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()

        if (data.status === 201) {
            console.log("user valid")
        } else {
            history("*")
        }
    }


    const setval = (e) => {
        setPassword(e.target.value)
    }

    const sendpassword = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API}/${id}/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password })
        });

        const data = await res.json()

        if (data.status === 201) {
            setPassword("")
            setMessage(true)
        } else {
            toast.error("! Token Expired generate new LInk", {
                position: "top-center"
            })
        }

    }

    useEffect(() => {
        userValid()
    },)

    return (
        <div>


            <div>
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1 className='newpwd-head'>Enter Your New Password</h1>
                        </div>

                        <form className='newpwd-form'>
                            {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password Succesfully Updated </p> : ""}

                            <TextField
                                label="New Password"
                                variant='filled'
                                name='password'
                                className="signgup-textfield"
                                onChange={setval}
                                value={password}
                            />
                            <button className='form-btn' onClick={sendpassword}>Submit</button>
                        </form>
                        <p><NavLink to="/" className='forgot-btn'>Home</NavLink></p>
                        <ToastContainer />
                    </div>
                </section>
            </div>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                Loading... &nbsp;
                <CircularProgress />
            </Box>

        </div>
    )
}

export default PasswordReset