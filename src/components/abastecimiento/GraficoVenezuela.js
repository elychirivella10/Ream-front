import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

export default class GraficoVenezuela extends Component {
    state = {
        negativo:70,
        positivo:30
    }

    render() {
        let negativo=''
        let positivo=''
        if (this.props.Valores) {
            negativo=this.props.Valores[0].porcentajeNeg
            positivo=this.props.Valores[0].porcentajePos

        }

        let date =[positivo?positivo:this.state.positivo, negativo?negativo:this.state.negativo]
        
        const data ={
            labels: ['Si', 'No'],
            datasets: [{
                label:'hola',
                data: [...date],
                backgroundColor: [
                    'rgba(25, 41, 59, 0.5)',
                    'rgba(15, 111, 255, 0.747)'
                ],
                borderColor: [
                    '#19293B',
                    'rgb(15, 111, 255)'
                ],
                borderWidth: 2
            }]
        }
    
        return (
            <div className="o-layout-grafico c-gradicos">
            <Doughnut
                data={data}
                width={100}
                height={10}
                options={{ maintainAspectRatio: false,
                    title:{
                        display: true,
                        text: 'Abastecimiento a Nivel Nacional'
                    }
                }}
                />
            </div>
        )
    }
}
