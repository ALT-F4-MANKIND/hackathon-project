import React from 'react'
import { Button, Alert } from 'react-bootstrap'

function SignIn (props) {
    return(
        <>
            <Alert>Please sign in</Alert>
            <Button onClick={props.handleSignIn}>sign in</Button>
        </>
    )
}

export default SignIn