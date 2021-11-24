import React, { useCallback, useContext } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getFirebase } from '../../firebase';

const Login = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await getFirebase()
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert("Correo electrónico o clave inválida");
      }
    },
    [history]
  );
    
  const { currentUser } = useContext(AuthContext);
    
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
      <Row className="p-0 mt-5 row-margin align-items-center">
        <Col className="align-self-start login-div" md={{ offset: 4, span: 4 }}>
          <h1 className="login-font">Log in</h1>
          <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control className="input" name="email" type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control className="input"  name="password" type="password" placeholder="Password" required />
              </Form.Group>
              <Button className="mt-3 bg-strongPink border-0 login-button" type="submit">Ingresar</Button>
              <div className="m-3">
                <span className="signup-message">¿No tienes cuenta?</span>
                <Link className="nav-link-item signup-message text-danger p-0 m-2" to="/signup">
                  Registrate!
                </Link>
              </div>
          </Form>
        </Col>
      </Row>   
  )
}

export default withRouter(Login)