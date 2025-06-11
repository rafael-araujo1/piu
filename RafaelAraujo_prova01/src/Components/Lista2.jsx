import { carros } from "./dados_carros";


export default function Lista2 () {

    // Variável de verificação: servirá de base para a seleção dos itens a serem renderizados.
    //     Irá percorrer o array presente em dados_carros.js (carros) e selecionará, através
    //     do filter, apenas aqueles que foram lançados a partir de 2020.

    const carros2019 = carros.filter(carro =>
        carro.ano > 2019);

        // Variavel de armazenamento: servirá de base para a renderização dos itens
        //     Já tendo sido feita a filtragem dos elementos, através do map, cada um será salvo dentro de um
        //     elemento li, para então serem renderizados.

    const listaCarros2019 = carros2019.map(carro =>
        <li>{carro.modelo}: {carro.ano}</li>);

    return (
        <div>
            <h1>Carros lançados a partir de 2020</h1>

            {/* Lista não ordenada: elemento pai dos elementos li definidos anteriormente
                Todos os itens presentes em listaCarros2019 serão renderizados no elemento ul abaixo */}

            <ul>
                {listaCarros2019}
            </ul>
        </div>
    )
}