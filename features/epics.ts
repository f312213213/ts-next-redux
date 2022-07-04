import { combineEpics } from 'redux-observable'
import * as counter from './counter/epic'

const rootEpic = combineEpics(
  ...Object.values({
    ...counter
  })
)

export default rootEpic
