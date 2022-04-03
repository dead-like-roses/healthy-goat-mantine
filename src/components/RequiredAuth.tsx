import {useAuth} from "../util/LoginContext";
import {Navigate} from "react-router-dom";
import React from "react";

type Props = {
    children: React.ReactNode
}

const RequiredAuth = ({children}: Props) => {
    const auth = useAuth();
    if (auth.user.token == "") {
        return (<Navigate to="/" />);
    }
    return children;
}