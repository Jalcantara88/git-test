import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class SocialBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Jumbotron className="bg-primary my-0" fluid>
                <div className="row">
                    <div className="col text-white">
                        socialBar holder
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default SocialBar;