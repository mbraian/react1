//import React from 'react' // Desde la version 18 ya no es necesario
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import "./styleNavegador.css"
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const Navegador = () => {
    const navigate = useNavigate();

  return (
    <>
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={ () => navigate("/") }>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={ () => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={ () => navigate("/admin")}>Administrador</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Button className='btnPrueba' variant="warning">Boton RB</Button>

        <button className='btn btn-danger '>Boton de bootstrap</button>
    </header>        
    </>
  );
}

export default Navegador