import { combineEpics } from 'redux-observable'
import counter from './counter/epic'

export default combineEpics(
  counter
)
