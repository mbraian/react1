import { Col, Container, Row } from "react-bootstrap"
import TablaProductos from "../../components/tablas/TablaProductos"
import FormProductos from "../../components/formProductos/FormProductos"


const Admin = () => {
  return (
    <>
    <h2>Administrador</h2>
    <Container>
      <Row>
        <Col>
          <FormProductos/>
        </Col>

        <Col>
          <TablaProductos />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Admin