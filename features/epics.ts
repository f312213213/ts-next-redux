import { combineEpics } from 'redux-observable'
import counter from './counter/epic'
import app from './app/epic'

export default combineEpics(
  counter,
  // @ts-ignore
  app
)
