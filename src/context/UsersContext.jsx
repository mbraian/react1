import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  
  useEffect(() => {
    getUsers();
  },[]);
  
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      console.log(response, "<-- Respuesta usuarios");
      setUsuarios(response.data);
    } catch (error) {
        console.error(error)
    }
  };

  const addUser = async (usuario) => {
    try{
      /*const response = */await axios.post("http://localhost:8000/users", usuario);
      //setUsuarios([...usuarios, response.data]); // Recuperamos los usuarios que ya estan en el array, y le agregamos a 'usuario'
      await getUsers();
    }catch(error){
      console.error(error);
    }
  };


  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <UsersProvider.Provider value={ { usuarios, getUsers, addUser, logOut }}>
        {children}
    </UsersProvider.Provider>
  )
};

export default UsersContext;
