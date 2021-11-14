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
                    <Nav.Item><Nav.Link href="/">Make an entry</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/analysis">Trends</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/other-form">other-form</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar