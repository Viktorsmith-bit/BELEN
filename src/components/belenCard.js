import React, { Component } from 'react';
import Nav from './contents/nav';
import Header from './contents/header';
import DatabaseBelen from './database/db/database.belen';
import BelenCard from './assets/images/Belen-card/medicine.svg';
import Footer from '../components/contents/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        id: 0,
        name: '',
        correo: '',
        telefono: '',
        especialidad: ''
    }
    this.hundleChange = this.hundleChange.bind(this);
    this.hundleClick = this.hundleClick.bind(this);
}

//Escucha los cambios en los inputs
hundleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

async componentDidMount() {
    window.scrollTo(0, 0);
    const dbcard = await DatabaseBelen();
    const rx = dbcard.find().exec().then((item) => { return this.setState({ id: item.length }) });
}

//Añadir las consultas a la colección de las base de datos
async hundleClick(e) {
    e.preventDefault();
    //Creamos una instancia con la colección
    const rxdb = await DatabaseBelen();

    //Insertamos los datos a la colección de la base de datos
    rxdb.insert({
        id: `${this.state.id + 1}`,
        nombre: this.state.name,
        email: this.state.correo,
        opcion: this.state.especialidad,
        celular: this.state.telefono,
        fechacard: `${new Date().toDateString()}`,
        horacard: `${new Date().getHours()}:${new Date().getMinutes()}`,
    })

    this.setState({ modal: true })
}
  render() {
    const slogan = 'La tarjeta que te cuida.';
    const imagen = 'belen-card';
    const text = 'text-end';
    const textColor = 'text-white';
    const bgColor = 'bg-warning';
    const textDark = 'text-dark';

    return (
      <div className='bg-white'>
          <Nav />
          <Header title='BELEN CARD' slogan={slogan} imagen={imagen} text={text} textColor={textColor} bgColor={bgColor} textDark={textDark} />
          <div className='container-xl'>
              <div className='row justify-content-center mt-5 py-lg-5'>
                  <div className="col-md-8 col-lg-7 col-xl-8 d-flex flex-column align-items-center">
                      <img src={BelenCard} className='icono' />
                      <h1 className="display-5 fw-bold color text-center mt-5">Cuida a toda tu familia</h1>
                      <h5 className='lead text-center'>Conoce como obtener nuestra tarjeta</h5>    
                  </div>
              </div>
          </div>
          <div className='container-xl mt-5'>
              <div className='row align-items-center justify-content-center bka-color p-5'>
                  <div className='col-12 col-md-10 col-lg-7 col-xl-6 d-none d-lg-block'>
                      <h5 className='display-6 fw-bolder color text-center text-xl-start'>Es más fácil de lo que piensas</h5>
                      <h6 className='mt-2 mt-lg-4 lead text-center text-xl-start'>Solo sigue estos sencillos pasos, y eso será todo.</h6>
                  </div>         
                  <div className='col-12 col-md-10 col-lg-7 col-xl-6 d-flex justify-content-center flex-wrap bka-color p-3 p-md-0 p-lg-0 gap-2 mt-lg-0'>
                      <div className='bk-color d-flex flex-column align-items-center justify-content-center yellow rounded anchoBelen heightBelen' >
                          <h1 className='text-dark fw-bold'>1</h1>
                          <h6 className='text-dark fw-bold'>Copia de DNI</h6>
                      </div>
                      <div className='bk-color d-flex flex-column align-items-center justify-content-center rounded anchoBelen heightBelen'>
                          <h1 className='text-white fw-bold'>2</h1>
                          <h6 className='text-white fw-'>Llene el formulario</h6>
                      </div>
                      <div className='bk-color d-flex flex-column align-items-center justify-content-center rounded anchoBelen heightBelen'>
                          <h1 className='text-white fw-bold'>3</h1>
                          <h6 className='text-white'>Pague su tarjeta (s/100)</h6>
                      </div>
                      <div className='bk-color d-flex flex-column align-items-center justify-content-center yellow rounded anchoBelen heightBelen' >
                          <h1 className='text-dark fw-bold'>4</h1>
                          <h6 className='text-dark fw-bold'>Afilie a su familia nuclear</h6>
                      </div>
                  </div>
              </div>        
          </div>
          <div className='container-xl py-5 px-4 px-md-5 px-lg-5 px-xl-0'>
              <div className='row align-items-center p-3 p-md-4 p-lg-5 border'>
                  <div className='col-xl-5'>
                      <h3 className='lead text-muted'>¿Entonces que es Belen Card?</h3>
                  </div>
                  <div className='col-xl-7 p-3 p-md-4 p-lg-5 bk-color rounded mt-3 mt-lg-0'>
                      <p className='text-white-50 text-justify lh-base'>Belén Card es una tarjeta de protección familiar que contiene un paquete de tratamientos preventivos,
                        valorizado en el mercado de salud dental por S/700.00 Soles, contiene descuentos especiales y
                        puedes acceder a crédito directo y pagar todos tus tratamientos dentales hasta en 12 meses sin intereses (previa evaluación).</p>
                  </div>
              </div>          
          </div>
          <div className='container-xl px-4 px-md-5 px-lg-5 px-xl-0'>
              <div className='row justify-content-center'>
                  <div className='col-xl-6'>
                    <h1 className='lead text-center display-6 fw-bold color'>Beneficios</h1>
                  </div>
              </div>
              <div className='row row-column-1 flex-wrap gap-2 justify-content-center mt-3 mt-md-4 mt-lg-5'>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Evaluación Integral (Lista de familiares).</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Una curación estética con Luz Halógena.</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Dos Limpiezas integrales.</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Una Radiografía Periapical.</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>1 sellante.</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Cubre el 50% odontología Básica: Profilaxis y destartraje.</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Cubre el 30% en odontología básica: Curaciones, extracciones simples, fisioterapia, Flúor y sellantes.</h6></div>
                  <div className='col-xl-9 px-3 px-md-4 px-lg-5 py-3 bka-color'><h6>Cubre el 20% en: Clareamiento (Blanqueamiento) dental, carillas, ortodoncia, incrustaciones, endodoncia, ortodoncia, coronas fijas de porcelana, zirconio. Prótesis parciales removibles, prótesis totales, estética dental, tratamientos de odontopediatría.</h6></div>
                </div>
          </div> 
          <div className='container-xl py-5 px-4 px-md-5 px-lg-5 px-xl-0'>
              <div className='row border p-3 p-md-4 p-lg-5'>
                  <div className='col-xl-7 bk-color p-3 p-md-4 p-lg-5 rounded'>
                    <h1 className='display-6 fw-bold text-white'>Contáctanos</h1>
                    <p className='text-white-50 mt-3'>Si bien hemos hablado sobre que es realmente nuestra tarjeta y sus beneficios, envíenos una solicitud y nuestro equipo le enviará un correo electrónico detallando una proforma, entre otras cosas.</p>
                  </div>
                  <div className='col-xl-5 d-flex justify-content-center align-items-center mt-4 mt-lg-0'>
                    <button className='btn shadow-sm rounded-pill text-dark px-5 py-3' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:'#82E0AA'}} >Enviar solictud</button>
                  </div>
              </div>        
          </div>         
          <iframe className='w-100 border mt-5' style={{ height: '30rem', zIndex:'10'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>   
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            {!this.state.modal ? <div className="d-flex px-4 pt-3">
                                <p className="modal-title my-auto" id="exampleModalLabel">Llene correctamente sus datos.</p>
                                <button className='btn bk-color text-white px-3 py-2 ms-auto' data-bs-dismiss="modal" aria-label="Close"><code className='text-white'>X</code></button>
                            </div> : ''}
                            <div class="modal-body p-4">
                                {!this.state.modal ? <form onSubmit={this.hundleClick}>
                                    <input
                                        type="input"
                                        name="name"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault204"
                                        required
                                        placeholder='Nombres'
                                        onChange={this.hundleChange} />
                                    <input
                                        type="input"
                                        name="telefono"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault024"
                                        required
                                        placeholder='Teléfono'
                                        onChange={this.hundleChange} />
                                    <input
                                        type="email"
                                        name="correo"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault022"
                                        required
                                        placeholder='Correo'
                                        onChange={this.hundleChange} />
                                    <select
                                        name="especialidad"
                                        id="validationDefault033"
                                        required
                                        onChange={this.hundleChange}
                                        className="form-control mt-2 py-3">
                                        <option>Selecciona una opción</option>
                                        <option>Adquirir tarjeta</option>
                                        <option>Quiero más información sobre Belen Card</option>
                                    </select>
                                    <button className='form-control mt-2 btn bk-color text-white py-3'>Enviar</button>
                                </form> : <div className='text-center'><p>Sus datos se han enviado correctamente</p><button  className='btn bk-color text-white px-3 py-2' data-bs-dismiss="modal" aria-label="Close">Entendido</button></div>}
                            </div>
                        </div>
                    </div>
                </div>
          <Footer />
      </div>
    );
  }
}

export default App;