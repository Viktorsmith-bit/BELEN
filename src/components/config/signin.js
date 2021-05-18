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
        if (this.state.email === 'dentalbelen@gmail.com' && this.state.password === 'dentalbelen2020') {
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
            button =
                <div className='container-fluid' style={{ backgroundColor: '#F4F6F7 ' }}>
                    <div className='row align-items-center justify-content-center' style={{ height: '100vh', width: '100%' }}>
                        <div className='col-lg-9 col-sm-11'>
                            <div className='row justify-content-center' style={{marginBottom:'1rem'}}>
                                <h1 className="display-4">Solo Personal Autorizado</h1>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-lg-5 col-sm-12'>
                                    <form className="form-signin" onSubmit={this.hundleClick} >
                                        <label for="inputEmail" className="sr-only">Email address</label>
                                        <input
                                            onChange={this.hundleChange}
                                            type="email"
                                            name='email'
                                            id="inputEmail"
                                            className="form-control"
                                            placeholder="Email address"
                                            required autofocus
                                            style={{ height: '3.5rem' }} />
                                        <label for="inputPassword" className="sr-only">Password</label>
                                        <input
                                            onChange={this.hundleChange}
                                            type="password"
                                            name='password'
                                            id="inputPassword"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                            style={{ height: '3.5rem', marginTop: '0.3rem' }} />
                                        <button
                                            className="btn btn-lg btn-info btn-block"
                                            style={{ marginTop: '1.5rem' }}
                                            type="submit"

                                        >
                                            Iniciar sesión
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <p className="mt-5 mb-3 text-muted">&copy;Dental-Belén 2020</p>
                            </div>
                        </div>
                    </div>
                </div>

        } else {
            renderizado = <Reservacion />
        }
        return (
            <div>
                {button}
                {renderizado}
                               
            </div>
        )
    }
}

