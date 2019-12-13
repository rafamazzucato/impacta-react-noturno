import React from 'react'

export class Componente1 extends React.Component{
    
    constructor(){
        
    }

    componentWillMount(){
    }

    componentDidMount(){
        setTimeout(() => this.setState( {
            ...this.state,
            teste : 'Thomazelli',
            teste5 : 'Victor'
        }), 5000)
    }

    state = {
        teste : 'Rafael',
        teste2: 'Teste2',
        teste3: 'Teste3',
        teste4: 'Teste4',
    }

    render(){
        console.log(`render ${this.state.teste}`)
        return (
            <div>{this.state.teste}</div>
        )
    }
}