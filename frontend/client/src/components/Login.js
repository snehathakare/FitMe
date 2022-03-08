import React from 'react'
import TextField from '@material-ui/core/TextField';

function Login() {
    return (
        <div>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
    )
}

export default Login
