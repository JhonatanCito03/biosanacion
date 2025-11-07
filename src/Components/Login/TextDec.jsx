import {Container, Typography} from '@mui/material';
import './TextDec.css';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import icon from '../../assets/310442708_634265378392041_7241127712327677285_n.jpg'


export default function TextDec(){

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: {ease: "power3.out", duration: 1}});
        
        //siguiente

        tl.from(".text-desc", {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            filter: "blur(6px)",
        })
        .to(".text-desc", {
            textShadow: "0 0 25px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.6)",
            duration: 1.5,
            ease: "power2.inOut",
            }, "-=0.5")

        .from(".desc1",{
            y: 90,
            opacity: 0,
            duration: 1.2,
        }, "-=0.8")

        .fromTo(".image-logo1", 
        {
            opacity: 0,
            scale: 0.8,
            opacity: 0,
            duration: 1,
        }, 
        {
            opacity: 1,
            scale: 1,
            duration: 3,
            ease: "back.out(1.7)",
        }, 
        "-=0.3"
        )
        .to(".image-logo1", {
        scale: 1.03,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
        }, "-=0.3");
        
    });



    return(
        <Container>
            <Typography variant='h2' className='text-desc'>
                Bienvenido a BioSanación.
            </Typography>

            <div className='sub-text-desc'>
                <Typography variant='h6' className='desc1'>
                    BioSanación es un espacio dedicado al equilibrio entre cuerpo, mente y espíritu, donde la homeopatía y la medicina natural se unen para promover una salud profunda y duradera. Nuestro propósito es ayudarte a reconectar con tu bienestar interior, guiándote hacia una vida más armoniosa mediante terapias naturales, tratamientos personalizados y acompañamiento integral.
                    Creemos que la verdadera sanación surge cuando se atiende no solo el síntoma, sino también la causa que lo origina. Por eso, en BioSanación abordamos la salud desde una visión holística, integrando la sabiduría de la naturaleza con métodos modernos y seguros.
                    Aquí encontrarás un lugar de renovación, serenidad y autodescubrimiento, donde cada persona es tratada de manera única. En BioSanación, tu equilibrio es nuestra misión.
                </Typography>
                <img src={icon} alt="Logo" className='image-logo1' />
            </div>
            
        </Container>
    );
}