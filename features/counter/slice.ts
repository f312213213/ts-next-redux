import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IState } from './interface'

const initialState: IState = {
  counter: 0,
  status: 'INITIAL'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchInitRequest: (state) => {
      state.status = 'LOADING'
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
    incrementRequest: (state) => {
      state.status = 'LOADING'
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
    decrementRequest: (state) => {
      state.status = 'LOADING'
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
    decrementCanceled: () => initialState
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
  fetchInitCanceled,
  fetchInitRejected,
  incrementRequest,
  incrementSuccess,
  incrementCanceled,
  incrementRejected,
  decrementSuccess,
  decrementCanceled,
  decrementRejected,
  decrementRequest
} = counterSlice.actions

export default counterSlice
