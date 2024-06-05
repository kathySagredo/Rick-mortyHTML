import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ListaPersonajes() {
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(respuesta => respuesta.json())
            .then(datos => setPersonajes(datos.results));

    }, []);

    return (
        <div className='row'>
                {personajes.map(personaje => (
                    <div className='card col-md-4 mb-4' key={personaje.id}>
                    <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                    <div className="card-body">
                        <h5 className="card-title">{personaje.name}</h5>
                        <Link to={`/personaje/${personaje.id}`} className="btn btn-primary">Detalles</Link>
                    </div>
                    </div>
                ))} 
        </div>
    )
}

export default ListaPersonajes

