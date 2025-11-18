import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"; //Validated, is working

import React, {useState, useEffect} from "react";
import './Login.css'


export default function Login({name, isLogged, password, email}){

    let [userName,setName] = useState(name)
    const navigate = useNavigate(); //validate

    
    if(isLogged){
        return(
            <div className="login">
                <div className="user-data">
                    <input type="text" value={`Nombre: ${name}`} disabled/>
                    <input type="text" value={`Correo: ${email}`} disabled/>
                    <input type="text" value={`Contraseña: ${password ? '*****' : 'Sin contraseña'}`} disabled/>
                    <input type="text" value={isLogged ? 'Existe' : 'No existe'} disabled/>
                </div>
            </div>
        );
    }
}