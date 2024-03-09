import React, { useContext } from 'react';
import UserContext from './UserContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const MyNavbar = () => {
    const { username } = useContext(UserContext);

    return (
        <Navbar className="purple-bg" variant="" expand="lg"> {/* Cambia el color de fondo aquí */}
            <Container>
                
                <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">{username}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
