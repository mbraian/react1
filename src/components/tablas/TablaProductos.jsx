import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductosContext";
import { Table, Button, Modal } from "react-bootstrap";
import FormProductos from "../formProductos/FormProductos";


const TablaProductos = () => {
    const { productos, deleteProducto } = useContext(ProductsProvider);
    
    const [show, setShow] = useState(false);
    const [editarProducto, setEditarProducto] = useState(null);
    const handleClose = () => setShow(false);
    /**
     * 
     * @param {object} producto producto que deseamos editar
     */
    const handleEdit = (producto) => {
      setEditarProducto(producto); // Al hacer click en 'editar' vamos a actualizar el state de 'editarProducto'
      setShow(true);
    };

    return (
    <>
    {productos.length === 0 ? ("No hay productos") : (
        <>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <>
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>
                <Button variant="warning" onClick={ () => handleEdit(producto) }>Editar</Button>
                <Button variant="danger" onClick={ () => deleteProducto(producto.id) }>Eliminar</Button>
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
          <FormProductos editarProducto={editarProducto} handleClose={handleClose} />
        </Modal.Body>
      </Modal>

      </>
    )}
    </>
  )
}

export default TablaProductos