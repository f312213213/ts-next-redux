import { catchError, mergeMap, map, Observable, of } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import api from '../../api/api'
import {
  increment,
  decrement,
  fetchInitRequest,
  fetchInitSuccess,
  fetchInitRejected,
  fetchInitCanceled,
  fetchIncrement,
  fetchDecrement
} from './slice'

export const fetchInitData = (action$: Observable<any>) => action$.pipe(
  ofType(fetchInitRequest.type),
  mergeMap(() =>
    api.counter.fetchInitData().pipe(
      mergeMap(response => {
        return of(fetchInitSuccess(response.number))
      }
      )
    )
  )
)

export const fetchIncrementData = (action$: Observable<any>) => action$.pipe(
  ofType(fetchIncrement.type),
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
  ofType(fetchDecrement.type),
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
