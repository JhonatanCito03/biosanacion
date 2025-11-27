import userData from '../../../userData.json'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'  
import styles from './validator.module.css'

export default function Validator() {
    const navigator = useNavigate();

    const [token, setToken] = useState("");
    const [count, setCount] = useState(0);

    function countPlus() {
        if (count > 4) {
            alert("token eliminado");
            setCount(0);
            return;
        }
        setCount(count + 1);
        console.log(count + 1);
    }

    function onTokenChange(e) {
        setToken(e.target.value);
    }

    function verify() {
        if (userData.token === token) {
            userData.isVerified = true;

            Swal.fire({
                title: "Validado con éxito",
                text: "Bienvenido usuario, serás redirigido",
                icon: "success"
            });

            navigator("/home"); // ejemplo
        } else {
            userData.isVerified = false;
            Swal.fire({
                title: "Token incorrecto",
                text: "Intenta nuevamente",
                icon: "error"
            });
        }
    }

    return (
        <div className={styles.form}>
            <input 
                className={styles.inputToken}
                type="text" 
                placeholder="Ingrese el token que le llegó al correo"
                value={token}
                onChange={onTokenChange}
            />

            <button 
                className={styles.btnVerified}
                disabled={token.length !== 8}  
                onClick={() => { countPlus(); verify(); }}
            >
                Verificar
            </button>
        </div>
    );
}
