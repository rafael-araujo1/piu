import "./Segredo.css"

function Segredo () {
    return (
        <>
        <div>
            <h1 onCopy={() => alert("42")}>Quer ouvir um segredo?</h1>
            <button onClick={() => alert("É segredo!")} className="btnSegredo">Saber agora</button>
        </div>
        </>
    )
}

export default Segredo