import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    //não fazer sempre. arrow function que recebe um dispatch e getState
    return (dispatch, getState) => {
        //search vai até a store, pega o valor de description e decide se coloca ou não na requisição.
        //evita que tenha que passar a description pra todos os metodos que chamam search()
        const description = getState().todo.description 
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                dispatch({type: 'TODO_SEARCHED', payload: resp.data })
            })
    }
}

export const add = (description) => {
    //retorna um método que recebe dispatch como parametro. 
    //primeiro faz o post; 
    //depois chama o dispatch e retorna a action 'TODO_ADDED'
    //depois chama o dispatch chamando o metodo search, que faz um get no backend e retorna um action 'TODO_SEARCHED'
    return dispatch => {
         axios.post(URL, {description })
            //é possível encadear açoes
            .then(resp => {
                dispatch(clear())
            })
            .then(resp => {
                dispatch(search())
            })
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {... todo, done: true})
            .then(resp => {
                dispatch(search())
            })
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {... todo, done: false})
            .then(resp => {
                dispatch(search())
            })
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => {
                dispatch(search())
            })
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()]
}


// export const add = (description) => {
//     //simplificação criada no ecmascript 2015. Não precisa ser { description: description }
//     const request = axios.post(URL, {description })
//     return [
//         { type: 'TODO_ADDED', payload: request },
//         search()
//     ]
// }
