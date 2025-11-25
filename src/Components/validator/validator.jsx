import userData from '../../../userData.json'
import React, {useState,useRef} from 'react'
import {data, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Validator(){
    const navigator = useNavigate()

    let [token, setToken] = useState("")

    if(userData.token !== token){
        userData.isVerified = false
    }
    else{
        userData.isVerified = true
        
        Swal.fire({
        title: "Validado con exito",
        text: "Bienvenido usuario, seras redirigido",
        icon: "success"
        });

        setTimeout(() => {
            navigator('/');
        }, 1000);
    }
    
    function onTokenChange(e){
        setToken(e.target.value);
    }
    return(
    <div>
        <input type="text" placeholder='Ingrese el token que le llego al correo' value={token} onChange={onTokenChange}/>
        <h1>{token}</h1>
    </div>
    );
}