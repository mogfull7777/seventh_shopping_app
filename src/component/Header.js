import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">IT SHOP Junyoung</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;