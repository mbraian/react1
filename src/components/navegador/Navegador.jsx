//import React from 'react' // Desde la version 18 ya no es necesario
import {
  Container,
  Nav,
  Navbar,
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

  const { logOut } = useContext(UsersProvider);

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

                {user?.isAdmin ? (
                  <Nav.Link onClick={() => navigate("/admin")}>
                    Administrador
                  </Nav.Link>
                ) : null}


                
                {user ? (
                  <Button variant="danger" onClick={() => logOut()}>
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
