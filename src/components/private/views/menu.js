import React from 'react';

export default function Hook() {
    return (
        <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-3 shadow" style={{ backgroundColor: '#34495E' }}>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav px-3 mr-auto">
                <li className="nav-item text-nowrap">
                    <h1 className='text-white'>Dental Belén</h1>
                </li>
            </ul>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a href="javascript:location.reload()"><button className="btn btn-outline-warning">Cerrar Sesión</button></a>
                </li>
            </ul>
        </nav>
    );
}
//<a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Dental Belén</a>
//<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />