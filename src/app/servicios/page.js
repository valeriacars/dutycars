import Menu from "../components/Menu";
import styles from '../page.css'

export default function Servicios () {
    return (
        <div>
            <Menu />
            
            <section className="services-section">
                <div className="container">
                    <h1 className="section-title">Nuestros Servicios</h1>
                    
                    <div className="services-grid">
                        <div className="service-card">
                            <h2 className="service-title">Mecánica General</h2>
                            <p className="service-description">
                                Trabajamos todo tipo de vehículo, tanto Diesel como Gasolina, en todos sus sistemas.
                            </p>
                        </div>

                        <div className="service-card">
                            <h2 className="service-title">Latonería y Pintura</h2>
                            <p className="service-description">
                                Reparaciones de choques, abolladuras y desgaste de pintura por el sol, para todas las marcas.
                            </p>
                        </div>

                        <div className="service-card">
                            <h2 className="service-title">Diagnóstico Computarizado</h2>
                            <p className="service-description">
                                Servicio de escáner computarizado con diagnóstico certero y preciso.
                            </p>
                        </div>

                        <div className="service-card">
                            <h2 className="service-title">Reprogramaciones</h2>
                            <p className="service-description">
                                HP Tuners, WinOLS, modificaciones y actualizaciones de sistemas CAN.
                            </p>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <a href="/" className="btn primary-btn">Volver al inicio</a>
                    </div>
                </div>
            </section>
        </div>
    )
}