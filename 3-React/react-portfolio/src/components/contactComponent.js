import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phoneNum: '',
            agree: false,
            contactType: 'By Phone',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    
    }
    
    render() {
        return (
            <div className="container-fluid bg-primary py-5" id="contact">
                <div className="row row-content">
                    <div className="col-10 mx-auto bg-white rounded">
                        <div class="row mt-3">
                            <div className="col-12">
                                <h2 className="text-primary">Message Me</h2>
                                <hr />
                            </div>

                            <div className="col-10 mx-auto">
                                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="name" md={2} className="text-primary">Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control" 
                                            />
                                        
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="phoneNum" md={2} className="text-primary">Phone</Label>
                                        <Col md={10}>
                                            <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="( Optional )"
                                            className="form-control"
                                            />
                                        
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="email" md={2} className="text-primary">Email</Label>
                                        <Col md={10}>
                                            <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            />
                                    
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size: 4, offset: 2}}>
                                            <div className="form-check">
                                                <Label check>
                                                    <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                    /> {' '}
                                                    <strong className="text-primary">May I contact you?</strong>
                                                </Label>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <Control.select name="contactType" model=".contactType"
                                            className="form-control">
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="message" md={2} className="text-primary">Message</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".message" id="message" name="message"
                                            rows="6"
                                            className="form-control" 
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Contact;