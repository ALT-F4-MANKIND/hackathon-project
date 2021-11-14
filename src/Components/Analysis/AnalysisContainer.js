import React from 'react'
import './Analysis.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Graph from '../Graph'
import { Card, Container, Title } from 'react-bootstrap'
    
export default function AnalysisContainer() {
    return(
        <Container className="content-wrap">                
            <Card className="m-4">
                <Card.Title className="m-4">Analysis</Card.Title>
                <Card.Body>
                    <Graph />
                </Card.Body>
            </Card>
        </Container>
    )
}