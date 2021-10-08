import { fireEvent, render, screen } from '@testing-library/react'
import Taller from './Taller'

describe('Taller test', () => {
  const getPersonMockedList = jest.fn()
  const clearMockedPerson = jest.fn()
  const person = { name: 'Dummy', email: 'dummy@dummy.com', phone: '1234' }

  const component = (
    <Taller
      person={person}
      getPersonList={getPersonMockedList}
      clearPerson={clearMockedPerson}
    />
  )

  it('should render delete and search buttons', () => {
    render(component)

    const buttons = screen.queryAllByRole('button')
    const searchButton = screen.getByText('Buscar')
    const deleteButton = screen.getByText('Borrar')

    expect(buttons).toHaveLength(2)
    expect(searchButton).toBeDefined()
    expect(deleteButton).toBeDefined()
  })

  it('call getPersonList when Buscar button is clicked', async () => {
    render(component)

    const searchButton = screen.getByText('Buscar')

    fireEvent.click(searchButton)

    const nameText = screen.getByText('Dummy')
    const emailText = screen.getByText('dummy@dummy.com')
    const phoneText = screen.getByText('1234')

    expect(getPersonMockedList).toHaveBeenCalledTimes(1)
    expect(nameText).toBeDefined()
    expect(emailText).toBeDefined()
    expect(phoneText).toBeDefined()
  })

  it('call clearPerson when Borrar button is clicked', async () => {
    render(component)

    const clearButton = screen.getByText('Borrar')

    fireEvent.click(clearButton)

    expect(clearMockedPerson).toHaveBeenCalledTimes(1)
  })
})
