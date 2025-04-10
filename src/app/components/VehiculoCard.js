import { FaCar, FaTruck, FaMotorcycle } from 'react-icons/fa';
import styles from '../page.css'

const VehiculoCard = ({ vehicle }) => (
  <div className="vehicle-card">
    <div className="vehicle-icon">
      {vehicle.icon}
    </div>
    <div className="vehicle-info">
      <h3 className="model">{vehicle.model}</h3>
      <div className="plate">{vehicle.plate}</div>
    </div>
  </div>
);

export default function VehiculoList() {
  const vehicles = [
    {
      id: 1,
      icon: <FaCar size={48} color="#FFD700" />,
      model: "Toyota Corolla",
      plate: "AG123BC"
    }
  ];

  return (
    <div className="vehicle-list">
      {vehicles.map(vehicle => (
        <VehiculoCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}