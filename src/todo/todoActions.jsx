import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    // const search = description ? `&description__regex=/${description}/` : ''

    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request //middleware
    }
}

export const add = (description) => {
    //simplificação criada no ecmascript 2015. Não precisa ser { description: description }
    const request = axios.post(URL, {description })
    return {
        type: 'TODO_ADDED',
        payload: request
    }
}