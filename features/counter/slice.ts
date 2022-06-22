import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IState } from './interface'

const initialState: IState = {
  counter: 0,
  status: 'INITAL'
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
    // @ts-ignore
    fetchInitRequest: {
      reducer: (state) => {
        state.status = 'LOADING'
      },
      // @ts-ignore
      prepare: () => ({})
    },
    fetchInitSuccess: (state, action) => {
      state.counter = action.payload
      state.status = 'SUCCESS'
    },
    fetchInitRejected: (state, action) => {
      state.counter = 999
      state.status = 'FAILURE'
    },
    fetchInitCanceled: () => initialState,
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
  fetchInitRequest,
  fetchInitSuccess,
  fetchInitRejected,
  fetchInitCanceled,
  fetchIncrement,
  fetchDecrement
} = counterSlice.actions

export default counterSlice
