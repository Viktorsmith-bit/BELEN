import React, { Component } from 'react'
import Nav from '../contents/nav';
import { Link } from 'react-router-dom';
import Footer from '../contents/footer';
import Header from '../contents/header';
import Tratamientos from '../assets/images/Tratamientos/drill.svg';

class App extends Component {

    render() {
        const slogan = 'Mejora tu sonrisa con nosotros';
        const title = 'ESPECIALIDADES';
        const imagen = 'especialidades';

        return (
            <div className='bg-white'>
                <Nav />
                <Header slogan={slogan} title={title} imagen={imagen} />
                <div className='container-xl'>
                    <div className='row justify-content-center py-5 mt-lg-5'>
                        <div className="col-xl-10 d-flex flex-column align-items-center">
                            <img src={Tratamientos} className='icono' />
                            <h1 className="display-5 fw-bold color text-center mt-5">Nuestros Tratamientos</h1>
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
                <div className='px-3 px-md-0 px-lg-0'>
                    <div className='container-xl mt-4 mt-md-3 mt-lg-3'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-10 col-xl-7 p-4 p-lg-5 bk-color rounded'>
                                <h1 className='text-white display-6 fw-bold'>Implantes</h1>                        
                                <h6 className='width lh-sm text-white-50 mt-3'>En BELÉN ofrecemos varias opciones para reemplazar los dientes perdidos, por ejemplo: las coronas, puentes, dentaduras e implantes para ayudarlos a comer, hablar y disfrutar de una hermosa sonrisa.</h6>
                                <h5 className='fw-bold text-white mt-3'>Beneficios</h5>
                                <h6 className='width lh-sm text-white-50'>Recuperar las piezas dentales perdidas de forma fija con implantes dentales de titanio, estos funcionan como raíces dentro del maxilar para sostener coronas o prótesis estéticas.</h6>
                            </div>
                            <div className='col-md-10 col-xl-5 p-4 p-lg-5 shadow-sm rounded marginLeft mt-3 mt-lg-0' style={{backgroundColor:'#f5f5f5'}} >
                                <h5 className='fw-bold' style={{color:'#2c3d50'}} >Objetivos del tratamiento</h5>
                                <h6 className='lh-sm text-muted'>La mejor alternativa para reemplazar piezas dentales perdidas es mediante una intervención simple y sin dolor, es posible insertar estas raíces artificiales en el hueso remanente, para luego reconstruir la parte externa del diente, devolviendo la función y la estética.</h6>
                            </div>
                        </div>
                        <div className='row justify-content-center justify-content-lg-start mt-3 ms-lg-3'>
                            <div className='col-md-10 col-lg-7'>
                                <h5 className='fw-bold mt-3'>Tener en cuenta</h5>                        
                                <h6 className='lh-sm text-muted'>La función del implante es reponer las piezas dentarias perdidas y dar un agradable aspecto tal como si se tratase de un diente natural:</h6>
                                <div className='px-4'>
                                    <li className='text-muted'>Implante unitario.</li>
                                    <li className='text-muted'>Prótesis completa sobre implantes.</li>
                                    <li className='text-muted'>Puente sobre implantes.</li>
                                </div>
                                <h5 className='fw-bold mt-3'>Mantenimiento Dental</h5>
                                <h6 className='lh-sm text-muted'>Conservar su boca sana es una parte esencial de su salud. Es importante mantener informado a su dentista sobre cualquier cambio en su salud bucal.</h6>                        
                            </div>                         
                        </div>
                    </div>
                    <div className='container-xl mt-4 mt-md-5 mt-lg-5'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-10 col-xl-5 p-4 p-lg-5 shadow-sm rounded marginRight' style={{backgroundColor:'#f5f5f5', zIndex:'40'}} >
                                <h5 className='fw-bold' style={{color:'#2c3d50'}} >Objetivos del tratamiento</h5>
                                <h6 className='lh-sm text-muted'>El objetivo principal del tratamiento del nervio es salvar el diente de una extracción, luego puede requerir un implante, una corona o simplemente una cura dental para cerrar la entrada a la zona del conducto y evitar que se vuelva a infectar.</h6>
                            </div>
                            <div className='col-md-10 col-xl-7 p-4 p-lg-5 bk-color rounded mt-3 mt-lg-0'>
                                <h1 className='text-white display-6 fw-bold text-end'>Endodoncia</h1>                        
                                <h6 className='width lh-sm text-white-50 text-end ms-auto mt-3'>El Tratamiento de endodoncia consiste en retirar el nervio del diente debido a la presencia de una lesión o infección profunda por caries y así evitar la extracción del diente.</h6>
                                <h5 className='fw-bold text-white mt-3 text-end'>Beneficios</h5>
                                <h6 className='width lh-sm text-white-50 text-end ms-auto'>Tratamiento que elimina la pulpa dental deteriorada o infectada con el fin de aliviar el dolor y dar nueva función al diente afectado. El diente tratado debe obturarse con un material compatible y luego se restaura con resina o si el daño es mayor se coloca una corona dental.</h6>
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
                    <div className='container-xl mt-4 mt-md-5 mt-lg-5'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-10 col-xl-7 p-4 p-lg-5 bk-color rounded'>
                                <h1 className='text-white display-6 fw-bold'>Estética Dental</h1>                        
                                <h6 className='width lh-sm text-white-50'>La Ortodoncia se encarga de corregir la posición de los dientes, esto implica lograr una correcta alineación dental, simetría y equilibrio de la dentición para lograr una correcta función y estética del complejo ortofacial y la sonrisa.</h6>
                                <h5 className='fw-bold text-white mt-3'>Beneficios</h5>
                                <h6 className='width lh-sm text-white-50'>La ortodoncia es la especialidad que te ayudará a colocar los dientes en la posición correcta, también te ayudará a corregir los dientes apiñados, espaciados, cruzados, salidos, entre otros. Asimismo, lograrás una mordida ideal, que consiste en una adecuada posición dentaria.</h6>
                            </div>
                            <div className='col-md-10 col-xl-5 p-4 p-lg-5 shadow-sm rounded marginLeft mt-3 mt-lg-0' style={{backgroundColor:'#f5f5f5'}} >
                                <h5 className='fw-bold' style={{color:'#2c3d50'}} >Objetivos del tratamiento</h5>
                                <h6 className='lh-sm text-muted'>La ortodoncia es la especialidad de la odontología que se encarga de prevenir, diagnosticar y corregir la alteración en la posición de los dientes dentro de los arcos maxilares.</h6>
                            </div>
                        </div>
                        <div className='row justify-content-center justify-content-lg-start mt-3 ms-lg-3'>
                            <div className='col-md-10 col-lg-7'>
                                <h5 className='fw-bold'>Tener en cuenta</h5>                        
                                <h6 className='lh-sm text-muted'>Se evitarán muchos problemas que pueden aparecer posteriormente: como caries, desgaste de la superficie masticatoria de los dientes, dolores en la articulación de la mandíbula, pérdida prematura de dientes y pérdida de soporte óseo.</h6>
                                <h5 className='fw-bold mt-3'>Mantenimiento Dental</h5>
                                <h6 className='lh-sm text-muted'>Mantener tu boca sana es una parte esencial de tu salud. Es importante mantener informado a su dentista sobre cualquier cambio en su salud bucal.</h6>  
                            </div>                      
                        </div>
                    </div>
                    <div className='container-xl mt-4 mt-md-5 mt-lg-5'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-10 col-xl-5 p-4 p-lg-5 shadow-sm rounded marginRight' style={{backgroundColor:'#f5f5f5', zIndex:'40'}} >
                                <h5 className='fw-bold' style={{color:'#2c3d50'}} >Objetivos del tratamiento</h5>
                                <h6 className='lh-sm text-muted'>La ortodoncia es la especialidad de la odontología que se encarga de prevenir, diagnosticar y corregir la alteración en la posición de los dientes dentro de los arcos maxilares.</h6>
                            </div>
                            <div className='col-md-10 col-xl-7 p-4 p-lg-5 bk-color rounded mt-3 mt-lg-3'>
                                <h1 className='text-white display-6 fw-bold text-end'>Ortodoncia</h1>                        
                                <h6 className='width lh-sm text-white-50 text-end ms-auto mt-3'>La Ortodoncia se encarga de corregir la posición de los dientes, esto implica lograr una correcta alineación dental, simetría y equilibrio de la dentición para lograr una correcta función y estética del complejo ortofacial y la sonrisa.</h6>
                                <h5 className='fw-bold text-white mt-3 text-end'>Beneficios</h5>
                                <h6 className='width lh-sm text-white-50 text-end ms-auto'>La ortodoncia es la especialidad que te ayudará a colocar los dientes en la posición correcta, también te ayudará a corregir los dientes apiñados, espaciados, cruzados, salidos, entre otros. Asimismo, lograrás una mordida ideal, que consiste en una adecuada posición dentaria.</h6>
                            </div>
                        </div>
                        <div className='row justify-content-center justify-content-lg-start mt-3 ms-lg-3'>
                            <div className='col-md-10 col-lg-7'>
                                <h5 className='fw-bold'>Tener en cuenta</h5>                        
                                <h6 className='lh-sm text-muted'>Se evitarán muchos problemas que pueden aparecer posteriormente: como caries, desgaste de la superficie masticatoria de los dientes, dolores en la articulación de la mandíbula, pérdida prematura de dientes y pérdida de soporte óseo.</h6>
                                <h5 className='fw-bold mt-3'>Mantenimiento Dental</h5>
                                <h6 className='lh-sm text-muted'>Mantener tu boca sana es una parte esencial de tu salud. Es importante mantener informado a su dentista sobre cualquier cambio en su salud bucal.</h6>  
                            </div>                      
                        </div>
                    </div>
                    <div className='container-xl mt-4 mt-md-5 mt-lg-5'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-10 col-xl-7 p-4 p-lg-5 d-flex flex-column bk-color rounded'>
                                <h1 className='text-white display-6 fw-bold'>Odontopediatría</h1>                        
                                <h6 className='width lh-sm text-white-50'>Brindamos un trato especial a los más pequeños, nuestra meta no solo es curar las enfermedades bucales de los niños sino esforzarnos para que no vuelvan a aparecer.</h6>
                                <h5 className='fw-bold text-white mt-3'>Beneficios</h5>
                                <h6 className='width lh-sm text-white-50'>El principal beneficio es la prevención, ya que con un asesoramiento adecuado podemos conseguir que los niños lleguen a la etapa adulta libres de caries (fluor & sellantes), y con los dientes alineados.</h6>
                            </div>
                            <div className='col-md-10 col-xl-5 p-4 p-lg-5 shadow-sm rounded marginLeft mt-3 mt-lg-0' style={{backgroundColor:'#f5f5f5'}} >
                                <h5 className='fw-bold' style={{color:'#2c3d50'}} >Objetivos del tratamiento</h5>
                                <h6 className='lh-sm text-muted'>El objetivo del tratamiento es resolver los problemas que puedan surgir con la primera dentición de los niños.</h6>
                            </div>
                        </div>
                        <div className='row justify-content-center justify-content-lg-start mt-3 ms-lg-3'>
                            <div className='col-md-10 col-lg-7'>
                                <h5 className='fw-bold'>Tener en cuenta</h5>                        
                                <h6 className='lh-sm text-muted'>Es muy habitual que los niños sufran la rotura o la pérdida completa de algunos dientes por una caída o un golpe, también un diente puede volverse negro por un traumatismo sufrido con anterioridad. En Belén Clínica Dental Especializada los Odontepediatras son los mejores en tratar a los niños.</h6>
                                <h5 className='fw-bold mt-3'>Mantenimiento Dental</h5>
                                <h6 className='lh-sm text-muted'>Conservar su boca sana es una parte esencial de su salud. Es importante mantener informado a su dentista sobre cualquier cambio en su salud bucal.</h6>  
                            </div>                      
                        </div>
                    </div>
                </div>
                <div className='container-xl border py-5 mt-5'>
                    <h5 className='fw-bold text-center'>¡Cuéntanos!</h5>
                    <h6 className='text-muted text-center width mx-auto mt-3'>¿Tiene preguntas acerca de su salud oral o ciertos procedimientos dentales? Inicie una conversación y pregunte a su dentista. A los dentistas nos encanta tener pacientes satisfechos y saludables.</h6>
                </div>
                <iframe className='w-100 border mt-5' style={{ height: '30rem'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <Footer />
            </div>
        )
    }
}


export default App;