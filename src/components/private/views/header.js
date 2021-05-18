import React, { useState, useEffect } from 'react';
import DataDB from '../../database/database';

export default function Hook() {
    const [state, setState] = useState(true);

    async function hundleSubmit(e) {
        e.preventDefault();
        setState(false);
        const rxDB = await DataDB();
        return rxDB.remove();
        
    }
    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                    <button data-toggle="modal" data-target="#exampleModalHelp" type="button" className="btn btn-sm btn-outline-secondary">Borrar Todo</button>
                </div>
            </div>
            <div class="modal fade" id="exampleModalHelp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            {state?<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>:''}
                        </div>
                        <div class="modal-body text-center">
                            {state?<div><p>Está seguro que desea eliminar su base de datos?</p>
                            <button onClick={hundleSubmit} type="button" className="btn btn-sm btn-outline-secondary w-25">SI</button>
                            <button data-dismiss="modal" type="button" className="btn btn-sm btn-outline-secondary ml-2 w-25">NO</button></div>:<div><p>Su base de datos se eliminó correctamente, para ver los cambios, recargue la página.</p><button data-dismiss="modal" type="button" className="btn btn-sm btn-outline-secondary ml-2 w-25">Entendido</button></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
