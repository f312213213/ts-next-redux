import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reducer from './reducer'

const store = configureStore({
  reducer
})

export const makeStore = () => store

export const wrapper = createWrapper(makeStore, {
  debug: true
})

export type RootState = ReturnType<typeof store.getState>
