import React, { useState, useEffect } from 'react';
import Menu from './menu';
import Aside from './aside';
import Header from './header';
import Reservacion from '../administrador';
import Belencard from './content/belencard';
import Help from './content/helpPhone';
import {Toast} from './content/belencard';

export default function Hook() {
    const [reset, setReset] = useState(true);
    const [card, setCard] = useState(false);
    const [ayuda, setAyuda] = useState(false);

    function hundleConditional(e) {
        e.preventDefault();
        setReset(true);
        setCard(false);
        setAyuda(false);
    }
    function hundleConditionalCard(e) {
        e.preventDefault();
        setReset(false);
        setCard(true);
        setAyuda(false);
    }
    function hundleConditionalHelp(e) {
        e.preventDefault();
        setReset(false);
        setCard(false);
        setAyuda(true);
    }
    return (
        <div className='container-fluid'>
            <Menu />
            <div className='container-fluid bg-white' style={{zIndex:'10'}} >
                <div className='row p-3'>
                    <div className='col-lg-2' style={{ backgroundColor: '#34495E ' }}>
                        <Aside evento={hundleConditional} eventoCard={hundleConditionalCard} eventoHelp={hundleConditionalHelp} />
                    </div>
                    <div className='col-lg-10' style={{ backgroundColor: '#ECF0F1 ' }}>
                        <Header />
                        <h6 className='fw-bold'>CONSULTAS</h6>
                        {reset === true ? <Reservacion /> : null}
                        {card === true ? <Belencard /> : null}
                        {ayuda === true ? <Help /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
