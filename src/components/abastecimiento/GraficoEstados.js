import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class GraficoEstados extends Component {

    state={
        labels:['Miranda', 'Caracas', 'Amazonas', 'Aragua', 'Zulia', 'Merida', 'Vargas'],
        data:[65, 59, 80, 81, 56, 55, 50]
    }
    render() {
        
        let labels=[]
        let datos=[]
        let estados=''
        if (this.props.Valores) {

            this.props.Valores.map(estado =>{
                estados = estado.filter(estado=>estado.total !==0)
               return estados
                
        })
        
        estados.map(estado =>(
            labels.push(estado.estado), datos.push(estado.total)
        ))
    }
    
    labels = this.props.Valores?labels:this.state.labels
    datos = this.props.Valores?datos:this.state.data

        
        
        const  data ={
            labels: [...labels],
            datasets: [
              {
                label: 'Escuelas encuestadadas',
                backgroundColor: 'rgba(15, 111, 255, 0.747)',
                borderColor: 'rgb(15, 111, 255)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(80, 129, 185, 0.9)',
                hoverBorderColor: 'rgb(80, 129, 185, 0.5)',
                data: [...datos]
              }
            ]
        }
    
        return (
            <div className="o-layout-grafico c-gradicos">
            <Bar
                data={data}
                width={100}
                height={10}
                options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}