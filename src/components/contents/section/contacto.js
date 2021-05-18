import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Database from '../../database/database';

export default class contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: 0,
            lastname: '',
            phone: '',
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
        const dbcard = await Database();
        const rx = dbcard.find().exec().then((item) => { return this.setState({ id: item.length }) });
    }

    //Añadir las consultas a la colección de las base de datos
    async hundleClick(e) {
        e.preventDefault();
        //Creamos una instancia con la colección
        const rxdb = await Database();

        //Insertamos los datos a la colección de la base de datos
        rxdb.insert({
            id: `${this.state.id + 1}`,
            name: '*******',
            correo: '*******',
            especialidad: '*******',
            telefono: '*******',
            turno: '*******',
            fecha: '*******',
            hora: '*******',
            nombre: '*******',
            email: '*******',
            opcion: '*******',
            celular: '*******',
            fechacard: '*******',
            horacard: '*******',
            lastname: this.state.lastname,
            phone: this.state.phone,
            fechahelp: `${new Date().toDateString()}`,
            horahelp: `${new Date().getHours()}:${new Date().getMinutes()}`,
        })
        this.setState({ modal: true })
    }
    render() {
        return (
            <div className="collapse bg-dark mt-n4" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white text-left">Contacto</h4>
                            <p className="text-muted text-left">Por que en Dental Belén nos importa las emergencias que puede tener, por eso hemos habilitado distintos canales de contacto, elija la que mejor se adecúa a usted. Reserve la fecha, o llame si es una emergencia,
                                    también le podemos llamar, solo tiene que ingresar sus datos, y nosotros le llamamos en el más breve tiempo posible.</p>
                            <butto className='btn btn-outline-warning float-left' data-toggle="modal" data-target="#exampleModalHelp">Te llamamos</butto>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <ul className="list-unstyled text-righ">
                                <li><a href='#' className="text-white" data-toggle="modal" data-target="#exampleModalMap">Ver mapa</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalHelp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            {!this.state.modal ? <div className="modal-header px-4">
                                <p className="modal-title" id="exampleModalLabel">Llene correctamente sus datos</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> : ''}
                            <div class="modal-body p-4">
                                {!this.state.modal ? <form onSubmit={this.hundleClick}>
                                    <input
                                        type="input"
                                        name="lastname"
                                        className="form-control mt-2"
                                        id="validationDefault204"
                                        required
                                        placeholder='Nombres'
                                        onChange={this.hundleChange} />
                                    <input
                                        type="input"
                                        name="phone"
                                        className="form-control mt-2"
                                        id="validationDefault024"
                                        required
                                        placeholder='Teléfono'
                                        onChange={this.hundleChange} />
                                    <button className='form-control mt-2 btn btn-outline-success'>Enviar</button>
                                </form> : <div><p>Sus datos se enviaron correctamente</p><button data-dismiss="modal" type="button" className="btn btn-sm btn-outline-secondary ml-2 w-25">Entendido</button></div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade " id="exampleModalMap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ height: '50rem', width: '70rem' }}>
                            <div className='row justify-content-center'>
                                <div className='p-5'>
                                    <iframe style={{ height: '40rem', width: '60rem' }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
