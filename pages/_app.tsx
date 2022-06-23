import React from 'react'
import type { AppProps, AppContext } from 'next/app'

import { wrapper } from '../features/store'
import '../styles/globals.css'
import { fetchInitRequest } from '../features/counter/slice'
import { init } from '../features/app/slice'

const App = ({ Component, pageProps }: AppContext & AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

App.getInitialProps = wrapper.getInitialPageProps(store => async () => {
  await store.dispatch(fetchInitRequest({}))
  await store.dispatch(init())

  return {}
}
)
export default wrapper.withRedux(App)
