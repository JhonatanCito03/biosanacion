import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import styles from './Register.module.css'
import UserData from '../../../userData.json'
import Swal from "sweetalert2";
import {data, useNavigate} from 'react-router-dom'
import { Typography } from "@mui/material";


export default function Register(){

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const navigate = useNavigate();

    let validate = false;

    
    

    async function saveData(emailBtn) {
    if (password === password2 && userName !== "" && email !== "" && password.length >= 8) {

        UserData.name = userName;
        UserData.email = email;
        UserData.password = password;
        UserData.isLogged = true;

        Swal.fire({
            title: `Datos validados, usuario: ${userName}`,
            text: "Fin",
            icon: "success"
        });

            // ----- 1. Envío a Spring Boot -----
        async function enviarCorreoSpring(emailBtn) {
            try {
                const res = await fetch("http://localhost:8080/api/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: emailBtn })
                });

                if (!res.ok) {
                    // Esto captura códigos 4xx y 5xx
                    throw new Error(`Error del servidor: ${res.status}`);
                }

                const data = await res.json(); // <--- Aquí obtienes la respuesta en JSON

                console.log("Respuesta del backend Spring:", data);

                UserData.token = data.token;

                return data; // <--- Devuelves los datos al que llame la función

            } catch (error) {
                console.error("Error enviando a Spring Boot:", error);
                return null; // Siempre devuelve algo para evitar errores
            }
        }


            // ----- 2. Envío a Laravel -----
            async function guardarUsuarioLaravel() {
                try {
                    const res = await fetch("http://localhost:8000/api/users", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: userName,
                            email: email,
                            password: password
                        })
                    });

                    const data = await res.json();
                    console.log("Usuario guardado en Laravel:", data);

                    return data;
                } catch (error) {
                    console.error("Error guardando en Laravel:", error);
                }
            }

            // Ejecutas ambas en orden
            await enviarCorreoSpring(emailBtn);
            await guardarUsuarioLaravel();

            navigate('/validator');

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Revisa los datos: Contraseñas no coinciden o campos vacíos",
            });
        }
    }


    return(
        <div className={styles.formData}>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
            <h1 variant="h3" sx={{
                textAlign:'center', 
                marginBottom:'10px',
                }} 
                className={styles.text}
                >Formulario de registro</h1>
                
                <TextField 
                    fullWidth 
                    label="Nombre" 
                    id="username"
                    type='text'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />

                <TextField 
                    fullWidth 
                    label="Correo" 
                    id="email"
                    type='email'
                    sx={{marginTop:'10px'}}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <TextField 
                    fullWidth 
                    label="Contraseña" 
                    id="password"
                    type='password'
                    sx={{marginTop:'10px'}}
                    placeholder="Debe ser de + de 8 caracteres"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <TextField 
                    fullWidth 
                    label="Repetir contraseña" 
                    id="password2"
                    type='password'
                    sx={{marginTop:'10px'}}
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                />
            
                <Stack direction="row" spacing={2} sx={{alignItems:'center', justifyContent:'center', marginTop:'15px'}}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={() => saveData(email)}>
                        Crear usuario
                    </Button>
                </Stack>
            </Box>
        </div>
    );
}
