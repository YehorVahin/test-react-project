import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky='top' collapseOnSelect expand="sm" bg='dark' variant='dark'>
                    <Container>
                        <NavbarBrand href='/'>
                            <img src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"></img>
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id='responsive-navbar-nav'>
                            <Nav className="me-auto">
                                <NavLink href='/'> Home </NavLink>
                                <NavLink href='/about'> About us </NavLink>
                                <NavLink href='/contacts'> Contacts </NavLink>
                                <NavLink href='/blog'> Blog </NavLink>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
                </Router>
            </>
        )
    }
}
