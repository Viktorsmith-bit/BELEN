import React, { Component } from 'react'
import Reservacion from '../private/views/reservation';

export default class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            ruta: true
        }
        this.hundleClick = this.hundleClick.bind(this);
        this.hundleChange = this.hundleChange.bind(this);
    }

    hundleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hundleClick(e) {
        e.preventDefault();
        if (this.state.email === 'dentalbelen_clinica@gmail.com' && this.state.password === 'dentalbelen2021') {
            this.setState({
                ruta: false
            })
        } else {
            alert('Error: Email o Password incorrecto');
        }
    }
    render() {
        let button;
        let renderizado;
        if (this.state.ruta) { 
            button = <div className='container-fluid text-center' style={{ backgroundColor: '#F4F6F7 ' }}>
                    <div className='row align-items-center justify-content-center px-4 px-md-0 px-lg-0' style={{ height: '100vh'}}>
                        <div className='col-12 col-md-9 col-lg-9 col-sm-11'>
                            <div className='row justify-content-center' style={{marginBottom:'1rem'}}>
                                <h1 className="display-4 fw-bold">SOLO PERSONAL AUTORIZADO</h1>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-lg-5 col-sm-12'>
                                    <form className="form-signin" onSubmit={this.hundleClick} >
                                        <label for="inputEmail" className="sr-only">Correo electrónico</label>
                                        <input
                                            onChange={this.hundleChange}
                                            type="email"
                                            name='email'
                                            id="inputEmail"
                                            className="form-control"
                                            placeholder="Correo"
                                            required autofocus
                                            style={{ height: '3.5rem' }} />
                                        <label for="inputPassword" className="sr-only mt-4">Contraseña</label>
                                        <input
                                            onChange={this.hundleChange}
                                            type="password"
                                            name='password'
                                            id="inputPassword"
                                            className="form-control"
                                            placeholder="Contraseña"
                                            required
                                            style={{ height: '3.5rem', marginTop: '0.3rem' }} />
                                        <button
                                            className="btn btn-lg bk-color btn-block text-white"
                                            style={{ marginTop: '1.5rem' }}
                                            type="submit"
                                        >
                                            Iniciar sesión
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <p className="mt-5 mb-3 text-muted">&copy;Clínica-Belén 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

        } else {
            renderizado = <Reservacion />
        }
        return (
            <div className='LogIn'>
                {button}
                {renderizado}                        
            </div>
        )
    }
}

