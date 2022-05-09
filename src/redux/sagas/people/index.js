import {call, apply, take, select, takeEvery, fork, put} from "redux-saga/effects";
import {LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE} from "../../reducers/people/actions";
import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_SUCCESS,
  LOAD_USER_DETAILS_FAILURE
} from "../../reducers/peopleDetails/actions";
import {LOCATION_CHANGE} from "redux-first-history";
import {selectPeople} from "../../reducers/people/selectors";
import {matchPath} from "react-router";
import {getRouteConfig, MAIN_ROUTE, PEOPLE_DETAILS_ROUTE} from "../../../routes";


export function* loadPeopleDetails({payload}) {
  try {
    const request = yield call(fetch, `https://swapi.dev/api/people/${payload.id}`)
    const data = yield apply(request, request.json)

    yield put({type: LOAD_USER_DETAILS_SUCCESS, payload: data})

  } catch (e) {
    yield put({type: LOAD_USER_DETAILS_FAILURE, payload: e})
  }
}

export function* loadPeopleList({payload}) {
  try {
    const {page, search} = payload
    const request = yield call(fetch, `https://swapi.dev/api/people?page=${page}&search=${search}`)
    const data = yield apply(request, request.json)

    yield put({type: LOAD_USERS_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: LOAD_USERS_FAILURE, payload: e})
  }
}

export function* routeChangeSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE)

    const mainPage = matchPath(getRouteConfig(MAIN_ROUTE), action.payload.location.pathname)
    if (mainPage) {
      const {page, search} = yield select(selectPeople)

      yield put({type: LOAD_USERS, payload: {page, search}})
    }

    const detailsPage = matchPath(getRouteConfig(PEOPLE_DETAILS_ROUTE), action.payload.location.pathname)
    if (detailsPage) {
      const {id} = detailsPage.params

      if (id) {
        yield put({type: LOAD_USER_DETAILS, payload: {id}})
      }
    }

  }
}

export default function* peopleSaga() {
  yield fork(routeChangeSaga)
  yield takeEvery(LOAD_USERS, loadPeopleList)
  yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails)
}