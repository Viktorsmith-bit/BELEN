import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Implante from '../../assets/images/Inicio/Especialidades/implante-dental.svg';
import Endodoncia from '../../assets/images/Inicio/Especialidades/cuidado-dental.svg';
import Estetica from '../../assets/images/Inicio/Especialidades/cuidado.svg';
import Ortodoncia from '../../assets/images/Inicio/Especialidades/diente.svg';
import Odontopediatria from '../../assets/images/Inicio/Especialidades/odontopediatria.svg';

export default class especialidades extends Component {
    render() {
        return (
                    <div className='d-flex flex-wrap justify-content-center gap-3 mt-5 text-center'>
                        <div className='px-3 py-3 py-md-5 py-lg-5 border shadow-sm rounded widthTra'>
                            <div className='row justify-content-center'>
                                <img src={Implante} style={{ height: '8rem', width: '8rem' }} />
                            </div>
                            <div className='p-2'><h4 className='fw-normal text-muted'>Implantes Dentales</h4> </div>
                            <Link to='/implantes'>
                                <button className='btn text-white p-2 w-50' style={{backgroundColor:'#233554' }}>Leer más</button>
                            </Link>
                        </div>
                        <div className='px-3 py-3 py-md-5 py-lg-5 border shadow-sm rounded widthTra'>
                            <div className='row justify-content-center'>
                                <img src={Endodoncia} style={{ height: '8rem', width: '8rem' }} />
                            </div>
                            <div className='p-2'><h4 className='fw-normal text-muted'>Endodoncia</h4> </div>
                            <Link to='/endodoncia'>
                                <button className='btn text-white p-2 w-50' style={{backgroundColor:'#233554' }}>Leer más</button>
                            </Link>
                        </div>
                        <div className='px-3 py-3 py-md-5 py-lg-5 border shadow-sm rounded widthTra'>
                            <div className='row justify-content-center'>
                                <img src={Estetica} style={{ height: '8rem', width: '8rem' }} />
                            </div>
                            <div className='p-2'><h4 className='fw-normal text-muted'>Estética dental</h4> </div>
                            <Link to='/estetica/dental'>
                                <button className='btn text-white p-2 w-50' style={{backgroundColor:'#233554' }}>Leer más</button>
                            </Link>
                        </div>
                        <div className='px-3 py-3 py-md-5 py-lg-5 border shadow-sm rounded widthTra'>
                            <div className='row justify-content-center'>
                                <img src={Ortodoncia} style={{ height: '8rem', width: '8rem' }} />
                            </div>
                            <div className='p-2'><h4 className='fw-normal text-muted'>Ortodoncia</h4> </div>
                            <Link to='/ortodoncia'>
                                <button className='btn text-white p-2 w-50' style={{backgroundColor:'#233554' }}>Leer más</button>
                            </Link>
                        </div>
                        <div className='px-3 py-3 py-md-5 py-lg-5 border shadow-sm rounded widthTra'>
                            <div className='row justify-content-center'>
                                <img src={Odontopediatria} style={{ height: '8rem', width: '8rem' }} />
                            </div>
                            <div className='p-2'><h4 className='fw-normal text-muted'>Odontopediatría</h4> </div>
                            <Link to='/odontopediatria'>
                                <button className='btn text-white p-2 w-50' style={{backgroundColor:'#233554' }}>Leer más</button>
                            </Link>
                        </div>
                    </div> 
        )
    }
}
