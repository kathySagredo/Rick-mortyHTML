import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaPersonajes from "./Componentes/ListaPersonajes";
import DetallePersonaje from "./Componentes/DetallePersonaje";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaPersonajes />} />
        <Route path="/personaje/:id" element={<DetallePersonaje />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
