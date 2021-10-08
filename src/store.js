import { combineReducers, createStore } from 'redux'
import modules from './modules/modules'

const initialState = {}

const store = createStore(combineReducers(modules.reducers), initialState)

export default store
