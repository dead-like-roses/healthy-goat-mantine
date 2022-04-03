import {useContext} from "react";
import LoginContext from "../util/LoginContext";
import {Navigate} from "react-router-dom";

const Index = () => {
    const login_data = useContext(LoginContext);

    if (login_data.user.admin) {
        return (
            <Navigate to="/admin/produkty"/>
        )
    }
    if (login_data.user.token == '') {
        return (
            <Navigate to='/login'/>
        )
    }
    return (
        <Navigate to='/produkty'/>
    )
}

export default Index;