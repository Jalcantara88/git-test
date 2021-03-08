import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { Card, CardImg, CardImgOverlay, CardSubtitle, CardTitle, Button } from 'reactstrap';

function RenderPortfolioItem({item}) {
        
    return(
            <Card>
                
                <CardImg src={item.thumb} alt={item.name} />
                    
                
            </Card>
    );

};

function RenderSelectedSkills({skills}) {

    console.log(skills);
    const selectedSkills = skills.map(skill => {
        return(

            <div className="col col-sm m-0">
                <p style={{fontSize: 12}} className="text-white bg-danger rounded">
                    {skill.name}
                </p>
            </div>
        )
        
    });
    return(
        selectedSkills
    )
        
    
}


function RenderSelectedProject ({project}) {
console.log(project)
return(
    <React.Fragment>
        <Card>
            
                <CardImg  width='800px' src={project.preview} alt={project.name} />
                <CardImgOverlay>
                    <CardTitle className="text-white bg-primary rounded">{project.name}</CardTitle>
                </CardImgOverlay>
                <CardSubtitle className="">
                    <div className="my-2">
                        <h5 className="text-primary">
                        {project.description}
                        </h5>
                    
                    </div>
                    <div className="row justify-content-center m-0">
                        
                            <RenderSelectedSkills skills={project.skills} />
                        
                    </div>
                </CardSubtitle>
            <Button>Go To Project</Button>
        </Card>
        </React.Fragment>
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
            <div key={project.id} className="col-3 col-md col-lg m-0 p-0 mx-auto" onClick={() => this.setState({selectedProject: project})}>
                <RenderPortfolioItem  item={project}/>
            </div>
        );
    });

    return (
        <div className="container-fuid bg-dark py-3">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center text-muted">PROJECTS</h3>
                </div>
                
            </div>
            <div className="row">
                <div className="col-10 col-lg-6 mx-auto">
                    <RenderSelectedProject project={this.state.selectedProject}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-9 col-md-10 col-lg-6 mx-auto">
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