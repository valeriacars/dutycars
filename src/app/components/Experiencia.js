import style from '../page.css';

export default function Experiencia() {
  return (
    <div className="rate-experience-static">
      <h2 className="experience-title">Califica tu Experiencia</h2>

      {/* Sección de Calificación */}
      <div className="rating-section">
        <p className="rating-label">¿Cómo calificarías tu experiencia?</p>
        <div className="star-rating">
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
        </div>
      </div>

      {/* Botón Simulado */}
      <button className="submit-button" disabled>Enviar Calificación</button>
    </div>
  );
}