import { useState } from "react";
import Change from "./Change";
import Titulo from "./Titulo";

export default function Conditional() {
    let [islogged, setIslogged] = useState(false);

    return(
        <div>
            <button onClick={() => setIslogged(true)}>Logar</button>
        </div>
    )
}