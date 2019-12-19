const INITIAL_STATE = {
    data: '2019-12-11',
    nome: 'Rafael',
    email: 'rafael@verzel.com.br',
    telefone: 11223344,
    assunto: 'informações sobre o curso 105'
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZA_DATA' : return {...state, data : action.value};
        case 'ATUALIZA_NOME' : return {...state, nome : action.value}
        default : return state
    }
}