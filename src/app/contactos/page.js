import Link from "next/link"
import Menu from "../components/Menu"

export default function Contacto () {
    return (
    <center> 
        <Menu/>
        <article>
        <h1>Numeros telefonicos</h1>
        <p>0212-451-66-80/ 0424-193-44-88</p>
        <h1>Correo electronico</h1>
        <p>dutycars@gmail.com</p>
    </article> 
        <nav>
            <Link href="/">volver a inicio</Link>
        </nav> </center>

    )
}