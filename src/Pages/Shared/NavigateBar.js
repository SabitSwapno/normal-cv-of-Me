import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './NavigateBar.css'
const NavigateBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand style={{
                        fontSize: "1.6em"
                    }}
                        className='text-light'>Hey, Welcome from <span style={{
                            color: "#F62455",
                            fontWeight: "600"
                        }}
                        >Sabit Swapno</span> </Navbar.Brand>
                    <Navbar.Toggle className='bg-light' aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Close Here <FontAwesomeIcon icon={faArrowRight} /> </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/"> Back to Home</Nav.Link>
                                <div>
                                    <Nav.Link as={Link} to="skills">Skills</Nav.Link>
                                    <Nav.Link as={Link} to="experiences">Volunteer Experiences</Nav.Link>
                                    <Nav.Link as={Link} to="aboutMe">About Me</Nav.Link>
                                    <Nav.Link as={Link} to="achievements">Achievements</Nav.Link>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigateBar;