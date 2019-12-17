import React, { Component } from 'react'
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {
    
    initialState = {
        codigo: '123',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }

    state = { ...this.initialState, cursos : [] }

    constructor(props) {
        super(props);
        this.listar();
    }

    listar(){
        axios.get(URL).then(response =>{
            this.setState({cursos : response.data})
        });
    }

    codigoChange(html){
        this.setState({codigo : html.target.value});
    }

    change(html){
        this.setState({descricao : html.target.value});
    }

    cargaHorariaChange(html){
        this.setState({cargaHoraria : html.target.value})
    }

    precoCallback(html){
        this.setState({preco : html.target.value})
    }

    categoriaCallback(html){
        this.setState({categoria : html.target.value})
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}
                        
                        descricao={this.state.descricao}
                        descricaoChange={this.change.bind(this)} 
                        
                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}

                        preco={this.state.preco}
                        precoC={this.precoCallback.bind(this)}

                        categoria={this.state.categoria}
                        categoriaCallback={this.categoriaCallback.bind(this)}
                    
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos}/>
                </div>
            </div>
        )
    }
}