import type { NextPage } from 'next'
import Text from '../components/Text'
import React from 'react'

const Home: NextPage = () => {
  const [state, setState] = React.useState<string>('off')
  return (
    <div>
      <Text text={state}/>
      <button onClick={() => {
        if (state === 'off') return setState('on')
        return setState('off')
      }}>
        {state}
      </button>
    </div>
  )
}

export default Home
