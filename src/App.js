import React, {Component} from 'react';
import './css/App.css';
import Header from "./components/Header";
import FormularioGasto from "./components/Formulario";
import Listado from "./components/Listado";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            presupuesto: '',
            restante: '',
            gastos: {}
        };
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
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
