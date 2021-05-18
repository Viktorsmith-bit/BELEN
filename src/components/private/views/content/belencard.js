import React, { useState, useEffect } from 'react';
import DataDB from '../../../database/database';

export default function Hook() {
    const [state, setState] = useState('Odontopediatria');


    useEffect(() => {
        async function rxDB() {
            //creamos una instancia con la base de datos
            const rxdb = await DataDB();

            //seleccionamos el ID donde insertaremos las consultas realizadas
            const id = document.getElementById('id');
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const opcion = document.getElementById('opcion');
            const celular = document.getElementById('celular');
            const fecha = document.getElementById('fecha');
            const hora = document.getElementById('hora');


            //realizamos las consultas a la base de datos
            const rx = rxdb.find().$
                .subscribe((items) => {
                    id.innerHTML = items.map((item) => { return '<p>' + item.id + '</p>' }).join('')
                    nombre.innerHTML = items.map((item) => { return '<p>' + item.nombre + '</p>' }).join('')
                    email.innerHTML = items.map((item) => { return '<p>' + item.email + '</p>' }).join('')
                    opcion.innerHTML = items.map((item) => { return '<p>' + item.opcion + '</p>' }).join('')
                    celular.innerHTML = items.map((item) => { return '<p>' + item.celular + '</p>' }).join('')
                    fecha.innerHTML = items.map((item) => { return '<p>' + item.fechacard + '</p>' }).join('')
                    hora.innerHTML = items.map((item) => { return '<p>' + item.horacard + '</p>' }).join('')
                });

        }
        rxDB();
    })


    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th><h6>ID</h6></th>
                        <th><h6>Nombres</h6></th>
                        <th><h6>Correo</h6></th>
                        <th><h6>Especialidad</h6></th>
                        <th><h6>Teléfono</h6></th>
                        <th><h6>Fecha</h6></th>
                        <th><h6>Hora</h6></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id='id'> </td>
                        <td id='nombre'></td>
                        <td id='email'></td>
                        <td id='opcion'></td>
                        <td id='celular'></td>
                        <td id='fecha'></td>
                        <td id='hora'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}