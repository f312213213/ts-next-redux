import { catchError, mergeMap, map, Observable, of, takeUntil } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import api from '../../api'
import {
  fetchInitRejected,
  fetchInitSuccess,
  fetchInitRequest,
  fetchInitCanceled,
  incrementSuccess,
  incrementRequest,
  incrementRejected,
  incrementCanceled,
  decrementSuccess,
  decrementRequest,
  decrementRejected,
  decrementCanceled
} from './slice'

export const fetchInitRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(fetchInitRequest.type),
  mergeMap(() => {
    return api.counter.fetchInitData().pipe(
      map(response => {
        return fetchInitSuccess(response)
      }),
      takeUntil(action$.pipe(ofType(fetchInitCanceled.type))),
      catchError(() => of(fetchInitRejected()))
    )
  })
)

export const incrementRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(incrementRequest.type),
  mergeMap(() => {
    return api.counter.fetchIncrementData().pipe(
      map(response => {
        return incrementSuccess(response)
      }),
      takeUntil(action$.pipe(ofType(incrementCanceled.type))),
      catchError(() => of(incrementRejected({})))
    )
  })
)

export const decrementRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(decrementRequest.type),
  mergeMap(() => {
    return api.counter.fetchDecrementData().pipe(
      map(response => {
        return decrementSuccess(response)
      }),
      takeUntil(action$.pipe(ofType(decrementCanceled.type))),
      catchError(() => of(decrementRejected({})))
    )
  })
)
