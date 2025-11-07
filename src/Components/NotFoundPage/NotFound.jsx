import {Link} from 'react-router-dom'

export default function NotFoud(){
    return(
    <div>
        <h1>Página solicitada no ha sido encontrada.</h1>
        <Link to="/">
            <button>Volver a la página principal.</button>
        </Link>
    </div>
    )
    
}