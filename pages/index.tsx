import type { NextPage } from 'next'

import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../features/store'
import { decrement, increment } from '../features/counter/slice'
import Button from '../components/Button'

const Home: NextPage = () => {
  const counter = useSelector((state: RootState) => state.counter.counter)
  return (
    <div className={'page'}>
      <Button
        text={'Decrement'}
        func={decrement}
      />

      <p>
        {counter}
      </p>

      <Button
        text={'Increment'}
        func={increment}
      />
    </div>
  )
}

export default Home
