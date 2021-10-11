import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles.css';
import CartWidget from './CartWidget';
import SearchWidget from './SearchWidget';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const NavMenu = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" className="nav-color">
                <Navbar.Brand href="/" className="brand-name">
                <img
                    alt=""
                    src="img/ribel-logo2.png"
                    width="95"
                    height="56"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-links">
                        <Nav.Link href="/productos" className="nav-link-item">Productos</Nav.Link>
                        <Nav.Link href="/conjuntos" className="nav-link-item">Conjuntos</Nav.Link>
                        <Nav.Link href="/contacto" className="nav-link-item">Contacto</Nav.Link>
                        <Nav.Link href="/faqs" className="nav-link-item">Preguntas frecuentes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="search-form">
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Text>
                                <SearchWidget />
                            </InputGroup.Text>
                            <FormControl
                                type="search"
                                placeholder="Buscar productos..."
                                className="search-bar"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
                <CartWidget cantArt="4" />
            </Navbar>
        </>
    );
};

export default NavMenu;