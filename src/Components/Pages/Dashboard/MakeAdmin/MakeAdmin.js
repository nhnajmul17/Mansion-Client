import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email }
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make A admin</h1>
            {success && <Alert severity="success"> Admin maded successfully!</Alert>}
            <form onSubmit={handleAdmin}>
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    type='email'
                    label='Email'
                    onBlur={handleOnBlur}
                    size="small"
                /> <br />
                <Button type='submit' variant='contained'>Make Admin</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;