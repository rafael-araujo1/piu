import { useState } from "react";
import "./Contador.css";

export default function Contador() {

    // Variável auxiliar: base para o contador
    //     Através dela, será possível manipular o estado do contador; com o setNum,
    //     o valor de num poderá ser alterado. 

    const [num, setNum] = useState(0);

    return (
        <div>
            <h1>Contador</h1>
            <h2>Valor atual: {num}</h2>

            {/* Botões de manipulação: responsáveis pela a alteração de estado
                Ao serem clicados, realizam, respectivamente, o incremento e o decremento de num, com
                base na variável setNum */}

            <button onClick={ ()=> setNum((num) => num +1)} className="btn1" style={{width: (num > 10)?"15vw":"5vw"}}>+</button>
            <button onClick={ ()=> setNum((num) => num -1)} className="btn2" style={{width: (num < 0)?"1vw":"5vw"}}>-</button>
            <hr />
        </div>
    )
}