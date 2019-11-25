import React from 'react';
import './menu.scss'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import  inventario from './inventarioMap.png'
import  abastecimiento from './abastecimientoMap.png'
import  mapMenu from './mapMenu.png'
import  logout from './logoutMap.png'
import {menuAbastecimiento, menuInventario, menuHome} from './menurutas'



const Menu = ({rutaMenu}) => {


	let rutas = ''

	switch (rutaMenu) {
	  case false || 'Home':
		rutas = menuHome
		break;
	  case 'Abastecimiento':
		rutas = menuAbastecimiento
		break;
	  case 'Sistema Hidrico':
		rutas = menuInventario
		break;
	  case 'Inventario':
		rutas = menuInventario
		break;
	
	  default:
		break;
	}

	let rutaIMG = ''
	
	switch (rutaMenu) {
		case 'Inventario':
			rutaIMG = inventario
			break;
		case 'Abastecimiento':
			rutaIMG = abastecimiento
			break;
		case 'Sistema Hidrico':
			rutaIMG = mapMenu
			break;
		case 'Home':
			rutaIMG = mapMenu
			break;
	
		default:
			break;
	}
	
	const cerrar = () => {
		localStorage.removeItem('datos')
	  }
	  
    return (
        <div className="o-layout-menu-container">
		<div className="o-layout-header-menu colorTwo">
			<Link to="/" className="c-home-menu">
				<div className="c-menu-logo">
					<img className="c-logo" src={rutaIMG} alt="logo"/>
				</div>
				<div className="c-menu-nombre-app">
					<h1 className="c-nombre-app">{rutaMenu}</h1>
				</div>
			</Link>
		</div>

		<nav className="o-layout-navegacion-menu-fija">
			
			<ul>
				<NavLink 
					to = "/abastecimiento" 
					className = "o-layout-container-item-navegacion-fija font-enlaces"	
					>
					<li className ="c-item-navegacion-menu-fija">
						<img src={abastecimiento} className="c-img-navegacion-fija-menu" alt = "Abastecimiento"/> 
						<p className="c-title-item-navegacion-fija font-enlaces">Abastecimiento</p>	
					</li>
				</NavLink>

				<NavLink 
					to = "/inventario/lista" 
					className = "o-layout-container-item-navegacion-fija font-enlaces"
					>
					<li className ="c-item-navegacion-menu-fija">
						<img src={inventario} className="c-img-navegacion-fija-menu" alt = "Inventario"/> 
						<p className="c-title-item-navegacion-fija">Inventario</p>	
					</li>
				</NavLink>

				<NavLink
					to = "hidrolo" 
					className = "o-layout-container-item-navegacion-fija font-enlaces"		
					>
					
					<li className ="c-item-navegacion-menu-fija">
						 <img src={mapMenu} className="c-img-navegacion-fija-menu" alt = "geolocalizacion"/> 
						<p className="c-title-item-navegacion-fija">Mapeo y Geolocalizacion</p>	
					</li>
				</NavLink>
			</ul>
		</nav>

		<nav className="o-layout-navegacion-menu-dinamica">
			
			<ul>
            {rutas[0]?rutas.map(ruta => (
                                    <NavLink
										key = {ruta.id}
                                        to={ruta.ruta}
                                        className="o-layout-container-item-navegacion-fija quitar-after"
                                        activeClassName="active"
                                    >
                                        <li className ="c-item-navegacion-menu-fija">
                                            {/* <img src={} className="c-img-navegacion-fija-menu" alt = {ruta.name}/> */}
                                            <p className="c-title-item-navegacion-fija">{ruta.name}</p>	
                                        </li>
                                    </NavLink>
                        )): null}
			</ul>
		</nav>

		<div className="o-layout-cerrar-sesion-menu">
			<NavLink to="/salir"  onClick={cerrar} className="o-layout-container-item-navegacion-fija before">
					
					<li className ="c-item-navegacion-menu-fija">
					 <img src={logout} className="c-img-navegacion-fija-menu" alt = "salir"/>
					<p className="c-title-item-navegacion-fija">salir</p>	
					</li>
				</NavLink>
		</div>


	</div>
                        
    );
}

export default Menu;
