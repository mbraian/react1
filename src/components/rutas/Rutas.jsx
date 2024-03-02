import { Routes, Route } from 'react-router-dom';
// Routes: agrupa todas las rutas. Ponemos la cantidad de rutas necesarias para la app
import Home from '../../page/home/Home';
import Products from '../products/Products';

const Rutas = () => {
  return (
    <>
    <Routes>
        {/* element: view o page que deseo que se muestre cuando el path '/' exista*/}
        < Route path='/' element={<Home />} />
        < Route path='/products' element={<Products />} />
        < Route path='*' element={<h1>Page not found</h1>} />
        {/* <Route path='/productos/:id' element/> */}
    </Routes>
    </>
  )
}

export default Rutas