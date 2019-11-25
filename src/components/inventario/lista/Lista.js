import React, {useEffect, useState, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cabecera from '../../cabecera/Cabecera'
import  {estados, sistemas} from './estados_sistemas'
import BusquedaFiltro from '../../busquedaFiltro/BusquedaFiltro'
import InfoCompleta from '../informacionCompleta/infoCompleta'
import '../../../scss/components/_components.inventario-lista.scss'


const Lista = ({guardarRutaMenu,  guardarEquipos, guardarTipoEquipo, tipoEquipo}) => {

    const [consultaEquipos, guardarConsultaEquipos] = useState('')
    const [equipos, guardarEquiposLista] = useState([])
    const [tipoBusqueda, guardarTipoBusqueda] = useState('General')
    const [infoCompletaModal, guardarInfoCompletaModal] = useState(false)
    const [idBusqueda, guardaridBusqueda]  = useState('')

    useEffect(() => {
    
        
        guardarRutaMenu('Inventario')

        const consultarEquipos = async () => {
            let busqueda = consultaEquipos !== ''? parseInt(consultaEquipos) : 1,
            tipo = tipoBusqueda === 'General'? 'none': tipoBusqueda.toLowerCase()
            const url = `http://localhost:8080/api/public/api/inventario/${tipoEquipo.toLowerCase()}/${busqueda}&${tipo}`
            const respuesta = await axios.get(url)
            guardarEquiposLista(respuesta.data)
            guardarEquipos(respuesta.data)
        }

        consultarEquipos()
        
        

      }, [guardarRutaMenu, guardarEquipos, tipoEquipo, consultaEquipos, tipoBusqueda])


      const infoComplete = (e) => {
        guardaridBusqueda(e.target.childNodes[0].data)
        guardarInfoCompletaModal(true)
      }


    return (

            <Fragment>
                <Cabecera 
                    guardarTipoEquipo = {guardarTipoEquipo}
                    tipoEquipo = {tipoEquipo}
                    tipoBusqueda = {tipoBusqueda}
                    consultaEquipos = {consultaEquipos}
                /> 
            <div className="o-layout-lista flex-c">
            <table  align="center">
                    <thead>
                        <tr>
                        <td align="center">ID</td>
                        <td align="center">Asignacion</td>
                        <td align="center">Hidrologica</td>
                        <td align="center">Modelo</td>
                        <td align="center">Marca</td>
                        </tr>
                        </thead>
                    
                    <tbody>
                            {equipos?equipos.map(equipo => {
                                return (
                                <tr align="center" key = {equipo.id}>
                                        <td>
                                            <Link 
                                                to= "#"
                                                className="text-white colorTwo p-b-10 p-t-10 p-r-25 p-l-25 border-radius-left border-radius-right" 
                                                onClick = {infoComplete}
                                                >
                                                {equipo.id}
                                            </Link>
                                    </td>

                            <td>{equipo.stock === 0 ? 'No Asignado': 'Asignado'}</td>

                            <td>{equipo.Nombre}</td>

                            <td>{equipo.Modelo}</td>

                            <td>{equipo.Marca}</td>

                                </tr>
                        )}) :null}
                            </tbody>
                </table>
                
                <div className="container-lista-select">
                    <BusquedaFiltro
                    guardarConsultaEquipos = {guardarConsultaEquipos}
                    busquedasEstado = {estados}
                    busquedaHidrologica = {sistemas}
                    guardarTipoBusqueda = {guardarTipoBusqueda}
                    />
                

                    
                </div> 
            </div>
            {infoCompletaModal? <InfoCompleta id ={idBusqueda} guardarInfoCompletaModal = {guardarInfoCompletaModal}/>:null}
        </Fragment>
    );
}

export default Lista;
