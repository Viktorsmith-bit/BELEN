import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatabaseCall from '../database/db/database.call';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            id: 0,
            lastname: '',
            phone: '',
        }
        this.hundleChange = this.hundleChange.bind(this);
        this.hundleClick = this.hundleClick.bind(this);
        this.hundleClickCloseModal = this.hundleClickCloseModal.bind(this);
    }
    hundleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hundleClickCloseModal(e){
        e.preventDefault();
        this.setState({modal:true})
    }
    async componentDidMount() {
        const dbcard = await DatabaseCall();
        const rx = dbcard.find().exec().then((item) => { return this.setState({ id: item.length }) });
    }

    //Añadir las consultas a la colección de las base de datos
    async hundleClick(e) {
        e.preventDefault();
        //Creamos una instancia con la colección
        const rxdb = await DatabaseCall();

        //Insertamos los datos a la colección de la base de datos
        rxdb.insert({
            id: `${this.state.id + 1}`,
            lastname: this.state.lastname,
            phone: this.state.phone,
            fechahelp: `${new Date().toDateString()}`,
            horahelp: `${new Date().getHours()}:${new Date().getMinutes()}`,
        })
        this.setState({ modal: true })
    }
    render() {
        return (
            <div className='belenDental marginTop'>
                <div className='modal fade' id={this.state.lastname !== '' && this.state.phone !== ''? 'exampleModal' : '' }
                    tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered text-center" >
                        <div className="modal-content">
                        <div className="px-5 py-3">
                            <h6 className='fw-bold' id="exampleModalLabel">Nuestro equipo se comunicará con usted</h6>
                            <p>Por favor estar atento a su celular</p>
                        </div>
                        <div className="modal-footer">
                            <button className='btn bk-color text-white px-3 py-2 mx-auto' data-bs-dismiss="modal" aria-label="Close">Entendido</button>
                        </div>
                        </div>
                    </div>
                </div>            
                <div className='container-xxl py-3'>               
                      <div className='row justify-content-center py-xl-5 py-xxl-5 px-md-5 px-lg-4 px-xl-0 py-5 py-md-2 py-lg-4 py-xl-0 py-xxl-3'>                              
                          <div className='col-12 col-md-12 col-lg-7 col-xl-7 py-5' >
                              <h1 className='display-2 fw-bolder color text-center text-lg-start color' >BIENVENIDO A NUESTRA CLÍNICA</h1>
                              <h1 className='text-center lead text-lg-start d-lg-none'>Disfrute de nuestra atención</h1> 
                              <h1 className='text-start lead d-none d-lg-block mt-2 color'>Visítenos, no deje que su miedo a sufrir, sea más grande que sus ganas de sonreír.</h1>                          
                              <div className='d-flex justify-content-center justify-content-lg-start gap-3'>
                                <div className='px-5 btn d-flex justify-content-center align-items-center yellow shadow-lg ml-auto py-2 mt-3 rounded hiddenButton' data-bs-toggle="modal" data-bs-target="#exampleModalTablet">
                                    <p className='my-auto text-decoration-none text-dark fw-bold'>Te llamamos</p>
                                </div>
                              </div>
                          </div>                       
                          <div className='col-12 col-md-10 col-lg-5 col-xl-4 align-self-center hidden'>
                              <div className='d-flex flex-column align-items-center align-items-lg-end gap-2 mt-3'>
                                  <form onSubmit={this.hundleClick} className='anchoHeader back-color p-3 rounded'>
                                      <label className='text-center fw-bold mx-auto text-white'>Te llamamos</label>
                                      <p className='text-white'>Llene correctamente sus datos</p>
                                    <input
                                        type="input"
                                        name="lastname"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault204"
                                        required
                                        placeholder='Nombres y apellidos'
                                        onChange={this.hundleChange} />
                                    <input
                                        type="input"
                                        name="phone"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault024"
                                        required
                                        placeholder='Teléfono'
                                        onChange={this.hundleChange} />
                                    <button className='form-control mt-2 btn bg-light py-3 fw-bold' data-bs-toggle={!this.state.modal ? 'modal' : ''} data-bs-target="#exampleModal">Enviar</button>
                                </form>
                                <Link to='/reservacion'><button className='btn text-white back-color fw-bold anchoHeader py-3'>O pide tu cita online</button></Link>
                                  
                              </div>
                          </div>
                      </div>                  
                </div>
                <div class="modal fade" id="exampleModalTablet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            {!this.state.modal ? <div className="d-flex px-4 pt-3">
                                <p className="modal-title my-auto" id="exampleModalLabel">Llene correctamente sus datos.</p>
                                <button className='btn bk-color text-white px-3 py-2 ms-auto' data-bs-dismiss="modal" aria-label="Close"><code className='text-white'>X</code></button>
                            </div> : ''}
                            <div className="modal-body p-4">
                                {!this.state.modal ? <form onSubmit={this.hundleClick}>
                                    <input
                                        type="input"
                                        name="lastname"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault204"
                                        required
                                        placeholder='Nombre y apellido'
                                        onChange={this.hundleChange} />
                                    <input
                                        type="input"
                                        name="phone"
                                        className="form-control mt-2 py-3"
                                        id="validationDefault024"
                                        required
                                        placeholder='Teléfono'
                                        onChange={this.hundleChange} />
                                    <button className='form-control mt-2 btn bk-color text-white py-3'>Enviar</button>
                                </form> : <div><p>Sus datos se enviaron correctamente</p><button className='btn bk-color text-white px-3 py-2' data-bs-dismiss="modal" aria-label="Close">Entendido</button></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
