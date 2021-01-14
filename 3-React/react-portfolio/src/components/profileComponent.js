import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Profile = (props) => {
  return (
    <React.Fragment>
      <Jumbotron fluid className="bg-danger my-0 text-white pb-2 pt-4" id="about">
        <img className="profilePic" src="/assets/profilePic.png" />
        <h1 className="display-3">Julio Alcantara</h1>
        <p className="lead">LVL 32 ARTIST/CODER</p>
        <hr className="my-2 bg-white" />
        <p>Designer on a mission to make a living making cool stuff</p>
        <p className="lead">
          <Button color="primary" size="lg" href="#contact">Contact</Button>
        </p>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Profile;
