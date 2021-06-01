import React, { useEffect } from 'react';
import DatabaseCall from '../../../database/db/database.call';

export default function Hook() {

    useEffect(() => {
        async function rxDB() {
            //creamos una instancia con la base de datos
            const rxdb = await DatabaseCall();

            //seleccionamos el ID donde insertaremos las consultas realizadas
            const id = document.getElementById('id');
            const lastname = document.getElementById('lastname');
            const phone = document.getElementById('phone');
            const fecha = document.getElementById('fecha');
            const hora = document.getElementById('hora');

            //realizamos las consultas a la base de datos
            const rx = rxdb.find().$
                .subscribe((items) => {
                    id.innerHTML = items.map((item) => { return '<p>' + item.id + '</p>' }).join('')
                    lastname.innerHTML = items.map((item) => { return '<p>' + item.lastname + '</p>' }).join('')
                    phone.innerHTML = items.map((item) => { return '<p>' + item.phone + '</p>' }).join('')
                    fecha.innerHTML = items.map((item) => { return '<p>' + item.fechahelp + '</p>' }).join('')
                    hora.innerHTML = items.map((item) => { return '<p>' + item.horahelp + '</p>' }).join('')
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
                        <th><h6>Teléfono</h6></th>
                        <th><h6>Fecha</h6></th>
                        <th><h6>Hora</h6></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id='id'> </td>
                        <td id='lastname'></td>
                        <td id='phone'></td>
                        <td id='fecha'></td>
                        <td id='hora'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}