export const buscarSeriePorNombre = async(name) => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
    if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status)
    }
    return response.json()
}

export const buscarSeriePorId = async(id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status)
    }
    return response.json()
}