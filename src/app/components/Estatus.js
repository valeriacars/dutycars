
export default function Estatus() {
  return (
    <div className="vehicle-status-static">
      <h2 className="status-title">Estado del Vehículo</h2>

      {/* Fecha de Ingreso */}
      <div className="status-section">
        <h3 className="section-title">Información General</h3>
        <div className="status-item">
          <span className="status-label">Fecha de Ingreso:</span>
          <span className="status-value">15/10/2023</span>
        </div>
      </div>

      {/* Arreglos Pendientes */}
      <div className="status-section">
        <h3 className="section-title">Arreglos Pendientes</h3>
        <div className="status-item">
          <span className="status-label">Pendiente 1:</span>
          <span className="status-value pending">Reparación de frenos</span>
        </div>
        <div className="status-item">
          <span className="status-label">Pendiente 2:</span>
          <span className="status-value pending">Cambio de aceite</span>
        </div>
        <div className="status-item">
          <span className="status-label">Pendiente 3:</span>
          <span className="status-value pending">Inspección eléctrica</span>
        </div>
      </div>

      {/* Arreglos Realizados */}
      <div className="status-section">
        <h3 className="section-title">Arreglos Realizados</h3>
        <div className="status-item">
          <span className="status-label">Completado 1:</span>
          <span className="status-value completed">Alineación de ruedas</span>
        </div>
        <div className="status-item">
          <span className="status-label">Completado 2:</span>
          <span className="status-value completed">Cambio de bujías</span>
        </div>
      </div>
    </div>
  );
}