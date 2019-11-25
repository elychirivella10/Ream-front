import React, {useState, Fragment} from 'react';
import './Style.login.scss'
import Logo from './piramide-w.svg'
import Mapa from '../mapa/Mapa'



const Login = ({fn}) => {
	const [datos, guardarDatos] = useState({
		user:'',
		pass:''
	})

	const handleChange = e =>{
		guardarDatos({
			...datos,
			[e.target.name]:e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		const {pass, user} = datos
		if (user === 'ely' && pass === '123') {
			localStorage.setItem('datos', JSON.stringify(true))
			fn(datos)
			
		  }
	}

    return (
		<Fragment>
		<div className="o-layout-container-login o-background-container-login">
			<Mapa/>
			<div className="o-layout-container-form-login c-container-form-login">
				<form 
				className="o-layout-form-login"
				onSubmit ={handleSubmit}
				>
					
					<div className="o-layout-logo-login">
						<img src={Logo} alt=""  className="c-svg-logo-login"/>
					</div>

					<span className="o-layout-form-title-login text-white">
						Inicio de Sesion
					</span>

					<div className="o-layout-input">
						<input className="c-input-form-login" 
						type="text" 
						name="user" 
						placeholder="Usuario"
						onChange={handleChange}
						/>	
					</div>

					<div className="o-layout-input">
						<input 
						className="c-input-form-login" 
						type="password" 
						name="pass" 
						placeholder="Contraseña"
						onChange={handleChange}
						/>
					</div>
					
					<div className="o-layout-container-btn-form-login">
						<input type="submit" value="Ingresar" className="c-btn-form-login"/>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2 text-white" href="!#">
							Recuperar Contraseña
						</a>
					</div>
				</form>
			</div>
			
		</div>
		</Fragment>
    );
}

export default Login;
