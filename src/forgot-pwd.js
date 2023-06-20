import { Alert, TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { API } from './global';



const Forgotpwd = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendLink = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API}/sendpasswordlink`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const data = await res.json();
        console.log(data)

        if (data.status === 201) {
            setEmail("");
            setMessage(true)
        } else {
            toast.error("Invalid User")
        }
    }

    return (
        <div>
            <form className='forgot-pwd-container' >
                {message ? <Alert severity="success" className='reset-msg'>Password Reset link send Successfully in Your Email</Alert> : null}
                <h1 className='signup-head'>Enter Your Email</h1>
                <TextField label="Email"
                    variant='filled'
                    name='email'
                    className="signgup-textfield"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' className='form-btn' onClick={sendLink}>Send</button>
            </form>
        </div>
    )
}

export default Forgotpwd