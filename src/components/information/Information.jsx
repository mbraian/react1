import './styleInformation.css';
import {Carousel, Card, Row, Col} from 'react-bootstrap';

const Information = () => {
    const customerReviews = [
        {
          id: 1,
          name: 'Lionel Messi',
          comment: '"Excelentes productos, definitivamente mi store favorita."',
          rating: 5,
          image: 'https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1'
        },
        {
          id: 2,
          name: 'Michael Jordan',
          comment: '"Muy satisfecho con la calidad de los productos."',
          rating: 4,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Michael_Jordan.jpg/220px-Michael_Jordan.jpg'
        },
        {
          id: 3,
          name: 'Ronaldinho',
          comment: '"¡Recomiendo este negocio a todos mis amigos!"',
          rating: 5,
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_in_2019.jpg'
        },
    ];

  return (
    // <>
    // <div className="container m-5">
    //     <h3 className='ms-3 mb-3'>Clientes 100% satisfechos</h3>

    //     <Carousel className='mx-auto w-25'>
    //         <Carousel.Item className='text-center' interval={3000}>
    //             <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Michael_Jordan.jpg/220px-Michael_Jordan.jpg' text="First slide" fluid/>
    //             <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //             </Carousel.Caption>
    //         </Carousel.Item>

    //         <Carousel.Item className='text-center' interval={3000}>
    //             <Image src='https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1' text="Second slide" fluid/>
    //             <Carousel.Caption>
    //             <h3>Second slide label</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //             </Carousel.Caption>
    //         </Carousel.Item>

    //         <Carousel.Item className='text-center' interval={3000}>
    //             <Image src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_in_2019.jpg' text="Third slide" fluid/>
    //             <Carousel.Caption>
    //             <h3>Third slide label</h3>
    //             <p>
    //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //             </p>
    //             </Carousel.Caption>
    //         </Carousel.Item>

    //     </Carousel>

    // </div>
    // </>


    <Carousel className='p-5'>
      {customerReviews.map((review) => (
        <Carousel.Item className='p-5' key={review.id}>
          <Card>
            <Card.Body>
              <Row className='align-items-center'>
                <Col xs={12} sm={4}>
                  <img src={review.image} alt="Cliente" className="img-fluid" />
                </Col>
                <Col xs={12} sm={8}>
                  <Card.Title className='mt-3'>{review.name}</Card.Title>
                  <Card.Text>{review.comment}</Card.Text>
                  <Card.Text>Rating: {review.rating}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>


  )
}

export default Information