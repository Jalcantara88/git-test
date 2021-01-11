import React, { Component } from 'react';
import Header from './headerComponent';
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
                <Header />
            </React.Fragment>
        );
    }
};

export default withRouter(connect(mapStateToProps)(Main));