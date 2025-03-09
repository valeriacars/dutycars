import Menu from "../components/Menu";
import styles from "../page.css";

export default function QuieneSomos() {
    return (
<div>
            <Menu />
            <div className="banner">
            <section className="about-section">
                <div className="container">
                    <h1 className="section-title">¿Quiénes Somos?</h1>
                    
                    <div className="about-content">
                        <p className="lead-text">
                            Somos un taller mecánico especializado en mecánica general, ligera y pesada.
                            Trabajamos con todo tipo de vehículos, tanto Diesel como Otto.
                        </p>
                        <p className="description-text">
                            Nuestro compromiso es ofrecer un servicio de excelencia, garantizando:
                        </p>
                        
                        <ul className="features-list">
                            <li>Diagnóstico preciso y soluciones efectivas</li>
                            <li>Atención personalizada</li>
                            <li>Tecnología de última generación</li>
                            <li>Repuestos de calidad garantizada</li>
                        </ul>
                    </div>

                    <div className="action-buttons">
                        <a href="/" className="btn primary-btn">Volver al inicio</a>
                        <a href="/contactos" className="btn secondary-btn">Contáctanos</a>
                    </div>
                </div>
            </section>

            </div>
 
        </div>
    )
}