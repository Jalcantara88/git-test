import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderPortfolioItem({item}) {
        
    return(
            <Card>
                
                <CardImg src={item.thumb} alt={item.name} />
                    <CardImgOverlay>
                        <CardTitle>{item.name}</CardTitle>
                    </CardImgOverlay>
                
            </Card>
    );

};


function RenderSelectedProject ({project}) {
console.log(project)
return(
    
        <Card>
            
                <CardImg height='300px' width='800px' src={project.thumb} alt={project.name} />
                <CardImgOverlay>
                    <CardTitle>{project.name}</CardTitle>
                </CardImgOverlay>
            
        </Card>
    
);
};


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
            selectedProject: PROJECTS[0]
        }
    }
    
    


    
    render(){
    const portfolio = this.state.projects.map(project => {
        return(
            <div key={project.id} className="col-3 mx-0" onClick={() => this.setState({selectedProject: project})}>
                <RenderPortfolioItem  item={project}/>
            </div>
        );
    });

    return (
        <div className="container-fuid bg-warning py-3">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-muted">PORTFOLIO</h2>
                </div>
                
            </div>
            <div className="row">
                <div className="col-12">
                    <RenderSelectedProject project={this.state.selectedProject}/>
                </div>
            </div>
            <div className="row">
                <div className="col-11 col-lg-8 mx-auto">
                    <div className="row">
                        {portfolio}
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
    }
};

export default Portfolio;