import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsProvider = createContext(); // Con esto vamos a agrupar todas las peticiones HTTP

// eslint-disable-next-line react/prop-types
const ProductosContext = ({ children }) => {
    // Al ser un pedido de datos a una API, lo tenemos aqui
    const [productos, setProductos] = useState([]);

    useEffect(()=> {
        const obtenerDatos = async () => {
            try{
                const response = await axios.get("http://localhost:8000/productos");
                setProductos(response.data);
            } catch (error){
                console.error(error);
            }
        }
        obtenerDatos();
    },[]);

    console.log(productos,"<-- Productos desde el componente")

    return (
    <ProductsProvider.Provider value={{ productos }}>
        {children} {/* A estos componentes le llegarán todos los datos que yo quiera que les llegue mediante 'ProductosContext'.
        Para disponibilizar datos, los mando como un prop -> value*/}
    </ProductsProvider.Provider>
    )
}

export default ProductosContext