import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <div class="album py-5 bg-light">
                    <div class="container">
                        <h1 className="display-4 text-center">{this.props.admin}</h1>
                        <p className='lead text-center'> {this.props.sub} </p>
                        <div class="row justify-content-center" style={{marginTop:'3rem'}}>
                            <div class="col-md-5" >
                                <div class="card mb-4 shadow-sm" >
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                    <div class="card-body" >
                                        <p class="card-text text-center"> {this.props.title} </p>
                                        <p class="card-text text-center"> {this.props.subtitle} </p>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">{this.props.profesion}</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">{this.props.area}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="card mb-4 shadow-sm" >
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                    <div class="card-body">
                                        <p class="card-text text-center">{this.props.title2}</p>
                                        <p class="card-text text-center"> {this.props.subtitle2} </p>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">{this.props.prefesion2}</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">{this.props.area2}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                                                                                                                          
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
