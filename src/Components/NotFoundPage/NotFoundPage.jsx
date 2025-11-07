import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./NotFoundPage.css"; 
import image from '../../assets/310442708_634265378392041_7241127712327677285_n.jpg'

const NotFoundPage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const image1Ref = useRef(null);

  // 🔹 Primer efecto: animaciones de entrada
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        titleRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        subtitleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        image1Ref.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 3 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.4, ease: "elastic.out(1, 1.5)" },
        "-=0.3"
      );
  }, []);

  useEffect(() => {
    const bubbles = gsap.utils.toArray(".bubble");
    gsap.to(bubbles, {
      y: "-=225",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="notfound-container" ref={bgRef}>
      <img src={image} alt="BIOSANACIÓN" className="image-logo-error" ref={image1Ref}/>
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      <h2 ref={titleRef}>Página no encontrada</h2>
      <p ref={subtitleRef}>Oops... Parece que esta url no existe.</p>
      <button ref={buttonRef} onClick={() => (window.location.href = "/")}>
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFoundPage;
