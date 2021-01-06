import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


//MAIN HEADER COMPONENT
class Header extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            isNavOpen:false,
            isModalOpen: false
        };
//BINDING METHODS TO CONSTUCTOR
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
//INVERTS BOOL VALUE WHEN NAV IS TRIGGERED
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
//INVERTS BOOL VALUE WHEN MODAL IS TRIGGERED
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
//DISPLAYS INPUTS TO FORM ON SUBMIT CLICK
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        //STOPS ENTIRE PAGE FROM RE LOADING
        event.preventDefault();
    }
//WHAT THIS COMPONENT RENDERS BACK
    render() {
        return(
            //REACT FRAGMENT IS A WRAPPER PARENT DIV FOR OUTPUTTING MULTIPLE THINGS INSIDE OF
            <React.Fragment>
{/LOGO HEADER/}
                <Jumbotron fluid>
                    <div className="row">
                        <div className="col">
                            <h1>NuCamp</h1>
                            <h2>a better way to camp</h2>
                        </div>
                    </div>
                </Jumbotron>
{/NAVBAR/}
                <Navbar dark sticky="top" expand='md'>
                <div className="container">
{/BRAND IN NAVBAR/}
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" hight="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
{/TOGGLER ICON AND WHAT IT TRIGGERS ONCLICK/}
                    <NavbarToggler onClick={this.toggleNav} />
{/EVERYTHING IN THIS COMPONENT WILL COLLAPSE AT SET MEDIA QUERRY/}
                    <Collapse isOpen={this.state.isNavOpen} navbar>
{/NAVLINKS GROUP WRAPPER/}
                        <Nav navbar>
{/NAVLINK HOLDER/}
                            <NavItem>
{/NAVLINK/}
                                <NavLink className="nav-link" to="/home">
{/NAVLINK ICON/}
                                    <i className="fa fa-home fa-lg" />Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/directory">
                                    <i className="fa fa-list fa-lg" />Directory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" />About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" />Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
{/LOGIN BUTTON OUTSIDE OF NAVLINK GROUP BUT STILL IN COLLAPSE/}
                        <span className="navbar-text ml-auto">
                            <Button outline onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                            </Button>
                        </span>

                    </Collapse>
                </div>
                </Navbar>
{/MODAL/}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
{/CONTACT FORM/}
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
{/INNERREF HOLDS THE INPUT VALUE FOR YOU SO YOU CAN ACCESS THEM LATER WITH THE LOGIN HANDLER/}
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input}/>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input}/>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input}/>
                                    Remember Me
                                </Label>
                            </FormGroup>
{/SUBMIT BUTTON/}
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;