export default function Props(props) {
    return (
        <>
            <div>
                <h1>Testando Props</h1>
                <p>O nome {props.nome} foi enviado via props</p>
                <p>{props.newname}</p>
            </div>
        </>
    )
}