import { useState } from "react"

export default function ChangeBC () {

    let [isDark, setIsDark] = useState(false);

    if (isDark) {
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "white"
    }

    return (
        <>
        <h1>Oi</h1>
        <button onClick={() => setIsDark(!isDark)}>Trocar background</button>
        </>
    )
}