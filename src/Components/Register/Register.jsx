import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './Register.css'
import UserData from '../../../userData.json'
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'


export default function Register(){

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const navigate = useNavigate();
    

    function saveData(){
        if (password === password2 && userName !== "" && email !== "") {
            UserData.name = userName;
            UserData.email = email;
            UserData.password = password;
            UserData.isLogged = true;

            navigate('/')
        } else {
            Swal.fire({
                icon: "error",
                title: "Error en la validación de los datos",
                text: "Revisa los datos ingresados.",
                footer: '<a href="#">Las contraseñas deben ser iguales</a>'
            });

            setUserName("");
            setEmail("");
            setPassword("");
            setPassword2("");
        }
    }

    return(
        <div className='form-data'>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                
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
                    <Button variant="contained" endIcon={<SendIcon />} onClick={saveData}>
                        Crear usuario
                    </Button>
                </Stack>

            </Box>
        </div>
    );
}
