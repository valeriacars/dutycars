import style from '../page.css';

export default function Presupuesto() {
  return (
    <div className="vehicle-budget-static">
      <h2 className="budget-title">Presupuesto Actual del Vehículo</h2>

      {/* Detalles del Presupuesto */}
      <div className="budget-section">
        <div className="budget-item">
          <span className="item-label">Mano de Obra:</span>
          <span className="item-value">$300.00</span>
        </div>
        <div className="budget-item">
          <span className="item-label">Repuestos:</span>
          <span className="item-value">$500.00</span>
        </div>
        <div className="budget-item">
          <span className="item-label">Impuestos (16%):</span>
          <span className="item-value">$128.00</span>
        </div>
        <div className="budget-item total">
          <span className="item-label">Total:</span>
          <span className="item-value">$928.00</span>
        </div>
      </div>

      {/* Nota Adicional */}
      <div className="budget-note">
        <p>Este presupuesto es una estimación y puede variar dependiendo de los servicios adicionales requeridos.</p>
      </div>
    </div>
  );
}