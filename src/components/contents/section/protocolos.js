import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Casa from '../../assets/images/Inicio/Protocolo/aislamiento.svg';
import Recepcion from '../../assets/images/Inicio/Protocolo/la-prevencion-de-enfermedades.svg';
import Transito from '../../assets/images/Inicio/Protocolo/distanciamiento-social.svg';

export default class protocolos extends Component {
    render() {
        return (
            <div className='py-5 mt-xl-5 text-center'>
                <h1 className='display-5 color fw-bold px-4'>Protocolos de Bioseguridad</h1>
                <h5 className='lead'>Su seguridad es nuestra prioridad</h5>
                <div className='d-flex flex-wrap justify-content-center py-5 gap-3'>
                    <div className='border shadow-sm p-4' style={{width:'22rem'}} >
                        <div className='d-flex justify-content-center gap-3'>
                            <img src={Casa} style={{ height: '5rem', width: '5rem' }} />
                            <h3 className='text-center text-dark my-auto lead fw-bold'>En casa (Previo a la cita)</h3>
                        </div>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm'><span className='fw-bold'>De a uno.</span> <span className='text-muted'>Deberá venir solo si es posible</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Sin adornos.</span> <span className='text-muted'>No traiga relojes, ni pulseras, ni anillos, cero metal.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Puntualidad.</span> <span className='text-muted'>Venga en la hora pactada en la cita, nunca antes.</span></h6>
                        <h6 className='text-start mt-2 py-2 lh-sm'><span className='fw-bold'>Pago.</span> <span className='text-muted'>Se recomienda que el pago sea con tarjeta, aplicativo o en su defecto en efectivo, se pagará solo en caja o en dirección.</span></h6>
                    </div>
                    <div className='border shadow-sm p-4' style={{width:'22rem'}} >
                        <div className='d-flex justify-content-center gap-3'>
                            <img src={Recepcion} style={{ height: '5rem', width: '5rem' }} />
                            <h4 className='text-dark my-auto lead fw-bold'>En la clínica (Recepción)</h4>
                        </div>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm text-muted'>Lavado de manos al ingresar.</h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Desinfectarse las zuelas de sus zapatos.</h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Permanecer puesto la mascarilla todo el tiempoSe desinfectará las manos con alcohol en gel.</h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Equipos de protección personal</h6>
                        <h6 className='text-start mt-2 py-2 lh-sm'><span className='fw-bold'>Distancia de seguridad.</span> <span className='text-muted'>Deberá mantener una distancia de 1.50m</span></h6>
                    </div>
                    <div className='border shadow-sm p-4' style={{width:'22rem'}} >
                        <div className='d-flex justify-content-center gap-3'>
                            <img src={Transito} style={{ height: '5rem', width: '5rem' }} />
                            <h4 className='text-center text-dark my-auto lead fw-bold'>En la clínica (Tránsito)</h4>
                        </div>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm'><span className='fw-bold'>Sin adornos.</span> <span className='text-muted'>Belén Clínica Especializada ha retirado todos sus adornos de la sala de espera.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Sin revistas.</span> <span className='text-muted'>Hemos retitarado todas las revistas y folietos.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Sentado.</span> <span className='text-muted'>Manténgase sentado en todo momento en la sala de tránsito hasta que sea llamado.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Distancia de seguridad.</span> <span className='text-muted'>Mantenga la distancia de seguridad de 1.50m.</span></h6>
                        <h6 className='text-start mt-2 py-2 lh-sm text-muted'>Zona con Wi-Fi.</h6>
                    </div>
                </div>
                <Link to='/nosotros'><button type="button" class="btn border fw-bold px-5 py-3">Ver todos los protocolos</button></Link>
            </div>
        )
    }
}
