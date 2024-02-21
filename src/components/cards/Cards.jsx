import './styleCards.css';
import { Button, Card, Placeholder  } from "react-bootstrap";

const Cards = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row justify-content-center ">
            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ik.imagekit.io/jamhjw08s/Pines%20RollinCode%20BLANCO%20%20NEGRO.jpg?updatedAt=1702929987271" />
                <Card.Body>
                    <Card.Title>Pines RollingCode</Card.Title>
                    <Card.Text>
                    Lleva la insignia y el estilo de la casa madre de los programadores.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ik.imagekit.io/jamhjw08s/Taza%20Coding.jpeg?updatedAt=1702929983398" />
                <Card.Body>
                    <Card.Title>Taza Coding</Card.Title>
                    <Card.Text>
                    Tu energia del dia a dia para codificar como un campeon.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ik.imagekit.io/jamhjw08s/Taza%20No%20connection.jpeg?updatedAt=1702929983232" />
                <Card.Body>
                    <Card.Title>Taza No connection</Card.Title>
                    <Card.Text>
                    Para aquellos dias en los que solo necesites desconectarte.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ik.imagekit.io/jamhjw08s/Gorra%20Roja%20RollingCode.jpeg?updatedAt=1702929982983" />
                <Card.Body>
                    <Card.Title>Gorra Roja RC</Card.Title>
                    <Card.Text>
                    Protegete del sol con estilo y elegancia.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img className='my-2' variant="top" src="https://ik.imagekit.io/jamhjw08s/Gorra%20Negra%20RollingCode.jpg?updatedAt=1702929987757" />
                <Card.Body>
                    <Placeholder className='my-3' as={Card.Title} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={10} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="secondary" xs={6} />
                </Card.Body>
            </Card>
    

        </div>
    </div>

    
    {/* <div>
        <div className="row justify-content-center mt-4 ">
        <div className=" d-flex justify-content-evenly text-center w-50 rounded-top md-3 sm-1"> 
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src='https://ik.imagekit.io/jamhjw08s/Pines%20RollinCode%20BLANCO%20%20NEGRO.jpg?updatedAt=1702929987271' />
        <Card.Body>
          <Card.Title className="text-center">Adaptabilidad</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button className="btn-cardHome" >Ver mas</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src='' />
        <Card.Body>
          <Card.Title className="text-center">Honestidad</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button className="btn-cardHome">Ver mas</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src='' />
        <Card.Body>
          <Card.Title className="text-center">Profesionalismo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button className="btn-cardHome" >Ver mas</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
    </div> */}

    </>
  )
}

export default Cards