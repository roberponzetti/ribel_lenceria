import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles.css';
import SearchBar from '../search-bar/SearchBar';
import { Button, Col, Container, Dropdown, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../cart-widget/CartWidget';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const NavMenu = () => {
    const userIcon = (<span><FontAwesomeIcon className="profile-icon" icon={faUser} /></span>);
    const [show, setShow] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [profile, setProfile] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        /*if(showNext === false){*/
            setShow(false);
        /*}*/
    }

    const showNextDropdown = (e)=>{
        if(showNext === false){
            setShowNext(true);
        }
    }

    const showProfile = (e)=>{
        setProfile(!profile);
    }

    const hideProfile = e => {
        setProfile(false);
    }
 
    return (
        <>
            <Navbar expand="lg" variant="dark" className="bg-nav p-0 sticky-top">
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
                            <div className="eventsNav pt-0 mt-0">
                                <Row>
                                    <Col xs="12" md="4" className="text-left">
                                        <Dropdown.Header>
                                        <FontAwesomeIcon
                                            color="black"
                                            icon={"concierge-bell"}
                                            size="1x"
                                            className="pr-1"
                                        />
                                        {"  "}
                                        HOMBRE
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <Link className="dropdown-items" to="/category/underpants">
                                                Ropa interior masculina
                                            </Link>
                                        </Dropdown.Item>
                                    </Col>
                                    <Col xs="12" md="4" className="text-left">
                                        <Dropdown.Header>
                                        <FontAwesomeIcon
                                            color="black"
                                            icon={"building"}
                                            size="1x"
                                            className="pr-1"
                                        />
                                        {"  "}
                                        MUJER
                                        </Dropdown.Header>
                                        <Dropdown.Item>
                                            <Link className="dropdown-items" to="/category/lingerie">
                                                Lencería
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link className="dropdown-items" to="/category/socks">
                                                Medias
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link className="dropdown-items" to="/category/flipFlops">
                                                Ojotas
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link className="dropdown-items" to="/category/pijama">
                                                Pijamas
                                            </Link>
                                        </Dropdown.Item>
                                    </Col>
                                    <Col xs="12" md="4" className="text-left">
                                        <Dropdown.Header>
                                        <FontAwesomeIcon
                                            color="black"
                                            icon={"building"}
                                            size="1x"
                                            className="pr-1"
                                        />
                                        {"  "}
                                        NIÑOS
                                        </Dropdown.Header>
                                    </Col>
                                </Row>
                            </div>
                            {/* <Link className="dropdown-items" to="/category/lingerie">
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
                            </Link> */}
                        </NavDropdown>
                        <Link className="nav-link-item" to="/contact">
                            Contacto
                        </Link>
                        <Link className="nav-link-item" to="/faqs">
                            FAQs
                        </Link>
                    </Nav>
                    <Nav className="position-right">
                        <SearchBar />
                    </Nav>
                </Navbar.Collapse>
                <NavDropdown show={profile}
                             onMouseEnter={showProfile} 
                             onMouseLeave={hideProfile}
                             className="nav-link-category p-0 user-icon-div" 
                             title={userIcon}
                             id="basic-nav-dropdown2">    
                    {currentUser ? (
                        <Button className="dropdown-items logout-button" onClick={logout}>
                            Logout
                        </Button>
                    ) : (
                        <Link className="dropdown-items" to="/login">
                            Login
                        </Link>
                    )}                    
                </NavDropdown>
                <Link className="cart" to="/cart">
                    <CartWidget />
                </Link>
            </Navbar>
        </>
    );
};

export default NavMenu;