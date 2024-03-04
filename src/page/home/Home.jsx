import { useState, useEffect } from 'react' // 'useState' no es un componente, estoy usando la funcionalidad
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from '../../components/carousel/Carousel';
import Cards from '../../components/cards/Cards';
import Information from '../../components/information/Information';
import Products from '../../components/products/Products';
import axios from 'axios';



const Home = () => {
    const [count, setCount] = useState("");
    console.log(count, "Estado inicial");
    // const [nombre1, setNombre1] = useState("");
    // const [apellido1, setApellido1] = useState("");

    const funcionProps = () => {
        setCount(count +1);
        //alert(`El numero es ${count}`)
    }


    const club = {
        name: "River",
        estadio: "Monumental"
    };

    //useEffect
    // useEffect(()=>{
    //     console.log("soy el useEffect")
    // },[]) //Si quito '[]', se ejecutará por cada actualizacion(cualquiera fuese) del componente

    // useEffect(()=>{
    //     console.log("Soy el useEffect con array de dependencias")
    // },[count])

    // useEffect(() =>{
    //     console.log("Componente montado"); // Acción cuando se monta el componente
    //     return () =>{
    //         console.log("Componente desmontado"); // Acción cuando se desmonta el componente
    //     }    
    // }, [count] )

    //USO PRACTICO
    useEffect( ()=> {
        const obtenerDatos = async () => {
            try{
                // axios: funciona igual que fetch
                const response = await axios.get("http://localhost:8000/users")
                console.log(response, "<-- Respuesta");
                console.log(response.data, "<-- Datos"); // Estos datos obtenidos, los guardo en un 'useState'(de usuarios)
                console.log(response.data[0], "<-- 1er Dato----");
                
                setUsers(response.data);

            }catch (error){
                console.error(error);
            }
        }
        obtenerDatos();
    },[count]); // Cuando se actualice el 'count' se realiza una nueva peticion de usuarios

    const [users, setUsers] = useState([]); // Ya que el 'response.data' de axios me devuelve un array, inicializamos con el array vacio.
    
    console.log(users, "<-- [] de Usuarios")

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

            <h2>{count}</h2>
            <button onClick={ funcionProps }> Aumentar</button>

            <button onClick={() => setCount(count -1) }> Disminuir</button>


        </main>

    </>
  )
}

export default Home