import React, { useState} from 'react';
import DataDB from '../../database/database';
import DatabaseBelen from '../../database/db/database.belen';
import DatabaseCall from '../../database/db/database.call';

export default function Hook() {
    const [state, setState] = useState(true);

    async function hundleSubmit(e) {
        e.preventDefault();
        setState(false);
        const rxDB = await DataDB();
        return rxDB.remove(); 
    }
    async function hundleSubmitBelen(e) {
        e.preventDefault();
        setState(false);
        const rxDB = await DatabaseBelen();
        return rxDB.remove(); 
    }
    async function hundleSubmitCall(e) {
        e.preventDefault();
        setState(false);
        const rxDB = await DatabaseCall();
        return rxDB.remove(); 
    }
    
    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h3 className="fw-bold">SISTEMA DE GESTIÓN</h3>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="d-flex gap-3">
                    <button type="button" className="btn btn-sm btn-outline-secondary py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Borrar Reservaciones</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary py-2" data-bs-toggle="modal" data-bs-target="#exampleModalBelen">Borrar Elije Belén</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary py-2" data-bs-toggle="modal" data-bs-target="#exampleModalCall">Borrar Llamadas</button>
                </div>
            </div>
            {/*Reservaciones*/}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {state?<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>:''}
                        </div>
                        <div className="modal-body text-center">
                            {state?<div><p>Está seguro que desea eliminar su base de datos?</p>
                            <button onClick={hundleSubmit} type="button" className="btn btn-sm btn-outline-secondary w-25">SI</button>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" className="btn btn-sm btn-outline-secondary ms-2 w-25">NO</button></div>:<div><p>Su base de datos se eliminó correctamente, para ver los cambios, recargue la página.</p><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" className="btn btn-sm btn-outline-secondary ml-2 w-25">Entendido</button></div>}
                        </div>
                    </div>
                </div>
            </div>
            {/*Elije Belén*/}
            <div className="modal fade" id="exampleModalBelen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {state?<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>:''}
                        </div>
                        <div className="modal-body text-center">
                            {state?<div><p>Está seguro que desea eliminar su base de datos?</p>
                            <button onClick={hundleSubmitBelen} type="button" className="btn btn-sm btn-outline-secondary w-25">SI</button>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" className="btn btn-sm btn-outline-secondary ms-2 w-25">NO</button></div>:<div><p>Su base de datos se eliminó correctamente, para ver los cambios, recargue la página.</p><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" className="btn btn-sm btn-outline-secondary ml-2 w-25">Entendido</button></div>}
                        </div>
                    </div>
                </div>
            </div>
            {/*Llamadas*/}
            <div className="modal fade" id="exampleModalCall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {state?<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>:''}
                        </div>
                        <div className="modal-body text-center">
                            {state?<div><p>Está seguro que desea eliminar su base de datos?</p>
                            <button onClick={hundleSubmitCall} type="button" className="btn btn-sm btn-outline-secondary w-25">SI</button>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" className="btn btn-sm btn-outline-secondary ms-2 w-25">NO</button></div>:<div><p>Su base de datos se eliminó correctamente, para ver los cambios, recargue la página.</p><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" className="btn btn-sm btn-outline-secondary ml-2 w-25">Entendido</button></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
