import { Routes, Route } from "react-router-dom";
// Routes: agrupa todas las rutas. Ponemos la cantidad de rutas necesarias para la app
import Home from "../../page/home/Home";
import Products from "../products/Products";
import Admin from "../../page/admin/Admin";
import FormRegister from "../register/FormRegister";

const Rutas = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        {/* element: view o page que deseo que se muestre cuando el path '/' exista*/}
        <Route path="/" element={<Home />} />
        {user && user.isAdmin ? (
          <Route path="/admin" element={<Admin />} />
        ) : null}
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/register" element={<FormRegister />} />
        {/* <Route path='/productos/:id' element/> */}
      </Routes>
    </>
  );
};

export default Rutas;
