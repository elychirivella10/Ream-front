import React, {useState,useEffect} from 'react';
import Mapa from '../../mapa/Mapa'
import axios from 'axios'
import salir from './close.png'

const InfoCompleta = ({id, guardarInfoCompletaModal}) => {

    const [info, guardarInfo] = useState({})

    useEffect(() => {
        
        const consultar = async () => {
            const tipo = id.slice(0, 2)=== 'MT'?'motor':null
            const url = `http://localhost:8080/api/public/api/perfilequipo/${id}&${tipo}`
            const respuesta =  await axios.get(url)
            console.log(respuesta.data)
            guardarInfo(respuesta.data)
        }

        consultar()

    }, [id]);

    return (
        <div className = "sizefull left-0 top-0 flex-c-m fondo-trans pos-fixed z-index padding-5">
            <div className = "sizefull pos-relative">

                <Mapa 
                latitud = {info.lat}
                longitud = {info.lng}
                />
                <div className = "pos-absolute left-0 z-index-1000 padding-3 c-info-map">
                    <section className = "fondo-trans c-section-info-completa p-t-10 p-b-10 p-l-10 p-r-10">
                        <ul>
                    <li className = "m-t-14 m-b-1">ID de Motor: {info.id}</li>
                        </ul>
                    </section>
                    <section className = "fondo-trans c-section-info-completa p-t-10 p-b-10 p-l-10 p-r-10">
                        <ul>
                            <li className = "m-t-14 m-b-1">Codigo: {info.Codigo_Motor}</li>
                            <li className = "m-t-14 m-b-1">Estado: {info.nombre}</li>
                            <li className = "m-t-14 m-b-1">Sistema Hidrico: {info.Nombre}</li>
                            <li className = "m-t-14 m-b-1">Asignacion: {info.Nombre_De_Estacion_De_Bombeo}</li>
                            <li className = "m-t-14 m-b-1">Sistema: {info.Nombre_Sistema}</li>
                            <li className = "m-t-14 m-b-1">Marca: {info.Marca}</li>
                            
                        </ul>
                    </section>
                    <section className = "fondo-trans c-section-info-completa p-t-10 p-b-10 p-l-10 p-r-10">
                    <ul>
                            <li className = "m-t-14 m-b-1">Potencia Nominal Motor HP: {info.Potencia_Nominal_Motor_HP}</li>
                            <li className = "m-t-14 m-b-1">Potencia Nominal Motor KW: {info.Potencia_Nominal_Motor_KW}</li>
                            <li className = "m-t-14 m-b-1">Fases: {info.Fases}</li>
                            <li className = "m-t-14 m-b-1">Frecuencia: {info.Frecuencia}</li>
                            <li className = "m-t-14 m-b-1">Eficacia: {info.Eficacia}</li>
                            <li className = "m-t-14 m-b-1">Corriente Nominal De Operacion: {info.Corriente_Nominal_De_Operacion}</li>
                            <li className = "m-t-14 m-b-1">Velocidad Nominal: {info.Velocidad_Nominal}</li>
                        </ul>
                    </section>
                </div>
                <div className = "pos-absolute position-10 z-index">
                    <a href="#" onClick = {() => {
                        guardarInfoCompletaModal(false)
                    }}>
                        <img src={salir} alt="salir" className = "img-20"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InfoCompleta;
