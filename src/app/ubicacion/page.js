import Link from 'next/link';
import Menu from '../components/Menu';
export default function Ubicacion() {
    return(
        <div style={{ width: "100%",  textAlign: 'center' }}>
          <Menu/>
    
        <iframe
          style={{ width: "80%", height: "600px", marginTop: '20px' }}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=F3WC+83C,Avenida,Caracas+1020,Distrito+Capital+(Duty+cars)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a>
        </iframe>

        <h2>en la av. San Martin entre esquina alcabala a palo grande 
        estacionamiento Flor de San Martin, Galpon #05 Caracas, Distrito Capital 
        zona postal 1010.
        Punto de referencia: ubicarnos sentido centro de Caracas, desde la maternidad Concepcion 
        Palacios, seguir derecho luego de pasar el semaforo, por debajo del elevado de capuchinos,
        encontrara una entrada a mano derecha. </h2>
        <nav>
            <Link href="/">volver al inicio</Link>
        </nav> 
        </div>
    )
}