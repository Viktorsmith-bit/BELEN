import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './home';
import BelenCard from './belenCard';
import Especialidades from  './especialidades';
import Reservacion from './reservacion';
import Precing from './sample/precing';
import Protocolos from './protocolos';
import Signin from './config/signin';
import CreditoDirecto from './creditoDirecto';

class App extends Component {
    render() {
        return (           
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/nosotros' component={Protocolos} />
                    <Route path='/belenCard' component={BelenCard} />
                    <Route path='/credito' component={CreditoDirecto} />
                    <Route path='/especialidades' component={Especialidades} />
                    <Route path='/Reservacion' component={Reservacion} />
                    <Route path='/precing' component={Precing} />
                    <Route path='/sesion/id' component={Signin} />
                </Switch>
            </Router> 
        );
    }
}

export default App;