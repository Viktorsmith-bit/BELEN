import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './home';
import BelenCard from './belenCard';
import Especialidades from  './especialidades';
import Reservacion from './reservacion';
import Protocolos from './protocolos';
import Signin from './config/signin';
import CreditoDirecto from './creditoDirecto';
import Implantes from './especialidades/implantes';
import Endodoncia from './especialidades/endodoncia';
import EsteticaDental from './especialidades/estetica.dental';
import Ortodoncia from './especialidades/ortodoncia';
import Odontopediatria from './especialidades/odontopediatria';
class App extends Component {
    render() {
        return (           
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/nosotros' component={Protocolos} />
                    <Route path='/belen/card' component={BelenCard} />
                    <Route path='/credito/directo' component={CreditoDirecto} />
                    <Route path='/especialidades' component={Especialidades} />
                    <Route path='/Reservacion' component={Reservacion} />
                    <Route path='/implantes' component={Implantes} />
                    <Route path='/endodoncia' component={Endodoncia} />
                    <Route path='/estetica/dental' component={EsteticaDental} />
                    <Route path='/ortodoncia' component={Ortodoncia} />
                    <Route path='/odontopediatria' component={Odontopediatria} />
                    <Route path='/sistema/dental' component={Signin} />
                </Switch>
            </Router> 
        );
    }
}

export default App;