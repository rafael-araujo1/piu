import { useState } from "react"

export default function Change() {

    let [valor, setValor] = useState(0)
    let [valor2, setValo2] = useState(1)

    return (
        <div>
            <button onClick={() => setValor(valor+valor2)}>{valor} Cliques</button>
        </div>
    )
}