// import { useState } from 'react' // 'useState' no es un componente, estoy usando la funcionalidad
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from '../../components/navegador/Navegador'
import Footer from '../../components/footer/Footer';

const Home = () => {
    // const [count, setCount] = useState(0)
    return (
    <>
        <Navegador/>
        <h1>Landing Page (Todos deben ser componentes)</h1>

        <ul>
            <li>Navbar</li>
            <li>Carousel</li>
            <li>Cards</li>
            <li>Section (informacion)</li>
            <li>Footer</li>
        </ul>


        <Footer/>
    </>
  )
}

export default Home