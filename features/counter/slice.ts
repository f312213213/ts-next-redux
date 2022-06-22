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
    fetchInitRequest: {
      reducer: (state) => {
        state.status = 'LOADING'
      },
      // @ts-ignore
      prepare: () => ({})
    },
    fetchInitSuccess: (state, action) => {
      const { number } = action.payload
      state.counter = number
      state.status = 'SUCCESS'
    },
    fetchInitRejected: (state) => {
      state.counter = 999
      state.status = 'FAILURE'
    },
    fetchInitCanceled: () => initialState,
    incrementRequest: {
      reducer: (state, action) => {
        state.status = 'LOADING'
      },
      // @ts-ignore
      prepare: () => ({})
    },
    incrementSuccess: (state, action) => {
      const { number } = action.payload
      state.counter = number
      state.status = 'SUCCESS'
    },
    incrementRejected: (state, action) => {
      state.counter = 999
      state.status = 'FAILURE'
    },
    incrementCanceled: () => initialState,
    decrementRequest: {
      reducer: (state, action) => {
        state.status = 'LOADING'
      },
      // @ts-ignore
      prepare: () => ({})
    },
    decrementSuccess: (state, action) => {
      const { number } = action.payload
      state.counter = number
      state.status = 'SUCCESS'
    },
    decrementRejected: (state, action) => {
      state.counter = 999
      state.status = 'FAILURE'
    },
    decrementCanceled: () => initialState,
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
  fetchInitRequest,
  fetchInitSuccess,
  fetchInitRejected,
  fetchInitCanceled,
  incrementRequest,
  incrementSuccess,
  incrementRejected,
  incrementCanceled,
  decrementRequest,
  decrementSuccess,
  decrementRejected,
  decrementCanceled
} = counterSlice.actions

export default counterSlice
