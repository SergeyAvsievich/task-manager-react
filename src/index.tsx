import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
)