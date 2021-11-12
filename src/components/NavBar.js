  import React from 'react';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <NavLink  to="">Inicio</NavLink>
                <NavLink  to="/Registro">Registro</NavLink>
                <NavLink  to="/Lista">Listado</NavLink>
                </nav>
            </div>
            <hr/>
        </div>
    )
}