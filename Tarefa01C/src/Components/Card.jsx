export default function Card({ lutador }) {
  return (
    <figure>
      <img src={lutador.imagem} alt="Personagem jogável" />
      <figcaption>{lutador.nome}</figcaption>
    </figure>
  );
}