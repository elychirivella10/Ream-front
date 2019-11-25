import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export default class AbastecimientoEstado  extends Component {
  state ={
    labels:['Cargando'],
    data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    GraficoE:''
  }

  handleChange = (e) => {
        
        
    this.setState({
      ...this.state,
     [e.target.name]:  e.target.checked || e.target.value
        
    }) 
    
    
    } 
  
    render() {
      let labels=[]
        let datos=[]
        let estados=''
        if (this.props.Valores) {

            this.props.Valores.map(estado =>{
                estados = estado.filter(estado=>estado.estado === this.state.GraficoE)
               return estados
                
        })
        
        estados.map(estado =>(
            datos.push(estado.pos)
        ))
    }

    labels = this.props.Valores?['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre']:this.state.labels
    datos = this.props.Valores?datos:this.state.data

        const data = {
            labels: [...labels],
            datasets: [
              {
                label: 'Abastecimiento',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(15, 111, 255, 0.747)',
                borderColor: 'rgb(15, 111, 255)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(15, 111, 255)',
                pointBackgroundColor: 'rgba(15, 111, 255, 0.747)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [0, 10, 0, 5, 2, 15, 30, 0, ...datos, ...datos]
              }
            ]
          }

          let estadoss=[]
          if (this.props.Valores) {
              this.props.Valores.map(estado =>{
                  estadoss = estado
                  return estadoss
          })
      }  
    
        return (
            <div className="o-layout-grafico o-layout-grafico-estado c-gradicos">
              <form>
                <select name="GraficoE" onChange={this.handleChange}>
                <option>Nacional</option>
                {estadoss.map(estado=>(
                    <option key={estado.estado} value={estado.estado}>{estado.estado}</option>
        ))}
                </select>
            </form>
            <Line
                data={data}
                width={100}
                height={10}
                options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}