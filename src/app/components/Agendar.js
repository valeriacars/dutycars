import style from '../page.css'

export default function Agendar() {
  return (
    <div className="appointment-form-static">
      <h2 className="form-title">Agendar Cita</h2>

      {/* Sección de Detalles de la Cita */}
      <div className="form-section">
        <h3 className="section-title">Detalles de la Cita</h3>
        <div className="form-field">
          <label htmlFor="date">Fecha:</label>
          <input type="date" id="date" value="2023-11-15" readOnly />
        </div>
        <div className="form-field">
          <label htmlFor="time">Hora:</label>
          <input type="time" id="time" value="14:30" readOnly />
        </div>
        <div className="form-field">
          <label htmlFor="service">Servicio Solicitado:</label>
          <select id="service" value="Cambio de Aceite" readOnly>
            <option value="Cambio de Aceite">Cambio de Aceite</option>
          </select>
        </div>
      </div>

      {/* Botón Simulado */}
      <button className="submit-button" disabled>Enviar Solicitud</button>
    </div>
  );
}