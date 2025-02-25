import { useState } from "react";
import { React, createContext, useContext } from "react";

import { useSearchParams } from "react-router-dom";
const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const [loading, setLoading] = useState(false);

  const [clientToken, setClientToken] = useState("");

  const [userName,setUserName] = useState("Buddy!");
  const [userCredentials,setUserCredentials] = useState({password:"",email:""});





  const toggleStatus = () => {
    setLoginStatus(!loginStatus);
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <UserContext.Provider
      value={{
        userName,setUserName,
        userCredentials,setUserCredentials,
        loginStatus,
        setLoginStatus,
        isLoginFormVisible,
        setIsLoginFormVisible,
        toggleStatus,
        loading,
        setLoading,
        clientToken,
        setClientToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
