import { carros } from "./dados_carros";


export default function Lista1 () {
    
    // Definição da variável listaCarros: servirá como base para a renderização.
    //     Faz um mapeamento do array presente em dados_carros.js (carros) e para cada item presente
    //     irá inserir os seus dados (modelo e cor) num elemento li. A renderização ocorre por meio do
    //     map, com base numa chave (key), neste caso, o id. 

    const listaCarros = carros.map(carro =>
        <li key={carro.id}>{carro.modelo}: {carro.cor}</li>);

    return (
        <div>
            <h1>Carros do sistema</h1>

            {/* Lista não ordenada: elemento pai dos elementos li definidos anteriormente.
                Todos os itens presentes em listaCarros serão inseridos dentro do elemento ul
                e, dessa forma, renderizados na tela  */}

            <ul>
                {listaCarros}
            </ul>
            <hr />
        </div>
    )
}