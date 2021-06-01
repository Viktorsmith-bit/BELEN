import React, { Component } from 'react'
import Nav from '../contents/nav';
import { Link } from 'react-router-dom';
import Footer from '../contents/footer';
import Header from '../contents/header';
import Tratamientos from '../assets/images/Inicio/Especialidades/cuidado-dental.svg';

class App extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
      
    render() {
        const slogan = 'Ahorra en el super, pero no en tu sonrisa.';
        const title = 'ENDODONCIA';
        const imagen = 'endodoncia';

        return (
            <div className='bg-white'>
                <Nav />
                <Header slogan={slogan} title={title} imagen={imagen} />
                <div className='container-xl'>
                    <div className='row justify-content-center py-5 mt-lg-5'>
                        <div className="col-xl-10 d-flex flex-column align-items-center">
                            <img src={Tratamientos} className='icono' />
                            <h1 className="display-5 fw-bold color text-center mt-5">Nuestro Tratamiento</h1>
                            <h5 className='lead text-center'>Conozca lo mejor de nosotros</h5>    
                        </div>
                    </div>
                </div>
                <div className='container-xl'>
                    <div className='row justify-content-center justify-content-lg-start mt-lg-5'>
                        <div className="col-12 col-md-6 col-lg-4 ms-lg-3">
                            <div className='rounded-pill py-2 d-flex justify-content-center align-items-center' style={{backgroundColor:'#D5F5E3 '}} >
                                <p className='my-auto'>Más información en nuestro <Link to='/especialidades'><span className='fw-bold'>blog</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>          
                <div className='container-xl mt-4 mt-md-3 mt-lg-3 px-3 px-md-0 px-lg-0'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-10 col-lg-7 col-xl-7 p-4 p-lg-5 bk-color rounded'>
                            <h1 className='text-white display-6 fw-bold'>Endodoncia</h1>                        
                            <h6 className='width lh-sm text-white-50 mt-3'>El Tratamiento de endodoncia consiste en retirar el nervio del diente debido a la presencia de una lesión o infección profunda por caries y así evitar la extracción del diente.</h6>
                            <h5 className='fw-bold text-white mt-3'>Beneficios</h5>
                            <h6 className='width lh-sm text-white-50'>Tratamiento que elimina la pulpa dental deteriorada o infectada con el fin de aliviar el dolor y dar nueva función al diente afectado. El diente tratado debe obturarse con un material compatible y luego se restaura con resina o si el daño es mayor se coloca una corona dental.</h6>
                        </div>
                        <div className='col-md-10 col-lg-7 col-xl-5 p-4 p-lg-5 shadow-sm rounded marginLeft mt-3 mt-lg-0' style={{backgroundColor:'#f5f5f5'}} >
                            <h5 className='fw-bold' style={{color:'#2c3d50'}} >Objetivos del tratamiento</h5>
                            <h6 className='lh-sm text-muted'>El objetivo principal del tratamiento del nervio es salvar el diente de una extracción, luego puede requerir un implante, una corona o simplemente una cura dental para cerrar la entrada a la zona del conducto y evitar que se vuelva a infectar.</h6>
                        </div>
                    </div>
                    <div className='row justify-content-center justify-content-lg-start mt-3 ms-lg-3'>
                        <div className='col-md-10 col-lg-7'>
                            <h5 className='fw-bold'>Tener en cuenta</h5>                        
                            <h6 className='lh-sm text-muted'>Que tener una buena sonrisa es sinónimo de salud y bienestar social. Cada vez son más los pacientes que se preocupan por tener no sólo una boca sana, sino también una bonita sonrisa.</h6>
                            <h5 className='fw-bold mt-3'>Mantenimiento Dental</h5>
                            <h6 className='lh-sm text-muted'>Conservar su boca sana es una parte esencial de su salud. Es importante mantener informado a su dentista sobre cualquier cambio en su salud bucal.</h6>  
                        </div>                      
                    </div>               
                </div>
                <div className='container-xl mt-5 px-4 px-md-5 px-lg-5'>
                    <div className='row border py-5'>
                        <h5 className='fw-bold text-center'>¡Cuéntanos!</h5>
                        <h6 className='text-muted text-center width mx-auto mt-3'>¿Tiene preguntas acerca de su salud oral o ciertos procedimientos dentales? Inicie una conversación y pregunte a su dentista. A los dentistas nos encanta tener pacientes satisfechos y saludables.</h6>
                    </div>
                </div>
                <iframe className='w-100 border mt-5' style={{ height: '30rem'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <Footer />
            </div>
        )
    }
}


export default App;