import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { buscarSeriePorId } from "../services/tvmazeService"

function Serie() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [serie, setSerie] = useState(null)

    useEffect(() => {
        buscarSeriePorId(id)
        .then(data => {
            setSerie(data)
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
    }, [id])

    if (error) return <h2>Serie no encontrada</h2>
    if (isLoading) return <h2>Cargando...</h2>
    
    return (
        <div>
            <img src={serie.image?.medium} alt={serie.name}/>
            <h2>{serie.name}</h2>
            <ul>
                {serie.genres.map((genero, index) => (
                    <li key={index}>{genero}</li>
                ))}
            </ul>
            <p>Rating: {serie.rating.average}</p>
            <p dangerouslySetInnerHTML={{ __html: serie.summary }} />
        </div>
    )
}

export default Serie