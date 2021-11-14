import React from 'react'
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavigationBar () {
    return(
        <Navbar expand="lg">
            <Navbar.Brand className="ml-3">HealthCheck</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/other-form">Make an Entry</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/analysis">Your Stats</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar