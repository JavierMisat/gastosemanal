import React, {Component} from 'react';
import './css/App.css';
import Header from "./components/Header";
import FormularioGasto from "./components/Formulario";
import Listado from "./components/Listado";
import {validarPresupuesto} from "./helper";
import ControlPresupuesto from "./components/ControlPresupuesto";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            presupuesto: '',
            restante: '',
            gastos: {}
        };
    }

    componentDidMount() {
        this.obtenerPresupuesto();
    }

    obtenerPresupuesto() {
        let presupuesto = prompt('Cual es el presupuesto?');

        let resultado = validarPresupuesto(presupuesto);

        if (resultado) {
            this.setState({
                presupuesto: presupuesto,
                restante: presupuesto
            });
        } else {
            this.obtenerPresupuesto();
        }

        console.log(presupuesto);
    }

    //Agregar un nuevo gasto al state
    agregarGasto = gasto => {
        //tomar una copia del state actual
        const gastos = {...this.state.gastos};
        //agregar el gasto al state
        gastos[`gasto${Date.now()}`] = gasto;

        //Ponerlo en state

        this.setState({
            gastos
        });

    };

    render() {
        return (
            <div className="app container">
                <Header
                    titulo="Gasto Semanal"/>

                <div className="contenido-principal">
                    <div className="row">
                        <div className="one-half column">
                            <FormularioGasto
                                agregarGasto={this.agregarGasto}/>
                        </div>
                        <div className="one-half column">
                            <Listado gastos={this.state.gastos}/>
                          <ControlPresupuesto/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
