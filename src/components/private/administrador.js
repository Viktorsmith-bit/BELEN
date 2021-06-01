import React, { useState, useEffect } from 'react';
import DataDB from '../database/database';

export default function Hook() {
    
    useEffect(() => {
        async function rxDB() {
            //creamos una instancia con la base de datos
            const rxdb = await DataDB();

            //seleccionamos el ID donde insertaremos las consultas realizadas
            const id = document.getElementById('id');
            const name = document.getElementById('name');
            const correo = document.getElementById('correo');
            const especialidad = document.getElementById('especialidad');
            const telefono = document.getElementById('telefono');
            const turno = document.getElementById('turno');
            const fecha = document.getElementById('fecha');
            const hora = document.getElementById('hora');

            //realizamos las consultas a la base de datos
            const rx = rxdb.find().$
                .subscribe((items) => {
                    id.innerHTML = items.map((item) => { return '<p>' + item.id + '</p>' }).join('')
                    name.innerHTML = items.map((item) => { return '<p>' + item.name + '</p>' }).join('')
                    correo.innerHTML = items.map((item) => { return '<p>' + item.correo + '</p>' }).join('')
                    especialidad.innerHTML = items.map((item) => { return '<p>' + item.especialidad + '</p>' }).join('')
                    telefono.innerHTML = items.map((item) => { return '<p>' + item.telefono + '</p>' }).join('')
                    turno.innerHTML = items.map((item) => { return '<p>' + item.turno + '</p>' }).join('')
                    fecha.innerHTML = items.map((item) => { return '<p>' + item.fecha + '</p>' }).join('')
                    hora.innerHTML = items.map((item) => { return '<p>' + item.hora + '</p>' }).join('')
                });
        }
        rxDB();
    })

    return (
        <div className=''>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th><h6>ID</h6></th>
                            <th><h6>Nombres</h6></th>
                            <th><h6>Correo</h6></th>
                            <th><h6>Especialidad</h6></th>
                            <th><h6>Teléfono</h6></th>
                            <th><h6>Turno</h6></th>
                            <th><h6>Fecha</h6></th>
                            <th><h6>Hora</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id='id'></td>
                            <td id='name'></td>
                            <td id='correo'></td>
                            <td id='especialidad'></td>
                            <td id='telefono'> </td>
                            <td id='turno'></td>
                            <td id='fecha'></td>
                            <td id='hora'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}