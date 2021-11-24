import React, { useCallback } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getFirebase } from '../../firebase';

const SignUp = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await getFirebase()
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
        alert("Error al querer registrarse. Por favor verifique sus datos");
        }
    }, [history]);

    return (
        <Row className="p-0 mt-5 row-margin align-items-center">
            <Col className="align-self-start login-div" md={{ offset: 4, span: 4 }}>
                <h1 className="login-font">Sign up</h1>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control className="input" name="email" type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control className="input"  name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className="mt-3 bg-strongPink border-0 login-button" type="submit">Registrarse</Button>
                    <div className="m-3">
                        <span className="signup-message">¿Ya tienes cuenta?</span>
                        <Link className="nav-link-item signup-message text-danger p-0 m-2" to="/login">
                        Ingresa!
                        </Link>
                    </div>
                </Form>
            </Col>
        </Row>   
    )
}

export default withRouter(SignUp)
