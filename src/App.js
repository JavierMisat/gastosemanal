import React, {Component} from 'react';
import './css/App.css';
import Header from "./components/Header";
import FormularioGasto from "./components/Formulario";

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

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
