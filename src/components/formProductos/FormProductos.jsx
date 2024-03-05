import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormProductos = () => {
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // setNombre(e.target.value);
    // setPrecio(e.target.value);

    console.log(e, "Formulario enviado");
  };


  console.log(nombre, "<--Nombre del producto");
  console.log(precio, "<--Precio del producto");

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            name="nombre"
            placeholder="Nombre del producto"
            onChange={(e) => { setNombre(e.target.value) }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={precio}
            name="precio"
            onChange={(e) => { setPrecio(e.target.value) }}
            placeholder="Precio del producto"
          />
        </Form.Group>
        <Button type="submit">Agregar Producto</Button>
      </Form>
    </>
  );
};

export default FormProductos;
