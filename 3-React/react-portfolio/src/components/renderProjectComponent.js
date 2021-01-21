import React from 'react';


function RenderProject({project}) {
    
        return(
            <React.Fragment>
            
                <div className="col-8">
                    <img className="img-fluid" src={project.preview} alt={project.name} />
                </div>
                <div className="col-4">
                    Project Name: {project.name}
                    <hr />
                    Desctiption: {project.description}
                    <hr />
                    Skills Used: {project.skills}
                    <hr />
                    <a href={project.link}><button>LINK</button></a>
                </div>
                                     
            </React.Fragment>
        );
};
function ProjectInfo(props) {
    console.log(`current project is: ${props.project}`)
    if(props.project) {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 col-lg-8">
                            <div className="row">
                                <RenderProject project={props.project} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                please select a project to view more details
            </React.Fragment>
        )
    }
    
}

export default ProjectInfo;