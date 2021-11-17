import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles.css';
import SearchWidget from './SearchWidget';
import { Form, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../cart-widget/CartWidget';

const NavMenu = () => {
 
    return (
        <>
            <Navbar expand="lg" variant="dark" className="bg-strongPink">
                <Navbar.Brand href="/" className="brand-name">
                <img
                    alt=""
                    src="/img/ribel-logo2.png"
                    width="95"
                    height="56"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-links">
                        <Nav.Link className="nav-link-item">
                            <Link to="/products">
                                Productos
                            </Link>
                        </Nav.Link>
                        <NavDropdown className="nav-link-item" title="Categorías" id="nav-dropdown">
                            <NavDropdown.Item >
                                <Link className="dropdown-items" to="/category/lingerie">
                                    Lencería
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className="dropdown-items" to="/category/socks">
                                    Medias
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className="dropdown-items" to="/category/flipFlops">
                                    Ojotas
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className="dropdown-items" to="/category/pijama">
                                    Pijamas
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className="dropdown-items" to="/category/underpants">
                                    Ropa interior masculina
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
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
                    <Nav className="position-right">
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
                        <Nav.Link className="nav-link-item">
                            <Link to="/cart">
                                <CartWidget />
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavMenu;