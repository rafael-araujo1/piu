import "./Escopo.css"

function Escopo () {
    const label = "Clique aqui!"
    function handleClick() {
        return(
            alert("Alerta!!!")
        )
    }
    return(
        <>
        <div>
        <h2>Teste de componentes</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, reprehenderit qui nisi quis quod a veritatis animi inventore minus fugit cum impedit error dolore doloremque saepe pariatur itaque facilis. Quia?</p>
        </div>
        <div>
            <button onClick={() =>console.log("Você clicou no botão!")}>{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo