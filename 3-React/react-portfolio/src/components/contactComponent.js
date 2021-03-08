import React, { Component } from 'react';
import { Button, Label, Col, Row, Alert } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';

import * as emailjs from 'emailjs-com';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
//const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    resetForm() {
        
            document.getElementById('name').value='';
            document.getElementById('email').value='';
            document.getElementById('message').value='';
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(values) {
        
        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            to_name: 'Dead Head Studio',
            subject: values.name,
            message: values.message
        };

        emailjs.send(
            'service_0hrz00p',
            'template_4ahyxbq',
            templateParams,
            'user_JAROk9lQAEPEq9MKXKS8y'
        );

        alert("thank you");
        this.formDispatch(actions.reset('contactForm')); // or whatever model you gave to <LocalForm>
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
                                <LocalForm 
                                    model='contactForm'
                                    getDispatch={(dispatch) => this.formDispatch = dispatch}
                                    onSubmit={values => 
                                    this.handleSubmit(values)
                                    
                                    }
                                    >
                                    <Row className="form-group">
                                        <Label htmlFor="name" md={2} className="text-primary">Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".name" id="name" name="name"
                                            
                                            placeholder="Name"
                                            className="form-control" 
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    
                                    <Row className="form-group">
                                        <Label htmlFor="email" md={2} className="text-primary">Email</Label>
                                        <Col md={10}>
                                            <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}
                                            />
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
                                            <Button onClick={this.resetForm()} type="submit" color="primary">
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