import React, { Component } from "react";
import Especialidades from "./section/especialidades";
import Protocolos from "./section/protocolos";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="w-100 mt-lg-5 mb-lg-5 mb-xl-0 py-5">
          <h1 className="display-5 fw-bold color text-center">Nuestras Especialidades</h1>
          <h5 className='lead text-center'>Conoce nuestros Tratamientos</h5>
          <Especialidades /> 
        </div>
        <Protocolos />
        <iframe className='w-100 mt-5' style={{ height: '25rem'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </section>
    );
  }
}

export default App;
