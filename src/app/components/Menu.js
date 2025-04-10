'use client';

import Link from "next/link";
import Image from "next/image";
import Google from "../image/google.png";
import { useEffect, useState } from "react";
import createClientForBrowser from "../../../utils/supabase/client";
import { signinWithGoogle } from "../../../utils/supabase/actions";

export default function Menu() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClientForBrowser();
      const { data: session } = await supabase.auth.getSession();

      if (session?.session) {
        setUser(session.session.user);
      }
    };

    fetchUser();

    const { data: authListener } = createClientForBrowser().auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const supabase = createClientForBrowser();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar el estado del menú
  };

  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          <div className="logo">Duty Cars C.A.</div>
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu" id="nav-menu">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/quienessomos">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/ubicacion">Ubicación</Link>
              </li>
              <li>
                <Link href="/contactos">Contacto</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link href="/profile">Perfil</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="google-button">
                      Cerrar sesión
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <form>
                    <button formAction={signinWithGoogle} className="google-button">
                      <Image src={Google} width={24} height={24} alt="Google" />
                      Iniciar con Google
                    </button>
                  </form>
                </li>
              )}
            </ul>
          </nav>
          <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>
    </>
  );
}