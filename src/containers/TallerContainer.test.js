import React from 'react'
import { shallow, mockedStore } from '../test-config'
import * as tallerModule from '../modules/tallerModule'
import TallerContainer from './TallerContainer'

jest.mock('../modules/tallerModule.js')

mockedStore.dispatch = jest.fn()

const component = <TallerContainer store={mockedStore} />
let wrapper

const person = { name: 'Dummy', email: 'dummy@dummy.com', phone: '1234' }

describe('TallerContainer tests', () => {
  beforeEach(() => {
    tallerModule.person.mockReturnValue(person)
    wrapper = shallow(component).shallow()
  })

  it('returns state props from TallerContainer', () => {
    const personProp = wrapper.props().person

    expect(personProp).toBe(person)
  })

  it('calls personListThunk when getPersonList is triggered', () => {
    const id = 1
    wrapper.props().getPersonList(id)

    expect(tallerModule.personListThunk).toHaveBeenCalledWith(
      mockedStore.dispatch,
      id,
    )
  })

  it('calls clearPerson when clearPerson is triggered', () => {
    wrapper.props().clearPerson()

    expect(tallerModule.clearPerson).toHaveBeenCalledWith(mockedStore.dispatch)
  })
})
