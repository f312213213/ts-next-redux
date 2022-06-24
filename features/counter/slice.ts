import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IState, IIncrementPayload, IDecrementPayload, IInitPayload } from './interface'

const initialState: IState = {
  counter: 0,
  status: 'INITIAL'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 有需要用 request 帶入 default 參數時才需要多用 reducer
    fetchInitRequest: (state) => {
      state.status = 'LOADING'
    },
    fetchInitSuccess: (state, action: PayloadAction<IInitPayload>) => {
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
    incrementSuccess: (state, action: PayloadAction<IIncrementPayload>) => {
      const { number } = action.payload
      state.counter = number
      state.status = 'SUCCESS'
    },
    incrementRejected: (state) => {
      state.counter = 999
      state.status = 'FAILURE'
    },
    incrementCanceled: () => initialState,
    decrementRequest: (state) => {
      state.status = 'LOADING'
    },
    decrementSuccess: (state, action: PayloadAction<IDecrementPayload>) => {
      const { number } = action.payload
      state.counter = number
      state.status = 'SUCCESS'
    },
    decrementRejected: (state) => {
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
