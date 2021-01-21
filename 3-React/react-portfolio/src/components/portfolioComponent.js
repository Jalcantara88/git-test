import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPortfolioItem({item}) {
    return(
        <React.Fragment>
            <Card>
                <Link to={`/portfolio/${item.id}`}>
                    <CardImg width="100%" src={item.thumb} alt={item.name} />
                    <CardImgOverlay>
                        <CardTitle>{item.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </React.Fragment>
    );
};

function Portfolio(props) {
    props.state = {
        toggleSelected: null
    }

    handleSelect = (item) => {
        this.setState({selectedItem: item})
    }

    {this.state.selectedItem && <RenderPortfolioItem item={this.state.selectedItem} />}

    console.log(props.project);
    const portfolio = props.projects.map(project => {
        return(
            <div key={project.id} className="col-4">
                <RenderPortfolioItem item={project} />
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
                <div className="col-11 col-lg-8 mx-auto">
                    <div className="row">
                        {portfolio}
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio;