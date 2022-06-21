import React from 'react'
import { useDispatch } from 'react-redux'
import type { AppProps } from 'next/app'

import { wrapper } from '../features/store'
import { init } from '../features/app/slice'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <Component {...pageProps} />
  )
}

App.getInitialProps = wrapper.getInitialPageProps(store => () => {})
export default wrapper.withRedux(App)
