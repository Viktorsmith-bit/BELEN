import React, { Component } from 'react'

export default class modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        }
        this.hundleClick = this.hundleClick.bind(this);
    }

    hundleClick(e) {
        e.preventDefault();
        this.setState({
            modal: false
        })
    }
    render() {
        return (
            <div className="modal fade" id={this.state.telefono !== '' && this.state.nombre !== '' ? 'exampleModal' : ''} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Se envió correctamente</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Tenga nuestro más grato saludo, y decirle que la esperamos en la fecha indicada, si necesita cambiar la fecha,
                            no dude en comunicarse con nosotros, y la reprogramaremos una nueva fecha.
                            </div>
                        <div className="modal-footer">
                            <button data-dismiss="modal" type="button" className="btn btn-sm btn-outline-secondary ml-2 w-25 mt-3">Entendido</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
