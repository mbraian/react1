import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductsProvider } from "../../context/ProductosContext";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import PropTypes from "prop-types";


const FormProductos = ( { editarProducto, handleClose } ) => {
  const { addProducto, updateProducto } = useContext(ProductsProvider);
  console.log(editarProducto,"<-- Producto a EDITAR");
  const [producto, setProducto] = useState({
    id: editarProducto ? editarProducto.id : uuidv4(),
    nombre: editarProducto ? editarProducto.nombre :"",
    precio: editarProducto ? editarProducto.precio :"",
    imagen: editarProducto ? editarProducto.imagen :"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(editarProducto){
      updateProducto(producto); // Está bien que sea 'producto' ya que es el que tiene habilitado el 'onChange'
      
      handleClose();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto editado!",
        showConfirmButtom: false,
        timer: 1500,
      });
    } else {
      addProducto(producto);
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado!",
        showConfirmButtom: false,
        timer: 1500,
      });
    }


    setProducto({
      id: uuidv4(),
      nombre: "",
      precio: "",
      imagen: "",
    });
  };

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={producto.nombre}
            name="nombre"
            placeholder="Nombre del producto"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={producto.precio}
            name="precio"
            onChange={handleChange}
            placeholder="Precio del producto"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            value={producto.imagen}
            name="imagen"
            onChange={handleChange}
            placeholder="Imagen del producto"
          />
        </Form.Group>

        { editarProducto ? (
          <Button type="submit" variant="warning">Editar Producto</Button>
        ) : (
          <Button type="submit" variant="success">Agregar Producto</Button>
        )}

      </Form>
    </>
  );
};

FormProductos.propTypes = {
  editarProducto: PropTypes.object
}

export default FormProductos;
