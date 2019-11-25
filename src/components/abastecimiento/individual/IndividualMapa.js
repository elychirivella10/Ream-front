import React, { Component } from 'react'
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet'

export default class IndividualMapa extends Component {
  state = {
      lat:6.6181996,
      lng:-65.6477033,
    zoom:5.5,
    control: false,
    marker:false,
    colegios:[]
  }      


obtenerdatos = async () =>{
  const url = 'http://localhost:8080/ajax/mandar/colegios.php'
  const respuesta = await fetch(url)
  const datos = await respuesta.json()
  console.log(datos);
  this.setState({
    ...this.colegios,
    colegios :datos
  })
}

cambiarDatos = (datos) =>{
return parseInt(datos)
}

componentDidMount(){
  this.obtenerdatos()

  const enviarRuta = () => {
    this.props.guardarRutaMenu('Abastecimiento')
  }

  enviarRuta()
}

        render() {
         const position = [this.state.lat, this.state.lng]
         const {zoom} = this.state
            return (
              
  
              <Map center={position} zoom={zoom} zoomControl={this.state.control}>
              <TileLayer
                url = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
	            maxZoom = {19}
              />
              {this.state.colegios.map(colegio => (
                <CircleMarker key={colegio.Id} center={[colegio.Coordenadas.Latitud, colegio.Coordenadas.Longitud]}  radius={20 * Math.log(18443000 / 10000000)}
                fillOpacity={0.2} 
                >
                <Popup>
                <div>{ colegio.Nombre }</div>
                <div>L:{ this.cambiarDatos(colegio.Lunes)? 'Si': 'No' }</div>
                <div>M:{ this.cambiarDatos(colegio.Martes)? 'Si': 'No' }</div>
                <div>M:{ this.cambiarDatos(colegio.Miercoles)? 'Si': 'No' }</div>
                <div>J:{ this.cambiarDatos(colegio.Jueves)? 'Si': 'No' }</div>
                <div>V:{ this.cambiarDatos(colegio.Viernes)? 'Si': 'No' }</div>
                <div>S:{ this.cambiarDatos(colegio.Sabado)? 'Si': 'No' }</div>
                <div>D:{ this.cambiarDatos(colegio.Domingo)? 'Si': 'No' }</div>
                </Popup>
              </CircleMarker>
              ))}
            </Map>
            );
          }
        }
    
  