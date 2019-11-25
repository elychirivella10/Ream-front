import React, {Fragment} from 'react';
import './cabecera.scss'
import {Link} from 'react-router-dom'
import Mapa from '../mapa/Mapa'



const Cabecera =({guardarTipoEquipo,  tipoEquipo,  tipoBusqueda, consultaEquipos}) =>{

    const handleChange = (e) =>{
        guardarTipoEquipo(e.target.childNodes[0].data)
    } 

    return (
        <Fragment>
        <header className = "o-layout-header">

            <div className="o-layout-container-inf-equipos">
                <div className="o-layout-inf-equipos">
                    <div className="o-layout-header-mapa p-l-10">
                        <Mapa
                         consultaEquipos = {consultaEquipos}
                        /> 
                    </div>
                    <div className="c-inf-equipos text-white">
                        <h2>{tipoEquipo}</h2>
                        <p>{ tipoBusqueda}</p>      
                    </div>
                </div>
            </div>
                
               <nav className="o-layout-navegation-header-static">
                    <ul className="dis-flex">

                        <li className = "m-l-15">
                    <Link
                        to="#"
                        className = "font-enlaces p-l-18 p-b-7 p-t-7 p-r-18   border-radius-50 text-white list-hover"
                        onClick = {handleChange}
                        name = "Abastecimiento"
                    >
                    Motores
                    </Link>
                    </li>
                
                    <li className = "m-l-15">
                    <Link
                        to="#"
                        className= "font-enlaces p-l-18 p-b-7 p-t-7 p-r-18  border-radius-50 text-white list-hover"
                        onClick = {handleChange}
                        name = "SistemaHidrico"
                    >
                    Bombas
                    </Link>
                    </li>

                    <li className = "m-l-15">
                    <Link
                        to="#"
                        className= "font-enlaces p-l-18 p-b-7 p-t-7 p-r-18 border-radius-50   text-white list-hover"
                        onClick = {handleChange}
                        name = "Inventario"
                    >
                    Valvulas
                    </Link>
                    </li>

                    <li className = "m-l-15">
                    <Link
                        to="#"
                        className= "font-enlaces p-l-18 p-b-7 p-t-7 p-r-18 border-radius-50   text-white list-hover"
                        onClick = {handleChange}
                        name = "Inventario"
                    >
                    Transformadores
                    </Link>
                    </li>
                    </ul>

            
        
    </nav>
        </header>

        </Fragment>
    );

}

export default Cabecera;
