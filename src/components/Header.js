import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className="header">
            <nav>
                <ul>
                    <li> <Link to='/'> Inicio </Link> </li>
                    <li> <Link to='/salas'> Salas </Link> </li>
                    <li> <Link to='/reservas'> Reservas </Link> </li>
                    <li> <Link to='/perfil'> Perfil </Link> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
