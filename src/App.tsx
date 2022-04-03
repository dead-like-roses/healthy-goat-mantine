import React, {useState} from 'react';
import {MantineProvider} from '@mantine/core';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Index from "./pages/Index";
import LoginContext from './util/LoginContext';

const App = () => {
    const [user, setUser] = useState({token: "", name: "", admin: false})
    const register = async () => {

    }
    const login = async () => {

    }
    const logout = async () => {

    }
    return (
        <MantineProvider>
            <LoginContext.Provider value={{user, register, login, logout  }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/rejestracja" element={<Register />}/>
                    </Routes>
                </BrowserRouter>
            </LoginContext.Provider>
        </MantineProvider>
    );
}

export default App;
