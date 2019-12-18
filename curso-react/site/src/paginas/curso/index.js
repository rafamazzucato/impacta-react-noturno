import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho';
import { CadastroCurso } from './cadastro';

export class CursoIndex extends React.Component {

    state = {
        totalCursos : 0
    }

    callbackTotal(totalCursos){
        this.setState({totalCursos})
    }

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo={"cadastro de cursos - Total:" + this.state.totalCursos}/>
                <CadastroCurso callbackTotal={this.callbackTotal.bind(this)}/>
            </div>
        )
    }
}