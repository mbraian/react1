//import React from 'react' // Desde la version 18 ya no es necesario
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import "./styleNavegador.css";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import { useContext, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";

const Navegador = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const { logOut } = useContext( UsersProvider);

  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {user ? "Bienvenido " + user.nombre : "No hay usuario"}
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/admin")}>
                  Administrador
                </Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                {user ? (
                  <Button variant="danger" onClick={() => logOut() }>
                    Cerrar sesión
                  </Button>
                ) : (
                  <Button variant="success" onClick={handleShow}>
                    Iniciar sesión
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Button className="btnPrueba" variant="warning">
          Boton RB
        </Button>

        <button className="btn btn-danger ">Boton de bootstrap</button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Inicio de sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default Navegador;
