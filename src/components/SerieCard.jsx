import { Link } from "react-router-dom"

function SerieCard({ img, name, id }) {

    return (
        <div>
            <Link to={`/serie/${id}`}>
                <img src={img} alt={name} />
                <p>{name}</p>
            </Link>
        </div>
    )
}

export default SerieCard