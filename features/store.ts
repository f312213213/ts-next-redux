import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { createEpicMiddleware } from 'redux-observable'

import reducer from './reducer'
import epics from './epics'

const makeStore = () => {
  const epicMiddleware = createEpicMiddleware()
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), epicMiddleware],
    devTools: true
  })
  epicMiddleware.run(epics)
  return store
}

export const wrapper = createWrapper(makeStore, {
  debug: true
})

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
