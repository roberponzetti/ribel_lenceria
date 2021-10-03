import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
    return (
        <>
            <Navbar expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src="https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo-470x235.png"
                    width="128"
                    height="32"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/inicio">Inicio</Nav.Link>
                        <Nav.Link href="/productos">Productos</Nav.Link>
                        <Nav.Link href="/conjuntos">Conjuntos</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                        <Nav.Link href="/faqs">Preguntas frecuentes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavMenu;