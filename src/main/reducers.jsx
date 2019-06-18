import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    //'todo' objeto gerenciado pelo redux.
    //Mapeia uma function responsável por sempre retornar o estado mais atual do objeto.
    todo: () => ({
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
    })
})

export default rootReducer