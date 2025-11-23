import React, { useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './About.module.css';
import gsap from 'gsap';
import {useNavigate} from 'react-router-dom'

export default function About() {

    const starsRef = useRef(null);

    useEffect(() => {
    const container = starsRef.current;
    if (!container) return;

    const totalStars = 200;
    const colors = ["#000000ff", "#242424ff", "#000000ff", "#000000ff"]; 

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");

        const size = Math.random() * 5 + 1;
        const depth = Math.random() * 5 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        star.classList.add(styles.star);
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.background = color;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.dataset.depth = depth;

        container.appendChild(star);

        gsap.to(star, {
            opacity: Math.random(),
            duration: 1.5 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }

    const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    container.querySelectorAll(`.${styles.star}`).forEach(star => {
        const depth = star.dataset.depth || 1;
        gsap.to(star, {
            x: x / depth,
            y: y / depth,
            duration: 1.5,
            ease: "power2.out"
        });
    });
    };


    window.addEventListener("mousemove", handleMove);

    const spawnShootingStar = () => {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add(styles.shootingStar);

        shootingStar.style.top = `${Math.random() * 50}vh`;
        shootingStar.style.left = `${Math.random() * 100}vw`;

        container.appendChild(shootingStar);

        gsap.fromTo(shootingStar,
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1.2,
                y: 300,
                x: -300,
                ease: "power4.out",
                onComplete: () => container.removeChild(shootingStar)
            }
        );
    };

    const shootingInterval = setInterval(spawnShootingStar, 4000 + Math.random() * 3000);

    return () => {
        window.removeEventListener("mousemove", handleMove);
        clearInterval(shootingInterval);
        container.innerHTML = "";
    };
    }, []);

    const navigate = useNavigate();
    const handleClick = (value) => {
        console.log(`Redirected to ${value}`);
        navigate(value);
    }

    return (
        <div className={styles.page}>

            <div className={styles.aurora}></div>

            <div id="stars" ref={starsRef} className={styles.stars}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Biosanación es un espacio dedicado al bienestar integral, donde exploramos la conexión entre mente, cuerpo y emociones. Aquí encontrarás reflexiones profundas sobre salud física y mental, así como enfoques complementarios que invitan al autoconocimiento y al equilibrio personal. Nuestro propósito es ofrecer contenido claro, respetuoso y orientado al crecimiento interior, para que cada persona pueda descubrir prácticas que contribuyan a una vida más consciente, serena y saludable.
                    </h1>
               
                        <div className="registerbtn">
                            <Button variant="contained" onClick={() => handleClick("/register")}>Registrarme</Button>
                        </div>

                </div>
            </div>

        </div>
    );
}
