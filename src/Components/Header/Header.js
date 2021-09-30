import React from 'react';
import  './header.css';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="pt-2">
                    <Navbar.Brand href="#home">Meal Db</Navbar.Brand>
                    <Form className="d-flex w-50 ml-lg-5 ms-auto" >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            onChange={props.seractext}
                        />
                        <Button variant="primary">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to='/resturent'>Home</Link>
                            <Link to='/about'>About</Link>
                           <Link to="/contact">Contact</Link>
                            <Nav.Link href="#Foods">Foods</Nav.Link>



                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;