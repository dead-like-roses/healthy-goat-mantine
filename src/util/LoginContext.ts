import React, {useContext} from "react";

const LoginContext = React.createContext({user: {token: "", admin: false}, register: ()=>{}, login: ()=>{}, logout: ()=>{},})

export const useAuth = () => {
    return useContext(LoginContext);
}

export default LoginContext;