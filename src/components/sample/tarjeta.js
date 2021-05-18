import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div className='aside mt-5 mt-lg-1'>
                <h1 className='lead text-center fw-bold'>Recuerde</h1>
                <div className='p-3 p-md-4 p-lg-4 bg-white mt-3 shadow-sm border rounded'>
                    <p className='text-muted'>Debido a nuestras políticas de bioseguridad solo atendemos a dos pacientes por día, si lo que usted presenta es una emergencia, podemos hacer una excepción.</p>
                    <p className='text-muted'>Para esto nuestro equipo se pondrá inmediatamente en contacto con usted.</p>
                </div>
                <div className='p-3 p-md-4 p-lg-4 bg-white mt-3 shadow-sm border rounded'>
                    <p className='text-muted'>Recuerde que también puede agendar una cita con nosotros directamente a través de nuestras redes sociales o Whatsapp, o en última instancia le podemos llamar, solo llene los campos y eso es todo.</p>
                </div>
            </div>
        );
    }
}

export default App;