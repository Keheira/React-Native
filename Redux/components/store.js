import { createStore } from 'redux'
import RootReducer from './reducers/index'
import Store from './state'

export const store = createStore(RootReducer, Store)