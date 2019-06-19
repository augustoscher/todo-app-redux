import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    //'todo' objeto gerenciado pelo redux.
    //Mapeia uma function responsável por sempre retornar o estado mais atual do objeto.
    todo: todoReducer
})

export default rootReducer