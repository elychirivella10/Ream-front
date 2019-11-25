import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Menu from './components/layout/Menu'
import Lista from './components/inventario/lista/Lista'
import Abastecimiento from './components/abastecimiento/Abastecimiento'
import Dashboard from './components/inventario/dashboard/Dashboard'
import Mapa from './components/abastecimiento/estadal/Mapa'
import IndividualMapa from './components/abastecimiento/individual/IndividualMapa'
import Logo from './components/logo/Logo'
import './scss/Style.scss'


function App() {

  // const [datosSession, guardarDatosSession] = useState(false)
  const [rutaMenu, guardarRutaMenu] = useState('')
  const [datosS, guardarDatosS] = useState(false)
  const [tipoEquipo, guardarTipoEquipo] = useState('Motores')
  const [equipos, guardarEquipos] = useState([])

  const session = (datos) => {
    console.log(datos);
    const {user, pass} = datos
    if (user === 'ely' && pass === '123') {
      localStorage.setItem('datos', JSON.stringify(datos.pass))
      
    }
  }

   const com = datosS ? <Route exact path="/"  render={ () => (
    <Home
      guardarRutaMenu = {guardarRutaMenu}
    />
) }/> : <Login fn={guardarDatosS}/>



  return (

    <Fragment>
        <div className="l-container">
        <Router>
          <Logo/>
          <Menu 
          rutaMenu = {rutaMenu}
          />
          <Switch>
              
              {<Route exact path="/"  render={ () => (
                        <Home
                          guardarRutaMenu = {guardarRutaMenu}
                        />
              ) }/>}

                <Route exact path="/inventario" render={ () => (
                          <Dashboard 
                            guardarRutaMenu = {guardarRutaMenu}
                          />
                  ) } /> 
                <Route exact path="/abastecimiento" render={ () => (
                          <Abastecimiento
                            guardarRutaMenu = {guardarRutaMenu}
                          />
                  ) } /> 
                <Route exact path="/inventario/lista" render={ () => (
                          <Lista
                            guardarRutaMenu = {guardarRutaMenu}
                            guardarEquipos = {guardarEquipos}
                            guardarTipoEquipo ={guardarTipoEquipo}
                            tipoEquipo = {tipoEquipo}
                          />
                  ) } />
                <Route exact path="/abastecimiento/estadal" render={ () => (
                          <Mapa
                          guardarRutaMenu = {guardarRutaMenu}
                        />
                  ) } />

                <Route exact path="/abastecimiento/individual" render={ () => (
                          <IndividualMapa
                          guardarRutaMenu = {guardarRutaMenu}
                        />
                  ) } />
               
          </Switch>
        </Router>
        </div>
      
    </Fragment>

  );
}

export default App;
