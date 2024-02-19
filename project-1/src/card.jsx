import "./card.css"

function Card({data}){
    return(
        <div className="card">
        <div className="card-bg">
            <h2>290 x 180px</h2>
        </div>
        <div className="content mt">
            <h3>Indonectetus facilis</h3>
            <p>{data}</p>
        </div>
        <div className="btn mt">
            <button>Read More</button>
            </div>
        </div>
    )
}

export default Card;