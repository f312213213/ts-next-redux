import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { createEpicMiddleware } from 'redux-observable'

import reducer from './reducer'
import epics from './epics'

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), epicMiddleware]
})

export const makeStore = () => store

// @ts-ignore
epicMiddleware.run(epics)

export const wrapper = createWrapper(makeStore, {
  debug: true
})

export type RootState = ReturnType<typeof store.getState>
