import "./Menu.css";
import { lutadores } from "./lista";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const listaLutadores = lutadores.map(lutador =>
    <li key={lutador.id} className="dropdown-item">
      {lutador.nome}
    </li>
  );

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
        Abrir Menu
      </button>
      <ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
        {listaLutadores}
      </ul>
    </div>
  );
}