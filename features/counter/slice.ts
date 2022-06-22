import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IState } from './interface'

const initialState: IState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = action.payload
    },
    decrement: (state, action) => {
      state.counter = action.payload
    },
    initNumber: (state, action) => {
      state.counter = action.payload
    },
    fetchInit: (state) => {},
    fetchIncrement: (state) => {},
    fetchDecrement: (state) => {}
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.counter
    })
  }
})

export const {
  increment,
  decrement,
  initNumber,
  fetchInit,
  fetchIncrement,
  fetchDecrement
} = counterSlice.actions

export default counterSlice
