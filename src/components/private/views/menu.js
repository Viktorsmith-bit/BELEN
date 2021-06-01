import React from 'react';
import logo from '../../assets/images/Inicio/logo/LogoAzul.png';

export default function Hook() {
    return (
        <div className='container-fluid' style={{height:'5rem'}}>
            <nav className="fixed-top container-xxl navbar navbar-expand-lg navbar-light bg-color" style={{height:'5rem'}}>
                <div className="container-fluid">
                    <img src={logo} alt='Clínica Belén' style={{height:'4rem', width:'9rem'}} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className='ms-auto' href="javascript:location.reload()"><button type="button" className="btn bg-light px-4 py-2">Cerrar sesión</button></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
