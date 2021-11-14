import React from 'react'
import { Button, Alert, Container } from 'react-bootstrap'

function SignIn (props) {
    return(
        <Container>
            <Alert>Please sign in</Alert>
            <Button onClick={props.handleSignIn}>sign in</Button>
        </Container>
    )
}

export default SignIn