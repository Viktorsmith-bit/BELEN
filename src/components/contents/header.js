import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div className={`${this.props.imagen} marginTop`}>
                <div className='container-fluid'>
                    <div className="container-xl py-5 py-md-5 py-lg-5" >
                        <div className='row justify-content-center py-3 py-md-5 py-lg-5'>
                            <div className="col-lg-10 p-3 p-lg-5 text-center" >
                                <h1 className="display-1 fw-bold text-wrap color ">{this.props.title}</h1>
                                <p className="lead text-dark">{this.props.slogan}</p>
                                <Link className="btn px-5 py-3 text-white" to='/reservacion' style={{backgroundColor:'#233554' }}>Reservar cita</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
