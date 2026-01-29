import styles from './About.module.css';
import image1 from '../../assets/each-page-image/image-tarro.jpeg';
import caras from '../../assets/each-page-image/caras.jpeg';


export default function About() {
    return (
        <div className="globalContent">

        <div className={styles.aboutContainer}>
            <img src={image1} alt="Imagen de referencia" className={styles.image1}/>
            <div className={styles.maintextContainer}>
                <h1 className={styles.aboutTitle}>¿Qué es Biosanación?</h1>
                <p>Biosanación es un espacio de acompañamiento integral donde cuerpo, mente y emoción se entienden como un sistema interconectado.
                <br />
                <br />
                Trabajamos desde la homeopatía y la inteligencia emocional para ayudarte a comprender el origen profundo de tus desequilibrios y recuperar tu bienestar de forma consciente.</p>
            </div>
        </div> 

        <div className={styles.visionContainer} style={{marginTop:'20px'}}>
            <h1 className="poppins-medium" style={{justifyContent:'center', textAlign:'center'}}>Nuestra Vision</h1>

            <div className={styles.dialogues}>

                <div className={styles.aboutCard}>
                    <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                        <img src={caras} style={{width:'110px', height:'110px'}} alt="" />
                        <h3>Acompanamiento en Homeopatia</h3>
                    </div>
                    
                    <p>La homeopatía trabaja estimulando la capacidad natural del organismo para recuperar su equilibrio.
                    No se trata solo de lo físico, sino de comprender cómo los estados emocionales, el estrés y la <b>historia personal</b> influyen en la salud.</p>
                    <u style={{fontSize:'10px',display:'flex', textAlign:'center'}}>En Biosanación utilizamos la homeopatía como una herramienta de regulación profunda, respetuosa y personalizada.</u>
                </div>

                <div className={styles.aboutCard}>
                    <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}>
                        <img src={caras} style={{width:'110px', height:'110px'}} alt="" />
                        <h3>Desarrollo de Inteligencia Emocional</h3>
                    </div>
                    
                    <p>Las emociones no gestionadas impactan directamente en la salud, las decisiones y las relaciones.
                    Acompañamos procesos para aprender a reconocer, comprender y regular el mundo emocional, fortaleciendo la autoconciencia y la estabilidad interna.</p>
                    <u style={{fontSize:'10px',display:'flex', textAlign:'center'}}>En Aquí no se juzga, se observa, se comprende y se transforma.</u>
                </div>

            </div>

        </div>


        </div>
        
    );
}