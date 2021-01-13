import React, { Component, Profiler } from 'react';
import SocialBar from './socialBarComponent';
import Menu from './menuComponent';
import Profile from './profileComponent';
import Contact from './contactComponent';
import Footer from './footerComponent';
import Skills from './skillsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        projects: state.projects
    };
};

class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <SocialBar />
                <Profile />
                <Menu />
                <Skills />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
};

export default withRouter(connect(mapStateToProps)(Main));