import { catchError, mergeMap, map, Observable, of } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import { increment, decrement, initNumber } from './slice'
import api from '../../api/api'

export const fetchInitData = (action$: Observable<any>) => action$.pipe(
  ofType('counter/fetchInit'),
  mergeMap(() =>
    api.counter.fetchInitData().pipe(
      mergeMap(response => {
        return of(initNumber(response.number))
      }
      )
    )
  )
)

export const fetchIncrementData = (action$: Observable<any>) => action$.pipe(
  ofType('counter/fetchIncrement'),
  mergeMap(() =>
    api.counter.fetchIncrementData().pipe(
      mergeMap(response => {
        return of(increment(response.number))
      }
      )
    )
  )
)

export const fetchDecrementData = (action$: Observable<any>) => action$.pipe(
  ofType('counter/fetchDecrement'),
  mergeMap(() =>
    api.counter.fetchDecrementData().pipe(
      mergeMap(response => {
        return of(decrement(response.number))
      }
      )
    )
  )
)

const epics = combineEpics(
  fetchInitData,
  fetchIncrementData,
  fetchDecrementData
)

export default epics
