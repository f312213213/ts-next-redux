import appSlice from './app/slice'
import counterSlice from './counter/slice'

const reducer = {
  app: appSlice.reducer,
  counter: counterSlice.reducer
}

export default reducer
