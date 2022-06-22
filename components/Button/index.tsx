import React from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  text: string
  func: any
}

const Button = ({ text, func }: Props) => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(func())}>
      {text}
    </button>
  )
}

export default Button
