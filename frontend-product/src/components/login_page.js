import React, { Component } from "react"
import  { Form,Button,Container,Row,Col }  from 'react-bootstrap';
export class Login extends Component{
    render(){
        return(
            <Container fluid >
                <Row className="justify-content-md-center  mt-5">
                    <Col xs lg="4">
                    <Form >
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="name" placeholder="name" />
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        )}
    }

export default Login;