import React from 'react';

function Footer(props) {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">             
                    
                    <div className="col-6 text-center align-self-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-6 text-center align-self-center">
                        <a role="button" className="btn btn-link" href="mailto:julio@deadheadstudio.com"><i className="fa fa-envelope-o" /> julio@deadheadstudio.com</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;