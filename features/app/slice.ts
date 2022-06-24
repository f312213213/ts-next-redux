import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IState, IInitPayload } from './interface'

const initialState: IState = {
  init: false,
  status: 'INITIAL'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchInitRequest: (state) => {
      state.status = 'LOADING'
    },
    fetchInitSuccess: (state, action :PayloadAction<IInitPayload>) => {
      const { init } = action.payload
      state.init = init
      state.status = 'SUCCESS'
    },
    fetchInitRejected: (state) => {
      state.init = false
      state.status = 'FAILURE'
    },
    fetchInitCanceled: () => initialState
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.app
    })
  }
})

export const {
  fetchInitRequest,
  fetchInitSuccess,
  fetchInitRejected,
  fetchInitCanceled
} = appSlice.actions

export default appSlice
