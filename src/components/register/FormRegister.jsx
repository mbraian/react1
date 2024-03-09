import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const { addUser } = useContext(UsersProvider);
    const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    id: uuidv4(),
    nombre: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(usuario);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario registrado!",
      showConfirmButtom: false,
      timer: 1500,
    });

    navigate("/")

    setUsuario({
      id: uuidv4(),
      nombre: "",
      email: "",
      password: "",
      isAdmin: false,
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={usuario.nombre}
                name="nombre"
                placeholder="Nombre del usuario"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={usuario.email}
                name="email"
                placeholder="Inserte su email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={usuario.password}
                name="password"
                placeholder="Contraseña del usuario"
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="success">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormRegister;
