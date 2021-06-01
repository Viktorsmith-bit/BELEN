import React, { Component } from 'react';
import Tarjeta from './tarjeta';
import Database from '../database/database';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nombre: '',
      correo: '',
      turno: '',
      telefono: '',
      fecha: '',
      hora: '',
      especialidad: '',
      modal: false,
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
    const db = await Database();
    const rx = db.find().exec().then((item) => { return this.setState({ id: item.length }) });
  }

  //Añadir las consultas a la colección de las base de datos
  async hundleClick(e) {
    e.preventDefault();
    //Creamos una instancia con la colección
    const rxdb = await Database();

    //Insertamos los datos a la colección de la base de datos
    rxdb.insert({
      id: `${this.state.id + 1}`,
      name: this.state.nombre,
      correo: this.state.correo,
      especialidad: this.state.especialidad,
      telefono: this.state.telefono,
      turno: this.state.turno,
      fecha: this.state.fecha,
      hora: this.state.hora,
      nombre: '*******',
      email: '*******',
      opcion: '*******',
      celular: '*******',
      fechacard: '*******',
      horacard: '*******',
      lastname: '*******',
      phone: '*******',
      fechahelp: '*******',
      horahelp: '*******',
    })

    this.setState({modal:false})
  }
  render() {
    return (
      <div className='container-xl mt-3 mt-lg-5 py-5 mb-5 px-3 px-md-5 px-lg-4 px-xl-0'>
        <div className='modal fade' id={this.state.telefono !== '' && this.state.nombre !== '' && this.state.nombre !== '' 
          && this.state.correo !== '' && this.state.especialidad !== '' && this.state.fecha !== '' && this.state.hora !== '' && this.state.turno !== ''? 'exampleModal' : '' }
          tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" >
            <div className="modal-content">
              <div className="px-5 py-3 text-center">
                <h6 className="fw-bold" id="exampleModalLabel">Sus datos enviaron correctamente. En unos minutos nuestro equipo se pondrá en contacto con usted.</h6>
                <p>Le esperamos en la fecha indicada. Gracias por elegir Belén clínica Dental Especializada.</p>
              </div>
              <div className="modal-footer">
                <button className='btn bk-color text-white px-3 py-2 mx-auto' data-bs-dismiss="modal" aria-label="Close">Entendido</button>
              </div>
            </div>
          </div>
        </div> 
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-xl-8'>
            <p className='lead text-center fw-bold'>Reserva tu cita</p>
            <form className='shadow-sm border bg-white rounded p-3 p-md-4 p-lg-4' onSubmit={this.hundleClick}>
              <div className="form-row d-flex gap-2">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault01">Nombres</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control" id="valid01"
                    required
                    onChange={this.hundleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault02">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    id="validationDefault02"
                    required
                    onChange={this.hundleChange} />
                </div>
              </div>
              <div className="form-row d-flex flex-wrap gap-2">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault03">Especialidad</label>
                  <select
                    name="especialidad"
                    id="validationDefault03"
                    required
                    onChange={this.hundleChange}
                    className="form-control">
                    <option>Elija una opción</option>
                    <option>Implantes</option>
                    <option>Ortodoncia</option>
                    <option>Estética Dental</option>
                    <option>Ortodoncia</option>
                    <option>Odontopediatría</option>
                    <option>Es una emergencia</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationDefault04">Fecha</label>
                  <input
                    type="date"
                    name="fecha"
                    className="form-control"
                    id="validationDefault03"
                    required
                    onChange={this.hundleChange} />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationDefault05">Hora</label>
                  <input
                    type="time"
                    name="hora"
                    className="form-control"
                    id="validationDefault05"
                    required
                    onChange={this.hundleChange} />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationDefault05">Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    className="form-control"
                    id="validationDefault06"
                    required
                    onChange={this.hundleChange} />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationDefault05">Turno</label>
                  <select
                    name="turno"
                    id="validationDefault03"
                    required
                    onChange={this.hundleChange}
                    className="form-control">
                    <option>Elija una opción</option>
                    <option>Mañana</option>
                    <option>Tarde</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="form-control btn text-white py-3"
                  style={{backgroundColor:'#233554' }}
                  data-bs-toggle={!this.state.modal ? 'modal' : ''}
                  data-bs-target="#exampleModal"
                  value='Reservar cita' />
              </div>
            </form>
          </div>
          <div className='col-lg-4 col-xl-4'>
            <Tarjeta />
          </div>
        </div>
      </div>
    );
  }
}


export default App;






