import api from '../../api'
import { combineEpics, ofType } from 'redux-observable'
import * as slice from './slice'
import { catchError, mergeMap, Observable, of, takeUntil } from 'rxjs'

export const fetchInitRequestEpic = (action$: Observable<any>) => action$.pipe(
  ofType(slice.fetchInitRequest.type),
  mergeMap(() =>
    api.app.fetchInitRequest().pipe(
      mergeMap(response => {
        return of(slice.fetchInitSuccess(response))
      }),
      takeUntil(action$.pipe(ofType(slice.fetchInitCanceled.type))),
      catchError(() => of(slice.fetchInitRejected()))
    )
  )
)

const epics = combineEpics(
  fetchInitRequestEpic
)

export default epics
