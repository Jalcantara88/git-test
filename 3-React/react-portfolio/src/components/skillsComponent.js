import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';





function RenderBadge({item}) {
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const [tooltipOpen, setTooltipOpen] = useState(false); 
    return(
        <div key={item.id} className="col mb-4">
            <img className="skillBadge" src={item.img} alt={item.skillName} id={item.skillName}/>
            <Tooltip placement="auto" className="" isOpen={tooltipOpen} target={item.skillName} toggle={toggleTooltip}>
                <div className="px-3">
                    <p className="text-muted mt-3">skill: <strong className="text-white">{item.skillName}</strong></p>
                    
                    <p className="text-muted">level: <strong className="text-white">{item.level}</strong></p>
                </div>
                
            </Tooltip>
        </div>
    );
};

function Skills(props) {

        

        const web = props.web.map(skill => {
            return (
                <div key={skill.id}>
                    <RenderBadge item={skill} />
                </div>
            );
        });

        const art = props.art.map(skill => {
            return(
                <div key={skill.id}>
                    <RenderBadge item={skill} />
                </div>
            );
        });

        const video = props.video.map(skill => {
            return(
                <div key={skill.id}>
                    <RenderBadge item={skill} />
                </div>
            );
        });

        const threedee = props.threedee.map(skill => {
            return(
                <div key={skill.id}>
                    <RenderBadge item={skill} />
                </div>
            )
        })

        return(
            <React.Fragment>
                <div className="container" id="skills">
                    <div className="row mt-3">
                        <div className="col">
                            <h2 className="text-center">SKILLS</h2>
                            <hr />
                        </div>  
                    </div>
                    <div className="col-12 col-lg-10 mx-auto mb-5">
                        <div className="row my-3 justify-content-center"> 
                            <div className="col-12">
                                <p className="text-muted">WEB</p>
                            </div>
                            {web} 
                        </div>
                        <hr />
                        <div className="row my-3 justify-content-center">
                            <div className="col-12">
                                <p className="text-muted">ART</p>
                            </div>
                            {art}
                        </div>
                        <hr />
                        <div className="row my-3 justify-content-center">
                            <div className="col-12">
                                <p className="text-muted">VIDEO</p>
                            </div>
                            {video}
                        </div>
                        <hr />
                        <div className="row my-3 justify-content-center">
                            <div className="col-12">
                                <p className="text-muted">3D</p>
                            </div>
                            {threedee}
                        </div>
                        <hr />
                    </div>
                    
                </div>
            </React.Fragment>
        );
};

export default Skills;