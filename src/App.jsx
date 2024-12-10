import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Salas from './pages/Salas';
import Reservas from './pages/Reservas';
import Perfil from './pages/Perfil';
import Registro from './pages/Registro';

function App(){
  return (
    <div className="app">
      <Header/>
      <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }  />
        <Route path="/reservas" element={<Reservas />}/>
        <Route path="/salas" element={ <Salas/> } />
        <Route path="/perfil"element={ <Perfil /> }/>
        <Route path="/registro" element={<Registro/> } />
      </Routes>
    </BrowserRouter>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
