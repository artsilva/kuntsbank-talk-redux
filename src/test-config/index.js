import { mount, render, shallow, configure } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import { combineReducers, createStore } from 'redux'
import modules from '../modules/modules'

configure({ adapter: new Adapter() })

const initialState = {}

const mockStore = configureMockStore([])

export const mockedStore = mockStore(initialState)

export const initializeStoreWithState = (state) =>
  createStore(combineReducers(modules.reducers), state)

export const initializeRealStore = () => initializeStoreWithState(initialState)

export { shallow, render, mount }
