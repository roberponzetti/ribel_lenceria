import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles.css';
import CartContainer from '../../layouts/cart-container/CartContainer';
import SearchWidget from './SearchWidget';
import { Form, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

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
                        <Nav.Link className="nav-link-item" to="/products">
                            <Link to="/products">
                                Productos
                            </Link>
                        </Nav.Link>
                        <NavDropdown className="nav-link-item" title="Categorías" id="nav-dropdown">
                            <NavDropdown.Item >
                                <Link to="/category/shirts">
                                    Remeras
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/category/pants">
                                    Pantalones
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/category/socks">
                                    Medias
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="nav-link-item">
                            <Link to="/outfits">
                                Conjuntos
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link-item">
                            <Link to="/contact">
                                Contacto
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link-item">
                            <Link to="/faqs">
                                FAQs
                            </Link>
                        </Nav.Link>
                        
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
                <CartContainer cantArt="4" />
            </Navbar>
        </>
    );
};

export default NavMenu;