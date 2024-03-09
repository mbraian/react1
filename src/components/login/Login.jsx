import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { usuarios } = useContext(UsersProvider);
  console.log(usuarios, "<--Usuarios en el LOGIN");

  const registro = () => {
    handleClose();
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const user = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bienvenido, ${user.nombre}!`,
          showConfirmButtom: false,
          timer: 1500,
        });

        localStorage.setItem( "user", JSON.stringify(user) );

        handleClose();
        navigate("/");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario o contraseña incorrectos",
          showConfirmButtom: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            placeholder="Ingrese su email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Text>
          Todavia no te registraste? <a onClick={registro}>Registrate!</a>
        </Form.Text>

        <Button type="submit" variant="success">
          Iniciar sesión
        </Button>
      </Form>
    </>
  );
};

Login.propTypes = {
  handleClose: PropTypes.func,
};

export default Login;
