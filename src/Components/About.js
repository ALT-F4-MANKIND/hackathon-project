import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card } from 'react-bootstrap'

export default function About () {
    return(
        <Container className="p-4">
            <Card>
                <Card.Title className="p-4" >About </Card.Title>
                <hr/>
                <Card.Body> 
                    <p>LevelUp is a free-to-use web app made by the group Alt_F4 Mankind, used to track your habits and identify what contributes to your mood.</p>
                </Card.Body> 
            </Card>
        </Container>
    )
}