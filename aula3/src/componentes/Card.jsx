export default function Card() {
    let link = "https://sm.ign.com/ign_br/screenshot/default/botw-bg_kezj.jpg"

    return(
        <>
        <div>
            <figure>
                <img src={link} alt="link"/>
                <figcaption>Link</figcaption>
            </figure>
        </div>
        </>
    )
}