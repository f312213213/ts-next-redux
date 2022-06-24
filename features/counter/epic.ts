import { catchError, mergeMap, map, Observable, of, takeUntil } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import api from '../../api'
import * as slice from './slice'

export const fetchInitRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(slice.fetchInitRequest.type),
  mergeMap(() =>
    api.counter.fetchInitData().pipe(
      mergeMap(response => {
        return of(slice.fetchInitSuccess(response))
      }),
      takeUntil(action$.pipe(ofType(slice.fetchInitCanceled.type))),
      catchError(() => of(slice.fetchInitRejected()))
    )
  )
)

export const incrementRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(slice.incrementRequest.type),
  mergeMap(() =>
    api.counter.fetchIncrementData().pipe(
      mergeMap(response => {
        return of(slice.incrementSuccess(response))
      }),
      takeUntil(action$.pipe(ofType(slice.incrementCanceled.type))),
      catchError(() => of(slice.incrementRejected()))
    )
  )
)

export const decrementRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(slice.decrementRequest.type),
  mergeMap(() =>
    api.counter.fetchDecrementData().pipe(
      mergeMap(response => {
        return of(slice.decrementSuccess(response))
      }),
      takeUntil(action$.pipe(ofType(slice.decrementCanceled.type))),
      catchError(() => of(slice.decrementRejected()))
    )
  )
)

const epics = combineEpics(
  fetchInitRequestEpic,
  incrementRequestEpic,
  decrementRequestEpic
)

export default epics
