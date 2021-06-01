import React, { Component } from 'react';
import Nav from './contents/nav';
import Header from './contents/header';
import DatabaseBelen from './database/db/database.belen';
import Footer from '../components/contents/footer';
import Credito from './assets/images/Credito-directo/checkup.svg';

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
    const slogan = 'Hasta en 12 meses.';
    const imagen = 'credito';
    const text = 'text-start';

    return (
      <div className='bg-white'>
            <Nav />
            <Header title='CRÉDITO DIRECTO' slogan={slogan} imagen={imagen} text={text} />
            <div className='container-xl'>
                <div className='row justify-content-center mt-5 py-lg-5'>
                <div className="col-md-8 col-lg-7 col-xl-8 d-flex flex-column align-items-center">
                    <img src={Credito} className='icono' />
                    <h1 className="display-5 fw-bold color mt-lg-3">Mejora tu sonrisa</h1>
                    <h5 className='lead'>Pide tu crédito directo</h5>    
                </div>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center py-5 gap-3 gap-lg-3 px-3 px-md-0 px-lg-0'>
                <div className='border shadow-sm p-4 anchoCredito'>
                    <div className='d-flex justify-content-center gap-3'>
                        <h4 className='text-dark my-auto lead fw-bold'>¿Ques es Crédito Directo?</h4>
                    </div>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm text-muted'>No tener informe negativo en una central de riesgo</h6>
                </div>  
                <div className='border shadow-sm p-4 anchoCredito' >
                    <div className='d-flex justify-content-center gap-3'>
                        <h4 className='text-dark my-auto lead fw-bold'>Requisitos</h4>
                    </div>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm text-muted'>No tener informe negativo en una central de riesgo</h6>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Percibir un ingreso mínimo de S/ 700 (esto definirá la línea de crédito)</h6>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Tener más de 8 meses laborando</h6>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Tener una edad de 19 a 70 años</h6>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-2 py-2 lh-sm text-muted'>Copia de Recibo de Agua o Luz</h6>
                    <h6 className='text-start mt-2 py-2 lh-sm text-muted'>Copia de boleta de pago o recibo por honorarios</h6>
                </div>
                <div className='border shadow-sm p-4 anchoCredito' >
                    <div className='d-flex justify-content-center gap-3'>
                        <h4 className='text-dark my-auto lead fw-bold'>Diferencias con Belen Card</h4>
                    </div>
                    <h6 className='text-start border border-top-0 border-start-0 border-end-0 mt-4 py-2 lh-sm text-muted'>No tener informe negativo en una central de riesgo</h6>
                </div>                  
            </div>
            <h6 className='text-center mt-lg-4 lead'>Ponte en contacto con nosotros</h6>
            <div className='d-flex justify-content-center align-items-center mt-4 mb-5'>
                <button className='btn shadow-sm rounded-pill text-dark px-5 py-3' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:'#82E0AA'}} >Solicitar crédito directo</button>
            </div>        
            <iframe className='w-100 border mt-5' style={{ height: '30rem', zIndex:'10'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>   
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                {!this.state.modal ? <div class="d-flex px-4 pt-3">
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
                                            <option>Adquirir crédito</option>
                                            <option>Quiero más información sobre Crédito Directo</option>
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