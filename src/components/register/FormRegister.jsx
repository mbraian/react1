import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FormRegister = ( {editarUsuario, handleClose} ) => {
  const { addUser, updateUsuario } = useContext(UsersProvider);
    const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    id: editarUsuario ? editarUsuario.id : uuidv4(),
    nombre: editarUsuario ? editarUsuario.nombre : "",
    email: editarUsuario ? editarUsuario.email : "",
    password: editarUsuario ? editarUsuario.password : "",
    isAdmin: editarUsuario ? editarUsuario.isAdmin : false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked} = e.target;

    if(type === "checkbox"){
      setUsuario({
        ...usuario,
        [name]: checked
      });
    }else{
      setUsuario({
        ...usuario,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usuario,"<--USUARIO HANDLER")
    if(editarUsuario){
      updateUsuario(usuario);
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario editado!",
        showConfirmButtom: false,
        timer: 1500,
      });
      handleClose();
    }else{
      addUser(usuario);
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario registrado!",
        showConfirmButtom: false,
        timer: 1500,
      });
  
      navigate("/");
    }

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
        <Col >
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

            {editarUsuario ? (
              <Form.Group className="mb-3">
              <Form.Label>Admin</Form.Label>
              <Form.Check
                type="checkbox"
                name="isAdmin"
                label="Admin"
                checked={usuario.isAdmin}
                onChange={ handleChange }
              />
              </Form.Group>
            ) : (null)}

            {editarUsuario ? (
              <Button type="submit" variant="warning">
                Editar
              </Button>
            ) : (
              <Button type="submit" variant="success">
                Registrarse
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

FormRegister.propTypes = {
  editarUsuario: PropTypes.object,
  handleClose: PropTypes.func
};

export default FormRegister;
