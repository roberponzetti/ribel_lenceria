import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles.css';
import SearchWidget from '../search-widget/SearchWidget';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../cart-widget/CartWidget';
import { useState } from 'react';

const NavMenu = () => {

    const [show, setShow] = useState(false);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
 
    return (
        <>
            <Navbar expand="lg" variant="dark" className="bg-strongPink p-0">
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
                        <Link className="nav-link-item" to="/products">
                            Productos
                        </Link>
                        <NavDropdown show={show}
                            onMouseEnter={showDropdown} 
                            onMouseLeave={hideDropdown}
                            className="nav-link-category" 
                            title="Categorías"
                            id="basic-nav-dropdown">                       
                            <Link className="dropdown-items" to="/category/lingerie">
                                Lencería
                            </Link>
                            <Link className="dropdown-items" to="/category/socks">
                                Medias
                            </Link>
                            <Link className="dropdown-items" to="/category/flipFlops">
                                Ojotas
                            </Link>
                            <Link className="dropdown-items" to="/category/pijama">
                                Pijamas
                            </Link>
                            <Link className="dropdown-items" to="/category/underpants">
                                Ropa interior masculina
                            </Link>
                        </NavDropdown>
                        <Link className="nav-link-item" to="/contact">
                            Contacto
                        </Link>
                        <Link className="nav-link-item" to="/faqs">
                            FAQs
                        </Link>
                    </Nav>
                    <Nav className="position-right">
                        <SearchWidget/>
                        <Link className="cart" to="/cart">
                            <CartWidget />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavMenu;