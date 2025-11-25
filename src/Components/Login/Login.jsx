import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import styles from './Login.module.css'
import UserData from '../../../userData.json'
import Swal from "sweetalert2";
import {data, useNavigate} from 'react-router-dom'
import { Typography } from "@mui/material";


export default function Login(){

    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
 
    
    function onChangeEmail(e){
        setEmail(e.target.value);
    }
    function onChangePass(e){
        setPassword(e.target.value);
    }

    //deep validation
    async function validar(email, password) {
    const res = await fetch("http://127.0.0.1:8000/api/users/validar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    return data;
    }

    // //Pruebas conexion con spring boot (email)
    // async function enviarCorreoSpring(email) {
    // const res = await fetch("http://localhost:8080/api/users", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email })
    // });

    // return await res.json();
    // }
    
    return(
        <div className={styles.formData}>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
            <h1 variant="h3" sx={{
                textAlign:'center', 
                marginBottom:'10px',
                }} 
                className={styles.text}
                >Inicio de sesión</h1>
           
                <TextField 
                    fullWidth 
                    label="Su correo"
                    placeholder="example@gmail.com"
                    id="email"
                    type='email'
                    sx={{marginTop:'10px'}}
                    value={email}
                    onChange={onChangeEmail}
                />

                <TextField 
                    fullWidth 
                    label="Contraseña"
                    placeholder='Ingrese su sontraseña'
                    id="password"
                    type='password'
                    sx={{marginTop:'10px'}}
                    value={password}
                    onChange={onChangePass}
                />

                <Stack direction="row" spacing={2} sx={{alignItems:'center', justifyContent:'center', marginTop:'15px'}}>
                    <Button variant="contained" endIcon={<SendIcon />} 
                    onClick={async () => {
                        const resultado = await validar(email, password);

                        if (resultado.valid) {
                            console.log("Acceso permitido:", resultado.usuario);

                            // // 1. Enviar correo desde Spring Boot
                            // try {
                            //     const respuestaCorreo = await enviarCorreoSpring(email);
                            //     console.log("Respuesta del backend de Spring:", respuestaCorreo);

                            //     if (respuestaCorreo.status !== "ok") {
                            //         console.warn("El correo no pudo enviarse:", respuestaCorreo);
                            //     }
                            // } catch (error) {
                            //     console.error("Error enviando correo:", error);
                            // }

                            // 2. Mostrar alerta
                            Swal.fire({
                                title: `Hola, ${resultado.usuario.name}`,
                                text: "Ahora serás redirigido a la página principal.",
                                icon: "success"
                            });

                            // 3. Redirigir
                            setTimeout(() => navigate('/'), 2000);

                            // 4. Guardar datos locales
                            UserData.name = resultado.usuario.name;
                            UserData.email = resultado.usuario.email;
                            UserData.isLogged = true;

                        } else {
                            console.log("Error:", resultado.message);

                            Swal.fire({
                                icon: "error",
                                title: `${resultado.message}`,
                                text: "Por favor intentelo de nuevo",
                                footer: '<a href="/">Volver a la pagina principal</a>'
                            });
                        }
                    }}
                    >
                        Ingresar
                    </Button>
                </Stack>

            </Box>
        </div>
    );
}
