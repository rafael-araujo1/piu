import Card from "./Card";
import { lutadores } from "./personagens.js";
import "./Galeria.css";

export default function Galeria() {
  // Divida os lutadores
  const primeiraLinha = lutadores.slice(0, 5); // cards 0 a 4
  const segundaLinha = lutadores.slice(5);     // cards 5 a 7

  return (
    <div className="galeria" style={{color: "yellow"}}>
      <h1>Choose your fighter</h1>

      {/* Primeira linha */}
      <div className="galeria-container">
        {primeiraLinha.map(lutador => (
          <Card key={lutador.id} lutador={lutador} />
        ))}
      </div>

      {/* Segunda linha com 5 colunas, mas só preenche 2, 3 e 4 */}
      <div className="galeria-container segunda-linha">
        <div className="galeria-spacer" />
        {segundaLinha.map(lutador => (
          <Card key={lutador.id} lutador={lutador} />
        ))}
        <div className="galeria-spacer" />
      </div>
    </div>
  );
}