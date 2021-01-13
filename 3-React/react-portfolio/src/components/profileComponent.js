import React from 'react';
import { Jumbotron, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const Profile = (props) => {
  return (
    <React.Fragment>
      <Jumbotron fluid className="bg-danger my-0">
          
        <h1 className="display-3">Julio Alcantara</h1>
        <p className="lead">LVL 32 ARTIST/CODER</p>
        <hr className="my-2" />
        <p>Designer on a mission to make a living making cool stuff</p>
        <p className="lead">
          <Button color="primary" size="lg">Contact Me</Button>
        </p>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Profile;
