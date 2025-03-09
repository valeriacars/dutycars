import Link from "next/link"
import Menu from "../components/Menu"

export default function Contacto () {
    return (
        <div className="contact-container">
            <Menu />
            
            <section className="contact-section">
                <div className="container">
                    <h1 className="section-title">Contáctanos</h1>
                    
                    <div className="contact-grid">
                        <div className="contact-card">
                            <h2 className="contact-title">Teléfonos</h2>
                            <p className="contact-details">
                                <span>0212-451-66-80</span>
                                <span>0424-193-44-88</span>
                            </p>
                        </div>

                        <div className="contact-card">
                            <h2 className="contact-title">Correo Electrónico</h2>
                            <p className="contact-details">
                                <span>dutycars@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <Link href="/" className="btn primary-btn">Volver al inicio</Link>
                    </div>
                </div>
            </section>
        </div>

    )
}