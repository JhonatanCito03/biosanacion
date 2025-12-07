import styles from './About.module.css'
import { Typography, Button } from '@mui/material';
import {useRef} from 'react';

export default function About(){

    const whoRef = useRef(null);
    const misionRef = useRef(null);
    const visionRef = useRef(null);
    const publicoRef = useRef(null);


    const goTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return(
    <div className='container' >
        <div className={styles.aboutUs}>

        <div className={styles.buttons}>
            <Button variant="contained" color="secondary" onClick={() => goTo(whoRef)} sx={{marginRight:'10px', padding: '6px', fontSize: '12px'}}>Ir a "¿Quiénes somos?"</Button>
            <Button variant="contained" color="secondary" onClick={() => goTo(misionRef)} sx={{marginRight:'10px', padding: '6px', fontSize: '12px'}}>Ir a "Nuestra misión"</Button>
            <Button variant="contained" color="secondary" onClick={() => goTo(visionRef)} sx={{marginRight:'10px', padding: '6px', fontSize: '12px'}}>Ir a "Nuestra visión"</Button>
            <Button variant="contained" color="secondary" onClick={() => goTo(publicoRef)} sx={{marginRight:'10px', padding: '6px', fontSize: '12px'}}>Ir a "Público objetivo"</Button>
        </div>
            

            <div ref={whoRef} className={styles.whoweare}>
                <Typography variant="h1" component="h1" className={styles.h1}>
                    ¿Quiénes somos?
                </Typography>

                <Typography variant="h3" component="h3" className={styles.h3}>
                    -> Somos una organización dedicada 
                    a orientar personas hacía la trascendencia
                    espiritual y material.
                </Typography>
            </div>
            


        <div ref={misionRef} className={styles.mision}>
            <Typography variant="h1" component="h1" className={styles.h1Lower}>
                Nuestra misión
            </Typography>

            <Typography variant="h3" component="h3" className={styles.h3Lower}>
                -> Acompañar a nuestros usuarios 
                    en el camino de la reconexión
                    y el autoconocimiento, mediante la reflexión
                    y el uso de la homeopatía 
                    y la medicina tradicional china
                    como métodos de sanación y transformación.
            </Typography>
        </div>
            


        <div ref={visionRef} className={styles.vision}>
            <Typography variant="h1" component="h1" className={styles.h1Lower}>
                    Nuestra Visión
                </Typography>

                <Typography variant="h3" component="h3" className={styles.h3Lower}>
                    -> Impulsar las vidas de nuestros usuarios brindándoles
                        acompañamiento, planes de acción y conocimiento
                        que les permitan sanar; trascender a sus 
                        propias condiciones y alcanzar el punto deseado 
                        en sus vidas 
            </Typography>
        </div>
            


        <div ref={publicoRef} className={styles.publico}>
            <Typography variant="h1" component="h1" className={styles.h1Lower}>
                Público Objetivo
            </Typography>

            <Typography variant="h3" component="h3" className={styles.h3Lower}>
                -> Personas que desean hacerse conscientes
                    de sus propios patrones y estilos de vida
                    disfuncionales y desean trabajar en ellos
                    para trascender.
            </Typography>
        </div>
            
        </div>
        
    </div>
    );    
}