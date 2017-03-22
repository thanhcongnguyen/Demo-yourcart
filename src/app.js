import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducers/reducer.js'
import css from '../public/css/style.css'
import Cart from './component/cart.js'

var store = createStore(Reducer)
ReactDOM.render(
    <Provider store={store}>
        <Cart/>
    </Provider>,
    document.getElementById('root')
)



