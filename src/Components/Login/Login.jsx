import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"; //pruebas 1

import React, {useState, useEffect} from "react";

export default function Login({name, isLogged, password}){

    let [userName,setName] = useState(name)
    const navigate = useNavigate(); //validate

      useEffect(() => {
    if (!isLogged) {
      navigate("/");
      return(alert("No estas logueado"))
    }
    }, [!isLogged, navigate]);

    function onChangeName(e){
        userName = e.target.value
        console.log(e)
    }


    if(isLogged){
        return(
            <div className="login">
                <Typography variant="h4">
                Bienvenidx {name}, 
                isLogged {isLogged ? "Si, esta logueado y puede ver el mensaje" : ""},
                password {password},
                </Typography>

                <input type="text" placeholder="ingrese el nombre" onChange={onChangeName}/>
            </div>
            
        );
    }
}