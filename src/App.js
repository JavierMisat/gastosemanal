import React, {Component} from 'react';
import './css/App.css';
import Header from "./components/Header";
import FormularioGasto from "./components/Formulario";

class App extends Component {
    render() {
        return (
            <div className="app container">
                <Header
                    titulo="Gasto Semanal"/>

                <div className="contenido-principal">
                    <div className="row">
                        <div className="one-half column">
                            <FormularioGasto/>
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
