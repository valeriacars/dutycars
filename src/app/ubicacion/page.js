import Link from 'next/link';
import Menu from '../components/Menu';
export default function Ubicacion() {
    return(
      <div className="location-container">
      <Menu />
      
      <section className="location-section">
          <div className="map-wrapper">
              <iframe
                  className="map-iframe"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=F3WC+83C,Avenida,Caracas+1020,Distrito+Capital+(Duty+cars)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen
              />
          </div>

          <div className="location-details">
              <h2 className="address-title">Nuestra Ubicación</h2>
              
              <p className="address-text">
                  Av. San Martín entre esquina Alcabala a Palo Grande<br />
                  Estacionamiento Flor de San Martín, Galpón #05<br />
                  Caracas, Distrito Capital - Zona Postal 1010
              </p>

              <p className="directions-text">
                  Punto de referencia:<br />
                  Desde la Maternidad Concepción Palacios, siga derecho pasando el semáforo,<br />
                  continúe bajo el elevado de Capuchinos, y encontrará una entrada a mano derecha.
              </p>

              <div className="action-buttons">
                  <Link href="/" className="btn primary-btn">Volver al inicio</Link>
              </div>
          </div>
      </section>
  </div>
    )
}