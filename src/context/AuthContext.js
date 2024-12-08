import React from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext= createContext();

function AuthProvider({children}){
    const [user,setUser]= useState(null);

    const login =(userData)=>{
        setUser(userData);
        localStorage.setItem('token', userData.token);
    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
export {AuthContext};