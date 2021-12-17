import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
    const { push } = useHistory();
    // 1. On mount, execute a http request to the logout endpoint.
    useEffect(() => {
    const token = localStorage.getItem('token');

    axiosWithAuth()
        .post ('/logout')        
        .then (resp => {            
            // 2. On a successful request, remove the token from localStorage and redirect to the login page.          
            localStorage.removeItem("token")
            push ("/login");       
        })

        }, [])
        return(<div></div>);
}

export default Logout;

// Task List

