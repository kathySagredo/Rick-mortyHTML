import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function DetallePersonaje(){
const { id } = useParams()
const [detalles, setDetalles] = useState(null)

useEffect(()=>{

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(respuesta => respuesta.json())
    .then(datos => setDetalles(datos))
}, [id])

if(!detalles){
    return(
        <div>Loading...</div>
    )
}

return(
<div className="container my-5 mt-5">
            <h1>{detalles.name}</h1>
            <img src={detalles.image} alt={detalles.name} className="img-fluid" />
            <p>Status: {detalles.status}</p>
            <p>Species: {detalles.species}</p>
            <p>Gender: {detalles.gender}</p>
            <p>Origin: {detalles.origin.name}</p>
            <Link to={'/'} className="btn btn-primary mb-5">Volver</Link>
</div>
)

}

export default DetallePersonaje