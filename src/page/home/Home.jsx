// import { useState } from 'react' // 'useState' no es un componente, estoy usando la funcionalidad
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from '../../components/navegador/Navegador'
import Footer from '../../components/footer/Footer';
import CarouselHome from '../../components/carousel/Carousel';
import Cards from '../../components/cards/Cards';
import Information from '../../components/information/Information';

const Home = () => {
    // const [count, setCount] = useState(0)
    return (
    <>
        <header>
            <Navegador/>
        </header>

        <main>
            <CarouselHome/>

            
            <h2 className='text-center mt-5'>Más Productos</h2>
            <Cards/>

            <section className='m-5 text-center '>
                <Information/>
            </section>

            <ul>
                <li>Navbar (v)</li>
                <li>Carousel (v)</li>
                <li>Cards (v)</li>
                <li>Section (informacion)</li>
                <li>Footer</li>
            </ul>

        </main>


        <Footer/>
    </>
  )
}

export default Home