import { useState } from "react"

export default function Tema() {

    let [isDark, setIsDark] = useState(false);
    let corPadrao;
    let bcPadrao;

    if (isDark) {
        document.body.style.backgroundColor = "#000000";
        bcPadrao = "#000000";
        corPadrao = "#ffffff";
        document.body.style.transition = "0.3s";
    } else {
        document.body.style.backgroundColor = "#ffffff";
        bcPadrao = "#ffffff";
        corPadrao = "#000000";
        document.body.style.transition = "0.3s";
    }

    return (
        <>
            <button onClick={() => setIsDark(!isDark)} style={{color: bcPadrao, backgroundColor: corPadrao}}>Trocar Modo</button>
        </>
    )
}