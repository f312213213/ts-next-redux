import React from 'react'
import type { AppProps, AppContext } from 'next/app'

import { wrapper } from '../features/store'
import '../styles/globals.css'
import { fetchInitRequest } from '../features/counter/slice'
import { StateObservable } from 'redux-observable'
import { of, Subject, lastValueFrom, firstValueFrom } from 'rxjs'
import rootEpic from '../features/epics'

const App = ({ Component, pageProps }: AppContext & AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

App.getInitialProps = wrapper.getInitialAppProps(store => async () => {
  const state$: StateObservable<any> = new StateObservable(new Subject(), store.getState())
  const fetchInitRequestAction = await lastValueFrom(rootEpic(of(fetchInitRequest()), state$, {}))
  store.dispatch(fetchInitRequestAction)

  return {
    pageProps: {}
  }
}
)
export default wrapper.withRedux(App)
