import React from 'react'
import {Form,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

function RegisterForm() {
    return (
        <>
        <Form>
            <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="UserName" name="username" required />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Password" name="password" required />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Confirm Password" name="passwordconfirm" required />
            </Form.Group>
            <Button className="mb-4" variant='success' type="submit">Register</Button>
        </Form>
        <p>You have an account ? 
            <Link to="/login">
                <Button variant='info' size="sm" className="ml-2">Login</Button>
            </Link>
        </p>
        </>
    )
}

export default RegisterForm
