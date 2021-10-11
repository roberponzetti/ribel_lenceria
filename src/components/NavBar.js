import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../styles.css';

const NavMenu = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" className="nav-color">
                <Navbar.Brand href="/" className="brand-name">
                <img
                    alt=""
                    src="img/ribel-logo2.png"
                    width="111"
                    height="65"
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
            </Navbar>
        </>
    );
};

export default NavMenu;