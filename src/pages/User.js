import React, { useContext, Fragment } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton/index.js'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>
        Cerrar sesión
      </SubmitButton>
    </>
  )
}
