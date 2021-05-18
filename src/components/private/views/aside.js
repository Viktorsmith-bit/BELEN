import React from 'react';

export default function Hook(props) {
    return (
        <div className='container-fluid p-5'>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button onClick={props.evento} className='btn btn-outline-warning w-100' style={{ width: '9rem' }} >Reservaciones</button>
                    <button onClick={props.eventoCard} className='btn btn-outline-warning mt-3 w-100' style={{ width: '9rem' }} >Belén Card</button>
                    <button onClick={props.eventoHelp} className='btn btn-outline-warning mt-3 w-100' style={{ width: '9rem' }} >Ayuda Telefónica</button>
                </li>
            </ul>
        </div>
    );
}