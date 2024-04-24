import { createContext,useContext } from "react";

export const authContext = createContext({
    authData:{
        status:false,
        data:{}
    },
    login: (loginData)=>{},
    logout:()=>{}
})

export const useAuthContext = ()=>{
    return useContext(authContext)
}

export const AuthProvider = authContext.Provider