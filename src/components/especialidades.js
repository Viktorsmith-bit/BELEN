import React, { Component } from 'react';
import Nav from './contents/nav';
import Header from './contents/header';
import Card from './contents/card';
import Blog from './assets/images/Blog/dentista.svg'
import Footer from './contents/footer';

class App extends Component {
  render() {
    const slogan = 'Reserve en línea. Es fácil, rápido y seguro';
    const imagen = 'belen-dent';
    return (
      <div className='bg-white'>
        <Nav />
        <Header title='NUESTRO BLOG' slogan={slogan} imagen={imagen} />
        <div className='container-xl'>
          <div className='row justify-content-center py-5 mt-lg-5'>
              <div className="col-xl-10 d-flex flex-column align-items-center">
                  <img src={Blog} className='icono' />
                  <h1 className="display-5 fw-bold color text-center mt-5">Mantente Informado</h1>
                  <h5 className='lead text-center'>Encuentre los mejores consejos en nuestro blog</h5>    
              </div>
          </div>
        </div>
        <Card/>
        <iframe className='w-100 border mt-5' style={{ height: '25rem'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d983.6874310176231!2d-77.5256609219123!3d-9.530460008635108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scl%C3%ADnica%20dental%20Belen%2C%20Huaraz!5e0!3m2!1ses-419!2spe!4v1604766633434!5m2!1ses-419!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <Footer />
      </div>
    );
  }
}

export default App;