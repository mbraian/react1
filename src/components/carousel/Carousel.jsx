import { Carousel, Image } from 'react-bootstrap';

const CarouselHome = () => {
  return (
    <Carousel className='mx-auto d-block text-center w-50 my-5'>
      <Carousel.Item>
        <Image src='https://ik.imagekit.io/jamhjw08s/Botella%20deportiva%20de%20aluminio%20reutilizable.jpeg?updatedAt=1702929983622' fluid/>  
        
        <Carousel.Caption>
          <h3 className='text-light'>Botella de Aluminio</h3>
          <p className='text-light'>Ideal para esas salidas en las que precisas de mantener tu bebida en las condiciones en las que la pusiste.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src='https://ik.imagekit.io/jamhjw08s/Llaveros%20RollingCode.jpeg?updatedAt=1702929983872'fluid/>
        <Carousel.Caption>
          <h3 className='text-light'>Llaveros RollingCode</h3>
          <p className='text-light'>No olvides aqello que amas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://ik.imagekit.io/jamhjw08s/Libreta.jpeg?updatedAt=1702929983689' fluid/>  
        <Carousel.Caption>
          <h3 className='text-light'>Libreta RC</h3>
          <p className='text-light'>
            Lleva contigo las notas y formulas magicas para no olvidarlas en el intento.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome