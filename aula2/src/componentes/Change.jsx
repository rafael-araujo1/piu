import { useState } from "react"

export default function Change() {

    let [valor, setValor] = useState(0)
    // let [valor2, setValo2] = useState(1)

    return (
        <div>
            <h1>CONTADOR DE CLIQUES</h1>
            <button onClick={() => setValor(valor+1)}>{valor} Cliques</button>
        </div>
    )
}