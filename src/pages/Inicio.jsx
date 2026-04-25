import { buscarSeriePorNombre } from '../services/tvmazeService'
import { useState } from 'react'
import SerieCard from '../components/SerieCard'

function Inicio() {
  const [series, setSeries] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const buscarHandler = (e) => {
    e.preventDefault()
    if (busqueda) {
      setError(false)
      setSeries([])
      setIsLoading(true)
      buscarSeriePorNombre(busqueda)
      .then(data => {
        if (data.length === 0) throw new Error('Sin resultados')
        setSeries(data)
        setIsLoading(false)
      })
      .catch(() => {
        setError(true)
        setIsLoading(false)
      })
    }
  }

  return (
        <div>
            <label htmlFor='buscador'>
                <input className='buscador' type='text' placeholder='Busca una serie' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && buscarHandler(e)}></input>
            </label>
            <button onClick={buscarHandler}>Buscar</button>

            {isLoading && <h2>Cargando...</h2>}
            {error && <h2>Series no encontradas</h2>}

            {series.length > 0 && series.map(serie => (
              <SerieCard key={serie.show.id} id={serie.show.id} img={serie.show.image?.medium} name={serie.show.name}/>
            ))}
        </div>
    )
}

export default Inicio