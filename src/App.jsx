import Footer from "./components/footer/Footer"
import Navegador from "./components/navegador/Navegador"
import Rutas from "./components/rutas/Rutas"


function App() { // Ahora este componente contiene el estado y el controlador de evento 'handleClick'. Ambos pasan como 'props' a c/u de los botones
  

  return (
    <>
    <Navegador />
    <Rutas />
    <Footer />
    </>
  )
}

export default App // Con 'default' se exporta todo
