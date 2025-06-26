import "./Form.css"
import { useState } from "react"

export default function Form() {
    let [tarefa, setTarefa] = useState("");
    let [lista, setLista] = useState([]);

    let handleSubmit = (e) => {
        e.preventDefault()

        setLista([...lista, tarefa])
        setTarefa([])  
    };

    let handleClear = () => {
        setLista([])
    };

    return(
        <div>
            <h1>Tarefas</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tarefa">
                    <input type="text" name="tarefa" id="" placeholder="Ex.: Fazer dever de casa"
                    onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>
                <br/><br/>
                <input type="submit"/>
            </form>
            <br />

            <button onClick={handleClear}>Limpar Tarefas</button>
            <ul>
                {lista.map((item) => 
                    <li>{item}</li>
                )} 
            </ul>
        </div>
    )
}