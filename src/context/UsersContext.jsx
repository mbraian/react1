import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      console.log(response, "<-- Respuesta usuarios");
      setUsuarios(response.data);
    } catch (error) {
        console.error(error)
    }
  };

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <UsersProvider.Provider value={ { usuarios, getUsers }}>
        {children}
    </UsersProvider.Provider>
  )
};

export default UsersContext;
