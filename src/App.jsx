import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Salas from './pages/Salas';
import Reservas from './pages/Reservas';
import Perfil from './pages/Perfil';

function App(){
  return (
    <div className="app">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/salsa' element={<Salas/>}></Route>
          <Route path='/reservas' element={<Reservas/>}></Route>
          <Route path='/perfil' element={<Perfil/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
