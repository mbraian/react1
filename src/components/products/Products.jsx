import PropTypes from 'prop-types';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useContext } from 'react';
import { ProductsProvider } from '../../context/ProductosContext';

const Products = () => {
  const {productos} = useContext(ProductsProvider);
  console.log(productos, "<-- Productos desde el contexto")

  return (
    <>
    <h1>Componente de Productos</h1>
    
    {productos.length === 0 ? 
      ( //con parentesis '()', el 'return es implicito
        <h1>Aqui no hay ningun producto</h1>
      ) : (
        <Container>
        <Row>
        {productos.map( (producto) => (
          <>
          <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '18rem' }} key={producto.id}>
            <Card.Img variant="top" src={producto.imagen}/>
            <Card.Body>
              <Card.Title> {producto.nombre} </Card.Title>
              <Card.Text> Precio: {producto.precio} </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          </>
        ))}
        </Row>
        </Container>
      )
    }

    </>
  )
}

Products.propTypes = { // Forma de implementar seguridad en la aplicacion
  productos: PropTypes.array
}

export default Products