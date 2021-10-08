import React from "react"
import "./Taller.scss"

const Taller = ({ person, getPersonList, clearPerson }) => {
  const searchHandler = () => {
    const random = Math.floor(Math.random() * 10) + 1
    getPersonList(random)
  }

  const deleteHandler = () => {
    clearPerson()
  }

  const renderPerson = () => {
    const { name, email, phone } = person
    return (
      <div className='list'>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    )
  }

  const renderButtons = () => (
    <>
      <button className={"delete"} onClick={deleteHandler}>
        Borrar
      </button>
      <button className={"search"} onClick={searchHandler}>
        Buscar
      </button>
    </>
  )

  return (
    <div className='container'>
      {renderPerson()}
      {renderButtons()}
    </div>
  )
}

export default Taller
