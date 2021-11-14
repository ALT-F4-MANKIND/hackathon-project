import React from 'react'
import './Header.css'
import { Form, FormControl, Nav, Navbar, Button, NavDropdown, Container, Link } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavigationBar (props) {
    // let buttonText = props.
    
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><Nav.Link href="/about">LevelUp</Nav.Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/form">Make an entry</Nav.Link>
                    <Nav.Link href="/analysis">See analysis</Nav.Link>
                </Nav>
                
                    <Button 
                        variant="outline-success"
                        onClick={props.handleSignOut}
                    >
                        Sign out
                    </Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavigationBar


