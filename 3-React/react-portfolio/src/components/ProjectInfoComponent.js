import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'

function RenderSelectedProject({item}) {
    if(item) {
        return(
            <React.Fragment>
                <Card>
                    
                        <CardImg width="100%" src={item.thumb} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    
                </Card>
            </React.Fragment>
        );
    }
    return <React.Fragment>please select a project</React.Fragment>
    
};

function ProjectInfo(props) {
    return <RenderSelectedProject item={props.project} />;
}

export default ProjectInfo;