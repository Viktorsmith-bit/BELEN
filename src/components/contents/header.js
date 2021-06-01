import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <div className='header'>
                <div className={`${this.props.imagen} marginTop heightImage`}>
                    <div className='container-fluid'>
                        <div className="container-xxl py-5 py-md-5 py-lg-4" >
                            <div className='row py-3 py-md-5 py-lg-5'>
                                <div className={`col-lg-12 p-3 p-lg-5 d-none d-md-block d-lg-block ${this.props.text}`} >
                                    <h1 className={`display-1 fw-bold text-wrap color ${this.props.textColor}`}>{this.props.title}</h1>
                                    <p className={`lead ${this.props.textColor}`}>{this.props.slogan}</p>
                                    <Link className={`btn px-5 py-3 text-white bk-color fw-bold ${this.props.bgColor}`} to='/reservacion'><span className={`${this.props.textDark}`}>Reservar cita</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 p-3 p-lg-5 text-center d-md-none d-lg-none'>
                    <h1 className='display-1 fw-bold text-wrap color'>{this.props.title}</h1>
                    <p className='lead color'>{this.props.slogan}</p>
                    <Link className='btn px-5 py-3 text-white bk-color fw-bold bk-color' to='/reservacion'>Reservar cita</Link>
                </div>
            </div>
        );
    }
}

export default App;
