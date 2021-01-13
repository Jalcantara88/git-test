import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';



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
            <React.Fragment>
                <Navbar dark className="bg-dark" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="" href="#pageStart">
                            <img src="" alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto">
                                
                                <NavItem>
                                    <Link className="nav-link" to="about">
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="skills">
                                        Skills
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <img src="" />
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="folio">
                                        Folio
                                    </Link>
                                </NavItem>
                                
                                    <Link className="nav-link" to="contact">
                                        Contact
                                    </Link>
                                
                            </Nav>

                        </Collapse>
                        
                    </div>
                </Navbar>

            </React.Fragment>
        )
    }

};

export default Menu;