import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//middlewares
import promise from 'redux-promise' //espera que a promise seja resolvida quando ela for retornada por um action creator
import multi from 'redux-multi' //serve para retornar varias actions de um action creator
import thunk from 'redux-thunk' //faz com que um action creator retorne um metodo

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('app')
)