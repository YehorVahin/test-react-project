import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
            <Container>
                <NavbarBrand href='/'>
                    <img src={logo} 
                    height="30" 
                    width="30" 
                    className="d-inline-block align-top"
                    alt="Logo"></img>
                </NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className="mr-auto">
                        <NavLink href='/'> Home </NavLink>
                        <NavLink href='/about'> About us </NavLink>
                        <NavLink href='/contacts'> Contacts </NavLink>
                        <NavLink href='/blog'> Blog </NavLink>
                    </Nav>
                    <Form >
                        <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </NavbarCollapse>
            </Container>
        </Navbar>
      </>
    )
  }
}
