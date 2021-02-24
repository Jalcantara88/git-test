import React, { Component } from 'react';
import SocialBar from './socialBarComponent';
import Menu from './menuComponent';
import Profile from './profileComponent';
import Contact from './contactComponent';
import Footer from './footerComponent';
import Skills from './skillsComponent';

import Portfolio from './portfolioComponent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        projects: state.projects,
        socialLinks: state.socialLinks,
        skills: state.skills,
        selectedProject: state.projects[0]
    };
};

class Main extends Component {
    
    

    render() {
        

        return(
            <React.Fragment>
                <SocialBar socialLinks={this.props.socialLinks}/>
                <Profile />
                <Menu />
                <Skills 
                    web={this.props.skills.filter(skill => skill.type === "web")}
                    art={this.props.skills.filter(skill => skill.type === "art")}
                    video={this.props.skills.filter(skill => skill.type === "video")}
                    threedee={this.props.skills.filter(skill => skill.type === "threedee")}
                />
                
                
                
                    
                <Portfolio 
                    projects={this.props.projects}
                    selectedProject={this.props.selectedProject}
                    />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
};

export default withRouter(connect(mapStateToProps)(Main));