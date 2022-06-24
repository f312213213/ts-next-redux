import React from 'react'
import { useDispatch } from 'react-redux'

import { IProps } from './interface'

const Button = ({ text, func }: IProps) => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(func())}>
      {text}
    </button>
  )
}

export default Button
