import { useContext, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import { Table, Button, Modal } from "react-bootstrap";
import FormRegister from "../register/FormRegister";

const TablaUsuarios = () => {
  const { usuarios, deleteUsuario } = useContext(UsersProvider);

  const [show, setShow] = useState(false);
  const [editarUsuario, setEditarUsuario] = useState(null);
  const handleClose = () => setShow(false);
  /**
   *
   * @param {object} usuario usuario que deseamos editar
   */
  const handleEdit = (usuario) => {
    setEditarUsuario(usuario); // Al hacer click en 'editar' vamos a actualizar el state de 'editarProducto'
    setShow(true);
  };

  return (
    <>
      {usuarios.length === 0 ? (
        "No hay usuarios"
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <>
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.isAdmin ? "Si" : "No"}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(usuario)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteUsuario(usuario.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Formulario de edicion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormRegister
                editarUsuario={editarUsuario}
                handleClose={handleClose}
              />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TablaUsuarios;
