import "./Form.css";
import { useState } from "react";

export default function Form() {
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefa.trim() === "") return;

        const novaTarefa = {
            texto: tarefa.trim(),
            status: "pendente",
        };

        setLista([...lista, novaTarefa]);
        setTarefa("");
    };

    const handleClear = () => {
        setLista([]);
    };

    const alterarStatus = (index, novoStatus) => {
        const novaLista = [...lista];
        novaLista[index].status = novoStatus;
        setLista(novaLista);
    };

    const ordenarPorOrdemAlfabetica = () => {
        const listaOrdenada = [...lista].sort((a, b) =>
            a.texto.localeCompare(b.texto)
        );
        setLista(listaOrdenada);
    };

    return (
        <div>
            <h1>TAREFAS</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tarefa">
                    <input
                        type="text" name="tarefa" id="tarefa" placeholder="Ex.: Fazer dever de casa"
                        onChange={(e) => setTarefa(e.target.value)} value={tarefa} />
                </label>
                <br /><br />
                <input type="submit" value="Adicionar" />
            </form>
            <br />
            <button onClick={handleClear}>Limpar Tarefas</button>{" "}
            <button onClick={ordenarPorOrdemAlfabetica}>Ordenar A-Z</button>

            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        <strong
                            className={
                                item.status === "realizada"
                                    ? "realizada"
                                    : item.status === "não realizada"
                                        ? "nao-realizada"
                                        : "pendente"
                            }
                        >
                            {item.texto}
                        </strong>
                        <em>Status: {item.status}</em>
                        <br />
                        <button onClick={() => alterarStatus(index, "realizada")}>
                            Marcar como Realizada
                        </button>
                        <button onClick={() => alterarStatus(index, "não realizada")}>
                            Marcar como Não Realizada
                        </button>
                        <button onClick={() => alterarStatus(index, "pendente")}>
                            Marcar como Pendente
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
