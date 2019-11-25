import React, {useState} from 'react';
import filtrarBusqueda from './estados.png'

const BusquedaFiltro = ({busquedasEstado, busquedaHidrologica, guardarConsultaEquipos, guardarTipoBusqueda}) => {

    const [busqueda, guardarBusqueda] = useState('')

    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
             [e.target.name]: e.target.value
          })
      }
   
       const handleSubmit = (e) => {
            e.preventDefault()
            guardarConsultaEquipos(busqueda.busqueda)  
            guardarTipoBusqueda(busqueda.filtrobusqueda)
         }

        const mostrar = (e) => {

            const divM = document.getElementById('divM')
            if (divM.classList[2] === "mostrar") {
                divM.classList.remove("mostrar")
            }else if(!divM.classList[2]){
                divM.classList.add("mostrar")
            }
            
        }
         
    return (
        <div className="o-layout-lista-select m-b-15" id = "divM">
            <label className="float-l" htmlFor="divM" id = "label" onClick = {() => {
            mostrar()
        }}>
            <img src={filtrarBusqueda} className="o-img-filtrar-busqueda p-b-15 p-r-15 p-t-10 p-l-15" alt="alt"/>
        </label>
                    <div className="c-lista-select   colorTwo  border-radius-left-50">
                        <form className = "o-layout-form-lista-select" 
                            onSubmit = {handleSubmit}
                        >
                            <input type="radio" name="filtrobusqueda" id="" value="Estado" onChange = {handleChange}/>
                            <input type="radio" name="filtrobusqueda" id="" value="Hidrologica" onChange = {handleChange}/>

                            <div className="">
                                        <label htmlFor="busqueda"></label>
                                        <select 
                                    onChange={handleChange}
                                        name="busqueda"
                                        id="busqueda"
                                        className=""
                                        >
                                            <option value="0">--- Seleccione un elemento---</option>
                                            {busqueda.filtrobusqueda === 'Estado' ?busquedasEstado.map(busqueda=> (
                                                <option value={parseInt(busqueda.id)} key={parseInt(busqueda.id)} data-uk-form-select>{busqueda.nombre}</option>
                                            )):null}
                                            {busqueda.filtrobusqueda === 'Hidrologica' ?busquedaHidrologica.map(busqueda=> (
                                                <option value={parseInt(busqueda.id)} key={parseInt(busqueda.id)} data-uk-form-select>{busqueda.nombre}</option>
                                            )):null}
                                            
                                        </select>

                                        <input type="submit" value="enviar" className=""/>
                                    </div>

                            
                        </form>
                    </div>
                </div> 
    );
}

export default BusquedaFiltro;
