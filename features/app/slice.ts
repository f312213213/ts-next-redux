import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { IState } from './interface'

const initialState: IState = {
  init: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: (state) => {
      state.init = true
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.app
    })
  }
})

export const { init } = appSlice.actions

export default appSlice
