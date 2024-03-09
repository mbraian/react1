import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsProvider = createContext(); // Con esto vamos a agrupar todas las peticiones HTTP

// eslint-disable-next-line react/prop-types
const ProductosContext = ({ children }) => {
  // Al ser un pedido de datos a una API, lo tenemos aqui
  const [productos, setProductos] = useState([]);

  const obtenerDatos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/productos");
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  console.log(productos, "<-- Productos desde el componente");

  // VERBOS HTTP: acciones para consumir o alimentar a las APIS
  // GET: Obtiene los datos
  // POST: Envia los datos
  // PUT: Actualiza los datos
  // DELETE: Borrar los datos

  // POST para alimentar nuestra DB
  const addProducto = async (producto) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/productos",
        producto
      );
      setProductos([...productos, response.data]); // Se recuperan todos los productos y le agregamos el nuevo
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE para eliminar un producto de la DB.
  const deleteProducto = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/productos/${id}`);
        setProductos(productos.filter( (producto) => producto.id !== id) );
    } catch (error) {
      console.error(error);
    }
  };

  // PUT para ctualizar un producto de la DB
  const updateProducto = async (producto) => {
    try{
        await axios.put(`http://localhost:8000/productos/${producto.id}`, producto);
        await obtenerDatos();
    } catch (error) {
        console.error(error);
    }
  };



  return (
    <ProductsProvider.Provider value={{ productos, addProducto, deleteProducto, updateProducto }}>
      {children}{" "}
      {/* A estos componentes le llegarán todos los datos que yo quiera que les llegue mediante 'ProductosContext'.
        Para disponibilizar datos, los mando como un prop -> value*/}
    </ProductsProvider.Provider>
  );
};

export default ProductosContext;
