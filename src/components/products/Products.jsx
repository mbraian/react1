import PropTypes from 'prop-types';

const Products = ({nombre, edad, club, funcionProps, apellido}) => {
  const {name, estadio} = club;
  console.log(nombre, "<-- PROPS1")
  console.log(edad, "<-- PROPS2")
  console.log(club, "club")

  const suma = () => {
    edad + 10 // "3810"
  }

  return (
    <>
    <h1>Componente de Productos</h1>
    <h2>Nombre: {nombre} {edad}</h2>
    <h2>Club: {name}; Estadio: {estadio}</h2>
    <button onClick={funcionProps}>Ejecuta la funcion para aumentar</button>
    </>
  )
}

Products.propTypes = { // Forma de implementar seguridad en la aplicacion
  nombre: PropTypes.string.isRequired, // Lo que reciba como 'nombre' debe ser String
  edad: PropTypes.number,
  apellido: PropTypes.any,
  funcionProps: PropTypes.func,
  club: PropTypes.object 
}

export default Products