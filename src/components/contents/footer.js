import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <footer className="p-3 p-md-4 p-lg-5 border border-bottom-0 borde-start-0 border-end-0" >
                <div className='container-xl py-3 py-lg-5'>
                    <div class="row">
                        <div className="col-12 col-lg-5">
                            <h3 className='text-dark fw-bold'>BELÉN CLÍNICA DENTAL ESPECIALIZADA</h3>
                            <small className="d-block text-dark">Carlos A. Izaguirre Alzamora N°709 - Huaraz</small>
                            <small className="d-block text-dark">(Frente al parque FAP - Soledad Baja)</small>
                            <small className="d-block text-dark mt-3"><span className='fw-bold'>E-mail: </span>dentalbelen@gmail.com</small>
                            <small className="d-block text-dark"><span className='fw-bold'>Teléfonos:</span> (043) 633 746 - (043) 636 813</small>
                            <small className="d-block text-dark"><span className='fw-bold'>Lunes a Viernes:</span> 9:00am - 9:00pm</small>
                            <small className="d-block text-dark"><span className='fw-bold'>Sábados:</span> 9:00am - 1:00pm</small>
                        </div>
                        <div className="col-6 col-lg-2 mt-4 mt-lg-0">
                            <h5 className='text-dark fw-bold'>Contenido</h5>
                            <ul className="list-unstyled text-small">
                                <li><Link to='/precing' className="text-muted" href="#">Especialidades</Link></li>               
                                <li><Link to='/nosotros' className="text-muted" href="#">Bioseguridad</Link></li>
                                <li><Link to='/belencard' className="text-muted" href="#">Belén Card</Link></li>
                                <li><Link to='/credito' className="text-muted" href="#">Crédito Directo</Link></li>
                                <li><Link to='/reservacion' className="text-muted" href="#">Reserva Online</Link></li>                       
                                <li><Link to='/especialidades' className="text-muted" href="#">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mt-4 mt-lg-0">
                            <h5 className='text-dark fw-bold'>Especialidades</h5>
                            <ul className="list-unstyled text-small">
                                <li><Link to='/precing' className="text-muted" href="#">Implantes</Link></li>
                                <li><Link to='/precing' className="text-muted" href="#">Endodoncia</Link></li>
                                <li><Link to='/precing' className="text-muted" href="#">Estética Dental</Link></li>
                                <li><Link to='/precing' className="text-muted" href="#">Ortodoncia</Link></li>
                                <li><Link to='/precing' className="text-muted" href="#">Odontopediatría</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3"> 
                            <h5 className='text-dark fw-bold'>Redes sociales</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://www.facebook.com/dentalbelenhuaraz" target='blank'>Facebook</a></li>
                                <li><a className="text-muted" href="https://www.instagram.com/belenhuaraz/?hl=es-la" target='blank'>Instagram</a></li>
                                <li><a className="text-muted" href='https://wa.me/51986225549?text=Bienvenido%20Belén%20Clínica%20Dental%20Especializada' target='blank'>Whatsapp</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
            </footer>
        );
    }
}

export default App;