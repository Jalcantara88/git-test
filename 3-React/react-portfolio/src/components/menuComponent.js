import React, { Component } from 'react';
import { Link } from "react-scroll";
import { Nav, NavbarToggler, Collapse, NavItem, Navbar } from 'reactstrap';



class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar dark color="dark" sticky="top" expand="md">
                    
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto">
                                
                                <NavItem className="align-self-center">
                                    <Link className="nav-link" to="about">
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem className="align-self-center">
                                    <Link className="nav-link" to="skills">
                                        Skills
                                    </Link>
                                </NavItem>
                                <NavItem className="align-self-center">
                                    <img className="menuLogo" alt="logo" src="/assets/dhLogo.svg" />
                                </NavItem>
                                <NavItem className="align-self-center">
                                    <Link className="nav-link" to="folio">
                                        Folio
                                    </Link>
                                </NavItem>
                                <NavItem className="align-self-center">
                                    <Link className="nav-link" to="contact">
                                        Contact
                                    </Link>
                                </NavItem>
                                    
                                
                            </Nav>

                        </Collapse>
                        
                    
                </Navbar>
                </div>
        )
    }

};

export default Menu;