import { getUserList } from '../services/tallerService'

export const initializer = () => ({
  person: {},
  loading: false,
})

export const INITIAL_STATE = initializer()

export const actions = {
  START: 'START',
  FINISH: 'FINISH',
  CLEAR: 'CLEAR',
}

export const personListThunk = (dispatch, id) => {
  dispatch({ type: actions.START })

  const success = ({ data }) => {
    dispatch({ type: actions.FINISH, person: data })
  }
  return getUserList(id).then(success)
}

export const clearPerson = (dispatch) => dispatch({ type: actions.CLEAR })

export const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actions.START:
      return {
        ...state,
        loading: true,
      }
    case actions.FINISH:
      return {
        ...state,
        loading: false,
        person: action.person,
      }
    case actions.CLEAR:
      return {
        ...state,
        person: {},
      }
    default:
      return state
  }
}

export const person = (state) => state.tallerModule.person
export const loading = (state) => state.tallerModule.loading
