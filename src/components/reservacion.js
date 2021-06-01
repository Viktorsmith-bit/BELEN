import React, { Component } from 'react';
import Nav from './contents/nav';
import Form from './sample/form';
import Footer from './contents/footer';
import Reservacion from './assets/images/Reservacion/braces.svg';
class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className='bg-white'>
        <Nav />
        <div className='reserva marginTop heightImage'>
            <div className='container-fluid'>
                <div className="container-xxl py-5 py-md-5 py-lg-4" >
                    <div className='row py-3 py-md-5 py-lg-5'>
                        <div className='col-lg-12 p-3 p-lg-5 text-end d-none d-md-block d-lg-block'>
                          <h1 className='display-1 fw-bold text-wrap color d-none d-lg-block'>RESERVE EN LÍNEA</h1>
                            <h1 className='display-1 fw-bold text-wrap color d-none d-md-block d-lg-none'>RESERVACIÓN</h1>
                            <p className='lead'>Reserva una cita, es fácil y seguro.</p>
                            <a className='btn px-5 py-3 bk-color fw-bold text-white' href='#reservaOnline'>Reservar cita</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-12 p-3 p-lg-5 text-center d-md-none d-lg-none'>
            <h1 className='display-1 fw-bold text-wrap color'>RESERVE EN LÍNEA</h1>
            <p className='lead'>Reserva una cita, es fácil y seguro.</p>
            <a className='btn px-5 py-3 bk-color fw-bold text-white' href='#reservaOnline'>Reservar cita</a>
        </div>
        <div className='container-xl mt-md-5 mt-lg-5'>
          <div className='row justify-content-center'>
            <div className="col-xl-10 d-flex flex-column align-items-center">
                <img src={Reservacion} className='icono' />
                <h1 className="display-5 fw-bold color text-center" id='reservaOnline'>Reserve sin complicaciones</h1>
                <h5 className='lead text-center'>Atendemos cualquier tipo de emergencia</h5>    
            </div>
          </div>
        </div>     
        <Form />   
        <iframe className='w-100 border mt-5' style={{ height: '25rem'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <Footer />
      </div>
    );
  }
}

export default App;
