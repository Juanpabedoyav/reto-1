import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import { Formulario } from '../components/Formulario';
import { Lista } from '../components/Lista';
import { NavBar } from '../components/NavBar';

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route exact path="/Registro" element={<Formulario/>}/>
                    <Route exact path="/Lista" element={<Lista/>}/>
              
                </Routes>
            </BrowserRouter>
        </div>
    )
}