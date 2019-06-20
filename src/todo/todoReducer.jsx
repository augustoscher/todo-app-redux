const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar cartão',
        done: true
    },
    {
        _id: 2,
        description: 'Reunião com a equipe as 10:00',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta médica na terça',
        done: false
    }]
}

//Reducer sempre recebe o estado atual do objeto e uma action;
//Sempre que uma action for executada, os reducers são chamados
//e eles devem decidir se muda o estado do objeto atual ou se mantem do jeito que está.
//Reducer sempre deve ser uma função pura que não gera efeito colateral.

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload } //vem todoActions.jsx
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data } //falta middleware
        default:
            return state
    }
}