import React, {useState} from 'react';
import { SocialIcon } from 'react-social-icons'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {Container, Typography, styled, Button, Stack} from '@mui/material';
import './MainPage.css';
import {useNavigate} from 'react-router-dom'




export default function MainPage(){
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: {ease: "power3.out", duration: 1}});
        
        //siguiente

        tl.from(".main-text", {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            filter: "blur(6px)",
        })
        .to(".main-text", {
            textShadow: "0 0 25px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.6)",
            duration: 1.5,
            ease: "power2.inOut",
            }, "-=0.5")

        .from(".sub-text",{
            y: 90,
            opacity: 0,
            duration: 1.2,
        }, "-=0.8")
        .from(".social-icon",{
            y: 90,
            opacity: 0,
            duration: 1.2,
        }, "-=0.8")

        //animacion personalizada boton
        .fromTo(".button-contained", 
        {
            opacity: 0,
            scale: 0.8,
        }, 
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
        }, 
        "-=0.3"
        )
        .to(".button-contained", {
        scale: 1.05,
        boxShadow: "0 0 35px rgba(255, 255, 255, 0.6)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
        }, "-=0.3");
    });

    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();

    const handleClick = (value) => {
        console.log(`Redirected to ${value}`);
        navigate(value);
    }

    return(
    <Container sx={{height:'100vh'}}>
        <Container className='text-container'>
            <Typography 
            variant='h1'
            fontFamily={'Playfair Display, serif'} 
            className='main-text'
            sx={{
                fontSize: {
                    xs: '3rem',
                    sm:'4rem',
                    md:'5rem',
                    lg: '6rem',
                },
            }}
            >
                BIOSANACIÓN
            </Typography>
            <Typography variant='h6' className='sub-text'>
                Donde te reencontrarás contigo mismo.
            </Typography>
            
            <button className='button-contained' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => handleClick("/About")}>
                {hovered ? "Descubre más" : "Explorar"}
            </button>


        <Container className='social-media'>
            <SocialIcon className='social-icon1' url="https://www.youtube.com/@jhonristy" style={{ height: 40, width: 40 }} target='_blank' rel="noopener noreferrer"/>
            <SocialIcon className='social-icon2' url="https://www.instagram.com/jhon_aristizabal_oficial/" style={{ height: 40, width: 40 }} target='_blank' rel="noopener noreferrer"/>
            <SocialIcon className='social-icon3' url="https://www.tiktok.com/@jhonaristizabal40?is_from_webapp=1&sender_device=pc" style={{ height: 40, width: 40 }} target='_blank' rel="noopener noreferrer"/>
            <SocialIcon className='social-icon3' url="https://www.facebook.com/tubiosanacion" style={{ height: 40, width: 40 }} target='_blank' rel="noopener noreferrer"/>
        </Container>

        </Container>
        
    </Container>

    
    );
}