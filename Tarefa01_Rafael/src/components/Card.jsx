import { lutadores } from "./personagens.js"

export default function Card() {
    let listaLutadores = lutadores.map(lutador =>
        <figure key={lutador.id}>
            <img src={lutador.imagem} alt="Personagem jogável"/>
            <figcaption>{lutador.nome}</figcaption>
        </figure>);

    return (
        <>
        {listaLutadores}
        </>
    )
}