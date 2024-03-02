import { useState } from 'react' // 'useState' no es un componente, estoy usando la funcionalidad
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from '../../components/carousel/Carousel';
import Cards from '../../components/cards/Cards';
import Information from '../../components/information/Information';
import Products from '../../components/products/Products';

const Home = () => {
    const [count, setCount] = useState(0);
    console.log(count, "Estado inicial");
    // const [nombre1, setNombre1] = useState("");
    // const [apellido1, setApellido1] = useState("");

    const funcionProps = () => {
        console.log("Me ejecutaron desde el componente Productos")
    }

    const club = {
        name: "River",
        estadio: "Monumental"
    };

    return (
    <>

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

            <Products nombre={1} edad={38} apellido funcionProps={ funcionProps } club={club}/>

            <button onClick={() => setCount(count +1) }> Aumentar: {count}</button>

            <button onClick={() => setCount(count -1) }> Disminuir: {count}</button>

        </main>

    </>
  )
}

export default Home