import Footer from "./components/footer/Footer"
import Navegador from "./components/navegador/Navegador"
import Rutas from "./components/rutas/Rutas"
import ProductosContext from "./context/ProductosContext"

function App() { // Ahora este componente contiene el estado y el controlador de evento 'handleClick'. Ambos pasan como 'props' a c/u de los botones
  

  return (
    <>
    <ProductosContext> {/* Envuelvo toda mi app con el contexto. 'Navegador', 'Rutas' y 'Footer' son hijos de 'ProductosContext' ('children' props)*/}
      <Navegador />
      <Rutas />
      <Footer />
    </ProductosContext>
    </>
  )
}

export default App // Con 'default' se exporta todo
