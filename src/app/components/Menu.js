import styles from "../page.css";
import Link from "next/link";
import Image from "next/image";
import Google from '../image/google.png'
import { signinWithGoogle } from "../../../utils/supabase/actions";

 export default function Menu () {
    return ( 
        <header className="site-header">
        <div className="nav-container">
            <div className="logo">Duty Cars C.A.</div>
            <nav className="main-nav">
                <ul className="nav-menu" id="nav-menu">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/quienessomos">Quiénes somos</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/ubicacion">Ubicación</Link></li>
                    <li><Link href="/chat">Chat</Link></li>
                    <li><Link href="/contactos">Contacto</Link></li>
                    <li>
                      <form>
                        <button formAction={signinWithGoogle} href="#" id="google-login" className="google-button">
                            <Image src={Google} width={24}
                               height={24} alt="Google"/>
                            Iniciar con Google
                        </button>
                        </form>

                    </li>
                </ul>
            </nav>
            <div className="menu-toggle" id="menu-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    </header>
    )
}