import Card from "./Card"

export default function Galeria() {
    return (
        <>
        <div className="galeria" style={{color: "orange"}}>
            <h2>Galeria de Lutadores</h2>
            <div className="galeria-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="galeria-container-second-row">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        </>
    )
}