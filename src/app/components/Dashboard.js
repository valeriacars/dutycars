import React, { useState } from 'react';
import Estatus from './Estatus'; // Importa el componente de Estatus
import Presupuesto from './Presupuesto'; // Importa el componente de Presupuesto
import Agendar from './Agendar'; // Importa el componente de Agendar
import Experiencia from './Experiencia'; // Importa el componente de Experiencia
import style from '../page.css'

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('estatus'); // Estado para controlar qué componente mostrar

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Menú</h2>
        <ul className="menu-list">
          <li
            className={`menu-item ${activeComponent === 'estatus' ? 'active' : ''}`}
            onClick={() => setActiveComponent('estatus')}
          >
            Estatus
          </li>
          <li
            className={`menu-item ${activeComponent === 'presupuesto' ? 'active' : ''}`}
            onClick={() => setActiveComponent('presupuesto')}
          >
            Presupuesto
          </li>
          <li
            className={`menu-item ${activeComponent === 'agendar' ? 'active' : ''}`}
            onClick={() => setActiveComponent('agendar')}
          >
            Agendar
          </li>
          <li
            className={`menu-item ${activeComponent === 'experiencia' ? 'active' : ''}`}
            onClick={() => setActiveComponent('experiencia')}
          >
            Experiencia
          </li>
        </ul>
      </aside>

      {/* Contenido Principal */}
      <main className="content">
        {activeComponent === 'estatus' && <Estatus />}
        {activeComponent === 'presupuesto' && <Presupuesto />}
        {activeComponent === 'agendar' && <Agendar />}
        {activeComponent === 'experiencia' && <Experiencia />}
      </main>
    </div>
  );
}