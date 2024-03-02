import './card.css'

interface CardProsps {
    price: number,
    title: string,
    image: string

}

export function Card(props: CardProsps){
    return(
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p><b>Valors:</b> R${props.price},00</p>
        </div>
    )
}