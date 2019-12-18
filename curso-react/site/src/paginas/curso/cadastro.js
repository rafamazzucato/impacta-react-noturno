import React, { Component } from 'react'
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {
    
    initialState = {
        _id : null,
        codigo: '',
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
            this.props.callbackTotal(response.data.length)
        });
    }

    codigoChange(event){
        this.setState({codigo : event.target.value})
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

    adicionar(evento){
        evento.preventDefault();
        
        const { _id, codigo, descricao, cargaHoraria, categoria, preco} = this.state
        
        const body = {
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco
        }
        if(_id){
            axios.put(`${URL}/${_id}`, body)
            .then(_ => this.trataSucesso(evento, 'Curso atualizado'))
            .catch(error => {
                this.trataErro(error, 'Ocorreu erro ao atualizar curso')
            })
        }else{
            axios.post(URL, body)
            .then(_ => this.trataSucesso(evento, 'Curso adicionado'))
            .catch(error => this.trataErro(error, 'Ocorreu erro ao adicionar curso'))
        }
        
    }

    trataSucesso(evento, msg){
        this.limpar(evento)
        this.listar()
        alert(msg)
    }

    trataErro(error, msg){
        console.log(error)
        alert(msg)
    }

    limpar(event){
        if(event){
            event.preventDefault();
        }
        
        this.setState(this.initialState)
    }

    remover(curso){
        if(window.confirm(`Deseja realmente deletar o curso - ${curso.descricao}?`)){
            axios.delete(`${URL}/${curso._id}`)
            .then(_ =>{
                this.trataSucesso(null, 'Curso deletado com sucesso!')
            })
            .catch(error => {
                this.trataErro(error, 'Ocorreu erro ao deletar curso!')
            })
        }
    }

    consultar(curso){
        this.setState({
            _id : curso._id,
            codigo: curso.codigo,
            descricao : curso.descricao,
            cargaHoraria : curso.cargaHoraria,
            preco : curso.preco,
            categoria : curso.categoria
        })
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        codigo={this.state.codigo}
                        descricao={this.state.descricao}
                        cargaHoraria={this.state.cargaHoraria}
                        preco={this.state.preco}
                        categoria={this.state.categoria}
                        
                        codigoChange={this.codigoChange.bind(this)}
                        descricaoChange={this.change.bind(this)} 
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                        precoC={this.precoCallback.bind(this)}
                        categoriaCallback={this.categoriaCallback.bind(this)}
                    
                        adicionar={this.adicionar.bind(this)}
                        limpar={this.limpar.bind(this)}
                        isAtualizar={this.state._id ? true : false}
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso 
                        cursos={this.state.cursos}
                        removerCurso={this.remover.bind(this)}
                        consultarCurso={this.consultar.bind(this)}
                    />
                </div>
            </div>
        )
    }
}