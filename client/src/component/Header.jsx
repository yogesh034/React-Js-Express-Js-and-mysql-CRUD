import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" style={{marginBottom:'1rem'}}>
        <Container >
            <Navbar.Brand href="/">Node JS Tutorial</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/add">Add User</Nav.Link>
            </Nav>
           
            </Navbar.Collapse>
        </Container>
        
        </Navbar>    
    )
}
