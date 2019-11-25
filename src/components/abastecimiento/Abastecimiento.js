import React, { Component, } from 'react'
import '../../scss/components/components.abastecimiento.scss'
import '../../scss/objets/objets.abastecimiento-layout.scss'
import GraficoVenezuela from './GraficoVenezuela'
import GraficoEstados from './GraficoEstados'
import AbastecimientoEstado from './AbastecimientoEstado'





export default class Abastecimiento extends Component {
  state={

  }

 

  obtenerdatos= async (url, url2) =>{
    const datos = await fetch(url)
    const newdatos = await datos.json()
    const datos2 = await fetch(url2)
    const newdatos2 = await datos2.json()
    this.setState({
      Nacional:[newdatos],
      Estados:[newdatos2]
      
    })
  }

  componentDidMount(){
    this.obtenerdatos('http://localhost:8080/ajax/mandar/estadisticaN.php', 'http://localhost:8080/ajax/mandar/estadisticaE.php')

    const enviarRuta = () => {
      this.props.guardarRutaMenu('Abastecimiento')
    }

    enviarRuta()
  }

  render() {
    return (

        <div className = "flex-c-m h-full-vh w-full">
          <div className="o-layout-container ">
              <GraficoVenezuela
              Valores = {this.state.Nacional}
              />

              <GraficoEstados
              Valores = {this.state.Estados}
              />

              
              
              <AbastecimientoEstado
              Valores = {this.state.Estados}
              />
            </div>
          </div>
      
    )
  }
}