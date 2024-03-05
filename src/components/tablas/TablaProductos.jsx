import { useContext } from "react";
import { ProductsProvider } from "../../context/ProductosContext";
import { Table, Button } from "react-bootstrap";


const TablaProductos = () => {
    const {productos} = useContext(ProductsProvider);

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
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
            </>
          ))}
        </tbody>
      </Table>
      </>
    )}
    </>
  )
}

export default TablaProductos