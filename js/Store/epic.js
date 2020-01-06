import { of, from } from "rxjs";
import {setLinks} from "./actions";
import {ActionTypes} from '../constants'
import {
  catchError,
  map,
  filter,
  switchMap,
  withLatestFrom
} from "rxjs/operators";

export const fetchLinksFlow = (
  action$,
  state$,
  { service }
) =>
  action$.pipe(
    filter(action=>action.type === ActionTypes.RECEIVE_LINKS),
    switchMap(() => from(service.fetchDataFromAPI())),
    map(data => data),
    map(setLinks),
    //catchError(error => of(actions.dataError(error)))
  );
