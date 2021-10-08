import { getUserList } from '../services/tallerService'
import * as module from './tallerModule'

jest.mock('../services/tallerService')

const iniState = { person: {}, loading: false }
const person = { name: 'Dummy', email: 'dummy@dummy.com', phone: '1234' }

describe('initializer test', () => {
  it('returns the initial state', () => {
    const initialize = module.initializer()
    expect(initialize).toEqual(iniState)
  })
})

describe('dispatch tests', () => {
  it('returns START and FINISH actions when request for personListThunk is called', async () => {
    const mockedDispatch = jest.fn()
    const startAction = { type: module.actions.START }
    const finishAction = {
      type: module.actions.FINISH,
      data: person,
    }

    getUserList.mockResolvedValue({ data: person })

    await module.personListThunk(mockedDispatch)

    expect(mockedDispatch.mock.calls[0][0].type).toBe(startAction.type)
    expect(mockedDispatch.mock.calls[1][0].type).toBe(finishAction.type)
    expect(mockedDispatch.mock.calls[1][0].person).toEqual(finishAction.data)
  })

  it('returns CLEAR action when clearPerson is called', async () => {
    const mockedDispatch = jest.fn()
    const clearAction = { type: module.actions.CLEAR }

    module.clearPerson(mockedDispatch)

    expect(mockedDispatch.mock.calls[0][0].type).toBe(clearAction.type)
  })
})

describe('reducers tests', () => {
  it('return INITIAL_STATE when action is undefined for default case', () => {
    const action = undefined

    const state = module.reducer(undefined, action)

    expect(state).toStrictEqual(iniState)
  })

  it('return state when action is START', () => {
    const action = { type: module.actions.START }

    const newState = { ...iniState, loading: true }

    const state = module.reducer(iniState, action)

    expect(state).toStrictEqual(newState)
  })

  it('return state when action is FINISH', () => {
    const action = { type: module.actions.FINISH, person }

    const newState = { ...iniState, loading: false, person: person }

    const state = module.reducer(iniState, action)

    expect(state).toStrictEqual(newState)
  })

  it('return state when action is CLEAR', () => {
    const action = { type: module.actions.CLEAR }

    const newState = { ...iniState, loading: false, person: {} }

    const state = module.reducer(iniState, action)

    expect(state).toStrictEqual(newState)
  })
})

describe('selectors test', () => {
  it('returns person from state', () => {
    const state = { tallerModule: { person: person } }

    const user = module.person(state)
    expect(user).toBe(person)
  })

  it('returns loading from state', () => {
    const state = { tallerModule: { loading: true } }

    const load = module.loading(state)
    expect(load).toBe(true)
  })
})
