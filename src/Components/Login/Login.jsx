import React, {useState} from 'react'

import './Login.css'

export default function Login(){

    const email = document.getElementById('correo')
    const name = document.getElementById('correo')

    function onPress(){
        console.log(email, name)
    }

    return(
    <div className='form-container'>
        <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label" id='name'>Su Nombre</label>
        <input type="name" class="form-control" id="exampleFormControlInput1"/>
        </div>


        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label" id='correo'>Su correo</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <button type="button" class="btn btn-success" onClick={onPress}>Subir info</button>

    </div>)
}