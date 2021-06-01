import React, { Component } from 'react'
import Nav from './contents/nav';
import Header from './contents/header';
import Footer from './contents/footer';
import Bioseguridad from './assets/images/Bioseguridad/seal.svg';
import Casa from './assets/images/Inicio/Protocolo/aislamiento.svg';
import Recepcion from './assets/images/Inicio/Protocolo/la-prevencion-de-enfermedades.svg';
import Transito from './assets/images/Inicio/Protocolo//distanciamiento-social.svg';
import Consultorio from './assets/images/Inicio/Protocolo/gel-de-manos.svg';

class App extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const slogan = 'Tu seguridad nos importa';
        const imagen = 'bioseguridad';
        
        return (
            <div className='bg-white'>
                <Nav />
                <Header title='BIOSEGURIDAD' slogan={slogan} imagen={imagen}/>
                <div className='container-xl'>
                <div className='row justify-content-center mt-5 py-lg-5'>
                    <div className="col-xl-10 d-flex flex-column align-items-center">
                        <img src={Bioseguridad} className='icono' />
                        <h1 className="display-5 fw-bolder color text-center mt-5">Protocolos de Bioseguridad</h1>
                        <h5 className='lead text-center'>Conoce y sigue nuestros protocolos</h5>    
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-center py-5 gap-2 gap-lg-3'>
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
                    <div className='border shadow-sm p-4' style={{width:'22rem'}} >
                        <div className='d-flex justify-content-center gap-3'>
                            <img src={Consultorio} style={{ height: '5rem', width: '5rem' }} />
                            <h4 className='text-center text-dark my-auto lead fw-bold'>En la clínica (Consultorio)</h4>
                        </div>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm'><span className='fw-bold'>Lávese las manos.</span> <span className='text-muted'>Con gel de alcohol.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Sentado.</span> <span className='text-muted'>En cuanto pueda siéntese en el sillón.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Equipos de protección.</span> <span className='text-muted'>Le dotaremos de babero y gafas de protección.</span></h6>
                        <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm'><span className='fw-bold'>Objetos personales.</span> <span className='text-muted'>Deberán estar guardados al entrar.</span></h6>
                        <h6 className='text-start mt-2 py-2 lh-sm'><span className='fw-bold'>Instrumental.</span> <span className='text-muted'>El material e instrumental se desinfectan minuciosamente.</span></h6>
                    </div>
                </div>
                
                <iframe className='w-100 border mt-5' style={{ height: '25rem'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <Footer />

            </div>
        )
    }
}


export default App;