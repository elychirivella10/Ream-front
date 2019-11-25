import React, {useState} from 'react'
import { Map, TileLayer, CircleMarker} from 'react-leaflet'
import {estados} from '../inventario/lista/estados_sistemas'



const Mapa = ({consultaEquipos, latitud, longitud})=> {
  const [datos, guardarDatos] = useState({
      lat:6.6181996,
      lng:-65.6477033,
      zoom:5.5,
      control: false,
      marker:false
    })

          let position = [datos.lat, datos.lng]
          let circle = null
          if (latitud) {
            position = [latitud, longitud]
            circle = <CircleMarker
            center = {[latitud, longitud]}
            radius={20 * Math.log(22443000 / 10000000)}
            fillOpacity={0.3} 
            />

          }else if (consultaEquipos){
            let estado = consultaEquipos !== '' ?estados.filter(estado => parseInt(estado.id) === parseInt(consultaEquipos) ):null
            estado = estado?estado[0]:null
            position = [estado.latitud, estado.longitud]
          }
            return (
              
              <Map center={position} zoom={latitud?12:datos.zoom} zoomControl={datos.control}>
              <TileLayer
                url = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
	              maxZoom = {19}
              />
              {circle}
            </Map>
             
            );
          }

        export default Mapa
    
  
