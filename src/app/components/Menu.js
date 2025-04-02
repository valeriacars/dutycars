'use client'
import Link from "next/link";
import Image from "next/image";
import Google from '../image/google.png'
import { supabase } from "../../../utils/supabase/client";

 export default function Menu () {

   const handleGoogle = async (event) => {
    event.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `http://localhost:3000`,
                  queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                  },
                },
              })

              console.log(data);
        }
        catch (e) {
            console.error(e)
        }
   }


    return ( 
<>
        
        <header className="site-header">
            
        <div className="nav-container">
            <div className="logo">Duty Cars C.A.</div>
            <nav className="main-nav">
                <ul className="nav-menu" id="nav-menu">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/quienessomos">Quiénes somos</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/ubicacion">Ubicación</Link></li>
                    <li><Link href="/contactos">Contacto</Link></li>
                    <li>
                        <form onSubmit={handleGoogle}>
                        <button type="submit"  id="google-login" className="google-button">
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
    </>
    )
}